<template>
  <div class="realName-container">
    <div class="realName-content">
      <div>
        <div>实名认证</div>
        <span class="realName-prompt">填写以下信息，进行实名认证，将自动绑定名下会员卡</span>
      </div>

      <div class="realName-form-container">
        <AtForm class="realName-form">
          <AtInput :border="false" required name='value1' title='姓名' type='text' placeholder='请输入本人真实姓名' :value="value1" :onChange="handleChange" />
          <div class="line"></div>
          <AtInput :border="false" name='value2' required title='证件类型' type='text' placeholder='请选择证件类型' :value="value2" :onChange="handleChooseType">
            <span>缺下拉按钮</span>
          </AtInput>
          <div class="line"></div>
          <AtInput :border="false" name='value3' required title='证件号码' type='text' placeholder='请输入证件号码' :value="value3" :onChange="handleChange" />

        </AtForm>
      </div>
      <div class="submit-button">提交</div>
    </div>
  </div>
</template>

<script>
import { AtInput, AtForm } from 'taro-ui-vue'
export default {
    name: 'RealName',
    components: {
        AtForm,
        AtInput
    },
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    },
    methods: {
        handleChooseType(e) {
          console.log('handleChooseType')
        },
        handleChange(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss">
.realName-container {
    background-color: #f0f4f7;
    height: 100vh;
    padding: 30px;
    .realName-content {
        background-color: #fff;
        border-radius: 20px;
        padding: 30px 20px;
        .realName-prompt {
            margin-top: 20px;
            font-size: 20px;
            color: #ff9452;
        }
    }
    .realName-form-container {
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
        margin-top: 30px;
        color: #fff;
        background-color: #5790ee;
        width: 100%;
        height: 90px;
        line-height: 90px;
        border-radius: 20px;
        text-align: center;
    }
}
</style>