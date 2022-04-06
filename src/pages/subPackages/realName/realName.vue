<template>
  <div class="realName-container">
    <div class="realName-content">
      <div>
        <div class="realName-prompt-title">实名认证</div>
        <span class="realName-prompt-subtitle">填写以下信息，进行实名认证，将自动绑定名下会员卡</span>
      </div>

      <div class="realName-form-container">
        <AtForm class="realName-form">
          <AtInput :border="false" required name='form_name' title='姓名' type='text' placeholder='请输入本人真实姓名' :value="form_name" :onChange="handleNameChange" />
          <div class="line"></div>

          <!-- 提交数据用下面这个 -->
          <div class="type-class" @click="onClickType" v-if="!memberId">
            <div class="xing">*</div>
            <div class="prompt">证件类型</div>
            <div v-if="form_type.length == 0" class="nor-title">请选择证件类型</div>
            <div v-else class="sel-title">{{form_type}}</div>
            <div class="img-arrow">
              <img v-if="isShowActionSheet" class="instructions-img" src="@/assets/image/global/arrow_shang.png" alt="">
              <img v-else class="instructions-img" src="@/assets/image/global/arrow_xia.png" alt="">
            </div>
          </div>

          <!-- 回显数据用下面这个 -->
          <div class="type-class" v-else>
            <div class="xing">*</div>
            <div class="prompt">证件类型</div>
            <div v-if="form_type.length == 0" class="nor-title">请选择证件类型</div>
            <div v-else class="sel-title">{{form_type}}</div>
          </div>

          <AtActionSheet cancelText='取消' :isOpened="isShowActionSheet" :on-close="handleClose">
            <AtActionSheetItem :on-click="clickBtn1">
              身份证
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn2">
              港澳通行证
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn3">
              护照
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn4">
              军官证
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn5">
              学生证
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn6">
              驾驶证
            </AtActionSheetItem>
          </AtActionSheet>
          <div class="line"></div>
          <AtInput :border="false" name='form_number' required title='证件号码' type='text' placeholder='请输入证件号码' :value="form_number" :onChange="handleIDCardChange" />
          <div class="line"></div>
        </AtForm>
      </div>
      <div class="submit-button" @click="onClickSubmit" v-if="!memberId">提交</div>
    </div>
  </div>
</template>

