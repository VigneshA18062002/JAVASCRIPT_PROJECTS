
let username=document.getElementById("username")
let mail=document.getElementById("Email")
let pass=document.getElementById("password")
let cpass=document.getElementById("cpassword")
let button=document.getElementById("button")

button.addEventListener("click",validate)

function validate()
{
    console.log("Function validate")

    if(username.value=='')
    {
        error(username,"Please Enter Name")
    }
    else
    {
        success(username)
    }

    if(mail.value=='')
    {
        error(mail,"Please Enter Email Id")
        
    }
    else
    {
        success(mail)
    }


    if(password.value=='')
    {
        error(password,"Please Enter Password")
    }
    else
    {
        success(password)
        result=true
    }

    if(cpass.value=='')
    {
        error(cpass,"Please Enter Password Again")

    }
    else
    {
        success(cpass)
    }
    
    if(cpass.value!=pass.value)
    {
        error(cpass,"Password Not Matching")
    }


}

function error(username,message)
{
    let dis=username.parentElement
    let display=dis.querySelector("div")
    display.innerText=message
}

function success(username)
{
    let dis=username.parentElement;
    let display=dis.querySelector("div")
    display.innerText=''
}


