<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <!-- v-model 双向绑定 性能不好 表单的目的是收集数据 -->
            <el-form 
                :model="param" 
                :rules="rules"
                ref="login"
                label-width="0px"
                class="ms-content"
                >
                <el-form-item prop="username">
                    <el-input 
                        autofocus
                        placeholder="请输入用户名"
                        v-model="param.username" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password" 
                        placeholder="请输入密码"
                        @keyup.enter="submitForm(login)"
                        v-model="param.password" />
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm(login)">登录</el-button>
                </div>


            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { reactive,ref,onMounted } from 'vue'
import { usePermissStore } from '../store/permiss';
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus';

const permiss = usePermissStore()
const router = useRouter()

interface LoginInfo{
    username: string;
    password: string;
}
// 和ref 区别 复杂reactive
// proxy
// 标注一个DOM
const login = ref()
console.log(login.value);
onMounted(() => {
    console.log(login.value)
})

const param = reactive<LoginInfo>({
    username: '',
    password: ''
})

const rules = {
    username:[
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        }
    ],
    password:[
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        }
    ]
}

const submitForm = (formEl: FormInstance | undefined) =>{
    if (!formEl) {
        return
    }
    formEl.validate((valid) =>{
        if (valid) {
            ElMessage.success('登录成功')
            localStorage.setItem('ms_username', param.username)
            localStorage.setItem('ms_password', param.password)
            const keys = permiss
                .roleList[param.username === 'admin' ? 'admin' : 'user']
            localStorage.setItem('ms_keys', JSON.stringify(keys))
            permiss.setkeys(keys)
            router.push('/')
        } else {
            ElMessage.error('请填写完整信息')
        }
    })
}

</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}

</style>