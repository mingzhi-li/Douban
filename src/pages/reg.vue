<template>
    <div class="reg-view">
        <h1 class="title">欢迎加入豆瓣</h1>
        <div class="title">
            <div class="form-alias">
                <strong>{{text}}</strong>
                <label>
                    <input type="text" name="email" v-model="email" placeholder="邮箱">
                </label>
            </div>
            <div class="form-pwd">
                <label for="">
                    <template v-if="passType === 'password'">
                        <input type="password" name="pass" v-model="pass" placeholder="密码">
                    </template>
                    <template v-if="passType === 'text'">
                        <input type="text" name="pass" v-model="pass" placeholder="密码">
                    </template>
                </label>
                <span class="show-pwd" :class="{show: isShow}" @click="showPwd()"></span>
            </div>
            <div class="form-name">
                <label for="">
                    <input type="text" name="name" v-model="name" placeholder="用户名">
                </label>
            </div>
            <div class="form-submit">
                <button class="submit" @click="submit1()">立即注册</button>
            </div>
        </div>
        <div class="footer">
            <div class="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
            <div class="btns">
                <a href="#">下载豆瓣App</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'reg-view',
    data(){
        return{
            isShow:0,
            email: '',
            pass: '',
            name: '',
            passType:'password',
            text:''
        }
    },
    methods: {
        showPwd:function(){
            this.isShow = this.isShow ? 0 : 1
            this.isShow ? this.passType = 'text' : this.passType = 'password'
        },
        submit1:function(){
            console.log("sdfsdjfsdfds")
            if(this.email==""||this.pass==""||this.name==""){
                this.text="该邮箱已注册，请登录或换个邮箱注册"
            }else{
                let param =new URLSearchParams();
                param.append("email",this.email);
                param.append("pass",this.pass);
                param.append("name",this.name);
                this.axios.post("http://localhost:3000/reg",param).then((data)=>{
                    console.log(data);
                    console.log(data.data.linkid)
                    if(data.data.linkid==1){
                        this.text = "该邮箱已注册，请登录或换个邮箱注册";
                    }else if(data.data.linkid==2){
                        var i = 4;
                        var mytimer = setInterval(()=>{
                            i--;
                            if(i == 0){
                                clearInterval(mytimer);
                                this.$router.push("/login");
                            }
                            this.text = "注册成功"+i+"秒后跳转到登录页面";
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
.reg-view h1{
    margin: 10% 0 9%;
    font-size: 4rem;
    font-weight: 300;
    color: #42bd56;
    text-align: center;
}
.reg-view .title{
    padding: 2rem 1.5rem;
}
input::placeholder {
    color: #ccc;
}
input[type="text"], input[type="password"] {
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
.form-pwd input, .form-name input {
    padding-right: 4rem;
    border-top: 0;
}
.form-pwd{
    position: relative;
}
strong {
    font-size: 1.5rem;
    color: #222;
    display: none;
    margin-bottom: 0.5rem;
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
    background: #42bd56;
    border: 0.1rem solid #17AA52;
    border-radius: 0.3rem;
}
.agreement {
    font-size: 1.4rem;
    color: #aaa;
    text-align: center;
}
.btns {
      margin-top: 4rem;
      text-align: center;
      font-size: 1.5rem;
}
.btns a{
    color: #42bd56;
    margin-right: 1.5rem;
}
</style>