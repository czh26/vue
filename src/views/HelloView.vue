<template>
  <el-form :rules="rules" ref="ruleForm" :model="ruleForm"
    class="demo-ruleForm" size="medium" id="login-form">

    <ul>
      <li v-for="item in menutab" :key="item.id"
      :class="{'curr': item.current}" @click="switch_menu(item)">{{item.txt}}</li>
    </ul>

    <el-form-item prop="email">
      <label>邮箱</label>
    <el-input type="text" v-model="ruleForm.email"
    autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <label>密码</label>
      <el-input type="password" v-model="ruleForm.password"
        autocomplete="off" maxlength="16" minlength="6">
      </el-input>
    </el-form-item>

    <el-form-item prop="repeat_password" v-if="model === 'register'">
      <label>重复输入密码</label>
      <el-input type="repeat_password" v-model="ruleForm.repeat_password"
        autocomplete="off" maxlength="16" minlength="6">
      </el-input>
    </el-form-item>

    <el-form-item prop="code">
      <label>验证码</label>
      <el-row :gutter="15">
        <el-col :span="18">
          <el-input v-model="ruleForm.code" maxlength="6" minlength="6"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="success">获取验证码</el-button>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
      id="btn-form">提交</el-button>
      <el-button @click="resetForm('ruleForm')" id="btn-form">重置</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import {
  stripscript,
  validEmail,
  validPassword,
  validCode,
} from "@/utils/validate";
export default {
  data() {
    //邮箱
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (validEmail(value) === false) {
        callback(new Error("邮箱格式有误"));
      } else {
        callback(); //true
      }
    };
    //密码
    var validatePass = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value);
      value = stripscript(value);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validPassword(value) === false) {
        callback(new Error("密码为6-16位数字和字母的组合"));
      } else {
        callback();
      }
    };
    var validateRepeat_pass = (rule, value, callback) => {
      this.ruleForm.repeat_password = stripscript(value);
      value = stripscript(value);
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.password) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    //验证码
    var validateCode = (rule, value, callback) => {
      this.ruleForm.code = stripscript(value);
      value = stripscript(value);
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else if (validCode(value) === false) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    //表单数据
    return {
      ruleForm: {
        email: "",
        password: "",
        repeat_password: "",
        code: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        repeat_password: [{ validator: validateRepeat_pass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
      },
      model: "login",
      menutab: [
        { txt: '登录', current: true, model: "login" },
        { txt: '注册', current: false, model: "register" },
      ],
    };
  },
  methods: {
    switch_menu(data) {
      this.menutab.forEach(elem => {
        elem.current = false;
        console.log(this.model);
      });
      data.current = true;
      this.model = data.model;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
ul {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
li {
  width: 20%;
  display: inline-block;
  list-style: none;
  padding: 5px 5px;
  cursor: pointer;
}
.curr {
  background-color: rgb(64, 133, 237);
}
#login-form {
  width: 350px;
  margin: 20px auto;
  color: #ffffff;
}
.block {
  width: 100%;
  display: block;
}
</style>
