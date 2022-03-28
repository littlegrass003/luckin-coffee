<template>
  <div class="realName-container">
    <div class="realName-content">
      <div>
        <div class="realName-prompt-title">实名认证</div>
        <span class="realName-prompt-subtitle">填写以下信息，进行实名认证，将自动绑定名下会员卡</span>
      </div>

      <div class="realName-form-container">
        <AtForm class="realName-form">
          <AtInput :border="false" required name='form_name' title='姓名' type='text' placeholder='请输入本人真实姓名' :value="form_name" :onChange="handleChange" />
          <div class="line"></div>
          <div class="type-class">
            <div class="xing">*</div>
            <div class="prompt">证件类型</div>
            <div v-if="form_Type.length == 0" class="nor-title" @click="onClickType">请选择证件类型</div>
            <div v-else class="sel-title" @click="onClickType">{{form_Type}}</div>
            <div class="img-arrow">
              <img v-if="isShowActionSheet" class="instructions-img" src="@/assets/image/global/arrow_shang.png" alt="">
              <img v-else class="instructions-img" src="@/assets/image/global/arrow_xia.png" alt="">
            </div>
          </div>
          <AtActionSheet cancelText='取消' :isOpened="isShowActionSheet" :on-close="handleClose">
            <AtActionSheetItem :on-click="clickBtn1">
              身份证
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn2">
              军官证
            </AtActionSheetItem>
            <AtActionSheetItem :on-click="clickBtn3">
              港澳台通行证
            </AtActionSheetItem>
          </AtActionSheet>
          <div class="line"></div>
          <AtInput :border="false" name='form_number' required title='证件号码' type='text' placeholder='请输入证件号码' :value="form_number" :onChange="handleChange" />
          <div class="line"></div>
        </AtForm>
      </div>
      <div class="submit-button">提交</div>
    </div>
  </div>
</template>

<script>
import { AtInput, AtForm } from 'taro-ui-vue'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui-vue'

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
            form_Type: '',
            isShowActionSheet: false
        }
    },
    methods: {
        handlePickerChange(e) {
            this.selectorValue = e.detail.value
        },
        handleClose() {
            this.isShowActionSheet = false
        },
        handleChange(e) {
            console.log(e)
        },
        onClickType() {
            this.isShowActionSheet = true
        },
        clickBtn1() {
            this.form_Type = '身份证'
            this.isShowActionSheet = false
        },
        clickBtn2() {
            this.form_Type = '军官证'
            this.isShowActionSheet = false
        },
        clickBtn3() {
            this.form_Type = '港澳台通行证'
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
                margin-left: 34px;
                font-weight: 400;
                color: #d4d4d4;
            }
            .sel-title {
                font-size: 32px;
                margin-left: 30px;
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