<script>
import { AtInput, AtForm } from 'taro-ui-vue'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import request from '@/utils/network'
export default {
    name: 'RealName',
    components: {
        AtForm,
        AtInput,
        AtActionSheet,
        AtActionSheetItem
    },
    data() {
        return {
            form_name: '',
            form_number: '',
            form_type: '',
            requestType: '',
            isShowActionSheet: false,
            memberId: '',
            verificationDict: {
                type: ''
            }
        }
    },
    mounted() {
        this.memberId = Taro.getStorageSync('member_id')
        if (this.memberId) {
            this.initData()
        }
    },
    methods: {
        async initData() {
            const res = await request({
                url: '/member/auth/c/memberRealName/' + this.memberId
            })
            if (res.code == 0) {
                const name = res.data.memberRealNameResult.realName
                const num = res.data.memberRealNameResult.certNum
                const type = res.data.memberRealNameResult.certType
                this.form_name = name
                this.form_number = num
                if (type == 0) {
                    this.form_type = '身份证'
                } else if (type == 1) {
                    this.form_type = '港澳通行证'
                } else if (type == 2) {
                    this.form_type = '军官证'
                } else if (type == 3) {
                    this.form_type = '驾驶证'
                } else if (type == 4) {
                    this.form_type = '学生证'
                } else {
                    this.form_type = '驾驶证'
                }
            }
        },
        async onClickSubmit() {
            if (this.form_name.length == 0) {
                Taro.showToast({
                    title: '请输入姓名',
                    icon: 'none',
                    mask: 'true'
                })
            } else if (this.form_type.length == 0) {
                Taro.showToast({
                    title: '请选择证件类型',
                    icon: 'none',
                    mask: 'true'
                })
            } else if (this.form_number.length == 0) {
                Taro.showToast({
                    title: '请输入证件号码',
                    icon: 'none',
                    mask: 'true'
                })
            } else {
                Taro.showLoading()
                if (this.form_type == '身份证') {
                    this.requestType = 0
                } else if (this.form_type == '港澳通行证') {
                    this.requestType = 1
                } else if (this.form_type == '军官证') {
                    this.requestType = 2
                } else if (this.form_type == '驾驶证') {
                    this.requestType = 3
                } else if (this.form_type == '学生证') {
                    this.requestType = 4
                } else {
                    //  驾驶证
                    this.requestType = 5
                }
                const userInfo = Taro.getStorageSync('user_info')
                const res = await request({
                    method: 'POST',
                    url: '/member/auth/c/memberInfo/bindIdentity',
                    data: {
                        certNum: this.form_number,
                        certType: this.requestType,
                        realName: this.form_name,
                        userId: userInfo.id
                    }
                })

                if (res.code == 0) {
                    if (res.data.hasOwnProperty('memberId')) {
                        Taro.setStorageSync('member_id', res.data.memberId)
                        Taro.showToast({
                            title: '认证成功',
                            icon: 'none',
                            mask: 'none',
                            duration: 1500
                        })
                        setTimeout(() => {
                            Taro.reLaunch({
                                url: '/pages/home/home'
                            })
                        }, 1500)
                    } else {
                        Taro.showToast({
                            title: res.message,
                            icon: 'none',
                            mask: 'none'
                        })
                    }
                    Taro.hideLoading()
                } else {
                    Taro.showToast({
                        title: res.message,
                        icon: 'none',
                        mask: 'true'
                    })
                    Taro.hideLoading()
                }
            }
        },
        handlePickerChange(e) {
            this.selectorValue = e.detail.value
        },
        handleNameChange(e) {
            this.form_name = e
        },
        handleIDCardChange(e) {
            this.form_number = e
        },
        onClickType() {
            this.isShowActionSheet = true
        },
        handleClose() {
            this.isShowActionSheet = false
        },
        clickBtn1() {
            this.form_type = '身份证'
            this.isShowActionSheet = false
        },
        clickBtn2() {
            this.form_type = '港澳通行证'
            this.isShowActionSheet = false
        },
        clickBtn3() {
            this.form_type = '护照'
            this.isShowActionSheet = false
        },
        clickBtn4() {
            this.form_type = '军官证'
            this.isShowActionSheet = false
        },
        clickBtn5() {
            this.form_type = '学生证'
            this.isShowActionSheet = false
        },
        clickBtn6() {
            this.form_type = '驾驶证'
            this.isShowActionSheet = false
        }
    }
}
</script>

<style lang="scss">
.realName-container {
    padding: 30px;
    background: #f0f4f7;
    height: 100vh;
    .realName-content {
        height: calc(100vh - 80px);
        background-color: #fff;
        border-radius: 20px;
        padding: 32px 28px 0;
        .type-class {
            position: relative;
            display: flex;
            padding: 30px 0;
            .xing {
                color: #ff7834;
            }
            .prompt {
                margin-left: 16px;
            }
            .img-arrow {
                position: absolute;
                right: 20px;
                top: 30%;
                img {
                    width: 30px;
                    height: 16px;
                }
            }
            .nor-title {
                font-size: 32px;
                margin-left: 40px;
                font-weight: 400;
                color: #d4d4d4;
            }
            .sel-title {
                font-size: 32px;
                margin-left: 40px;
                font-weight: 400;
                color: #333;
            }
        }
        .realName-prompt-title {
            font-size: 32px;
            color: #000;
            font-weight: 500;
        }
        .realName-prompt-subtitle {
            margin-top: 20px;
            font-size: 24px;
            color: #ff9452;
        }
        .realName-form-container {
            margin-top: 10px;
            .realName-form {
                .line {
                    width: 100%;
                    height: 2px;
                    background-color: #e6e6e6;
                }
                .at-input {
                    margin-left: 0;
                }
            }
        }
        .submit-button {
            height: 96px;
            line-height: 96px;
            margin-top: 30px;
            color: #fff;
            background-color: #5790ee;
            margin: 60px 10px 0;
            border-radius: 20px;
            text-align: center;
        }
    }
    .at-action-sheet__container {
        left: 0;
    }
}
</style>