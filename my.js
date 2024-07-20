const username=document.querySelector('[name=username]')
const phone=document.querySelector('[name=phone]')
const incode=document.querySelector('[name=code]')
const password=document.querySelector('[name=password]')
const repassword=document.querySelector('[name=repassword]')
username.addEventListener('change',verifyName)
function verifyName(){
    const span=username.nextElementSibling
    const reg=/^[a-zA-Z0-9]{6,12}$/
    if(!reg.test(username.value)){
        span.innerHTML='输入不合法,请输入6~12位'
        return false
    }
    span.innerHTML=''
}
phone.addEventListener('change',verifyName1)
function verifyName1(){
    const span1=phone.nextElementSibling
    const reg=/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if(!reg.test(phone.value)){
        span1.innerHTML='输入不合法,请重新输入'
        return false
    }
    span1.innerHTML=''
}
incode.addEventListener('change',verifyName2)
function verifyName2(){
    const span4=incode.nextElementSibling
    const reg=/^\d{6}$/
    if(!reg.test(incode.value)){
        span4.innerHTML='验证码错误,请重新输入'
        return false
    }
    span4.innerHTML=''
}
password.addEventListener('change',verifyName3)
function verifyName3(){
    const span2=password.nextElementSibling
    const reg=/^[a-zA-Z0-9]{6,12}$/
    if(!reg.test(password.value)){
        span2.innerHTML='输入不合法,请输入6~12位'
        return false
    }
    span2.innerHTML=''
}
repassword.addEventListener('change',verifyName4)
function verifyName4(){
    const span3=repassword.nextElementSibling
    if(repassword.value!==password.value){
        span3.innerHTML='两次密码输入不一致,请重新输入'
        return false
    }
    span3.innerHTML=''
}

const code=document.querySelector('.code')
let flag=true
code.addEventListener('click',function()
{
if(flag)
{
  flag=false
  let i=60
  let timeId=setInterval(function(){
  code.innerHTML=`${i}秒后重新获取`
  i--
  if(i===0)
      {   
          clearInterval(timeId)
          code.innerHTML=`重新获取`
          flag=true
      }
  },1000)
}
})


