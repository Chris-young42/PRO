<template>
  <el-row justify="center">
    <el-col :span="8">
      <div class="loginbox">
        <h1>登陆系统</h1>
        <el-form ref="Loginform" :model="user" :rules="rules">
          <el-form-item prop="usename">
            <el-input v-model="user.usename" style="width: 600px ;height:50px" placeholder="请输入账号" clearable />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="user.password" type="password" style="width: 600px ;height:50px" placeholder="请输入密码"
              clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="Loginformer(Loginform)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const user = reactive({
  usename: '',
  password: ''
})
const rules = reactive({
  usename: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})
const Loginform = ref(null)
const Loginformer = async (formEl) => {
  //
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      ElMessage({
        showClose: true,
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
      router.push({ name: 'Dashboard' })
    } else {
      console.log('error submit!', fields)
      ElMessage({
        showClose: true,
        message: 'Oops, this is a error message.',
        type: 'error',
      })
    }
  })
}




</script>

<style>
.loginbox {
  text-align: center;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #ccc;
  padding: 20px;
  margin-top: 200px;
}

.btn {
  width: 100%;
  height: 50px;
}
</style>
