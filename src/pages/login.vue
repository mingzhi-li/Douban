<template>
    <div class="login-view">
        <h1>
            <a href="javascript:history.go(-1);">取消</a>登录豆瓣
        </h1>
        <div class="title">
            <div class="form-user">
                <label for="">
                    <input type="email" name="email" v-model="email">
                </label>
            </div>
            <div class="form-pwd">
                <label for="">
                    <template v-if="passType === 'password'">
                        <input type="password" name="token" v-model="token" placeholder="Token">
                    </template>
                    <template v-if="passType === 'text'">
                        <input type="text" name="token" v-model="token" placeholder="Token">
                    </template>
                </label>
                <span class="show-pwd" :class="{show: isShow}" @click="showPwd()"></span>
            </div>
            <div class="">
                <button class="submit" type="submit" @click="loginbtn">登陆</button>
            </div>
        </div>
        <div class="footer">
            <div class="more-login">使用其他方式登录 &amp; 找回密码</div>
            <div class="btns">
                <router-link :to="{name: 'reg'}">注册豆瓣帐号</router-link>
                <a href="#">下载豆瓣App</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login-view',
    data() {
        return {           
            isShow:0,
            email: '',
            token: '',
            passType:'password',
            text:''
        }
    },
    methods: {
        showPwd:function(){
            this.isShow = this.isShow ? 0 : 1
            this.isShow ? this.passType = 'text' : this.passType = 'password'
        },
        loginbtn:function(){
            console.log("fjdksfhkds")
            if(this.email==""||this.token==""){
                this.text="请填写完整的信息"
            }else{
                let param =new URLSearchParams();
                param.append("email",this.email);
                param.append("token",this.token);
                this.axios.post("http://localhost:3000/login",param).then((data)=>{
                    console.log(data);
                    console.log(data.data.linkid)
                    if(data.data.linkid==4){
                        this.text = "邮箱或密码错误";
                    }else if(data.data.linkid==3){
                        localStorage.setItem("token",data.data.token)
                        console.log(data.data.token)
                        var i = 4;
                        var mytimer = setInterval(()=>{
                            i--;
                            if(i == 0){
                                clearInterval(mytimer);
                                this.$router.push("/home");
                            }
                            this.text = "登陆成功"+i+"秒后跳转到首面";
                        },1000)
                    }
                },(err)=>{
                    console.log(err);
                })
            }
        }
    },
}
</script>
<style  scoped>
    .login-view h1{
        height: 4.5rem;
        margin: 0 0 1rem 0;
        padding: 0 1.8rem;
        line-height: 4.5rem;
        background: #fff;
        border-bottom: 0.1rem solid #eee;
        text-align: center;
        font-size: 1.8rem;
        font-weight: bold;
    }
    h1 a{
        position: absolute;
        left: 1.8rem;
        top: 0;
        color: #42bd56;
        font-size: 1.5rem;
        font-weight: normal;
    }
    .title{
        padding: 2rem 1.5rem;
    }
    input[type="email"], input[type="text"], input[type="password"] {
      display: inline-block;
      width: 100%;
      height: 4.4rem;
      padding: 0 0.8rem;
      box-sizing: border-box;
      font-size: 1.5rem;
      background: #fff;
      border: 0.1rem solid #ccc;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      outline: 0;
    }
    .form-pwd{
        position: relative;
    }
    .form-pwd input{
        padding-right: 4rem;
        border-top: 0;
    }
    .show-pwd {
        position: absolute;
        right: 0.2rem;
        top: 0;
        display: block;
        height: 100%;
        width: 3.2rem;
        background-image: url(../../static/img/show-pwd.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 2.2rem;
        z-index: 3;
    }
    .show-pwd.show {
        background-image: url(../../static/img/shows-pwd.png);
    }
    .submit {
      cursor: pointer;
      width: 100%;
      padding: 1.2rem 2.6rem;
      margin-top: 1rem;
      font-size: 1.7rem;
      text-align: center;
      color: #fff;
      background: #17AA52;
      border: 0.1rem solid #17AA52;
      border-radius: 0.3rem;
    }
    .more-login {
      font-size: 1.5rem;
      color: #aaa;
      text-align: center;
    }
    .btns{
        margin-top: 4rem;
        text-align: center;
        font-size: 1.5rem;
    }
    .btns a{
        color: #42bd56;
        margin-right: 1.5rem;
    }
</style>