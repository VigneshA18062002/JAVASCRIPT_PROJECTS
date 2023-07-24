
let AMPM=document.getElementById("ampm");

function displaytime()
{
let D=new Date();
let hour=D.getHours();
let minute=D.getMinutes();
let second=D.getSeconds();
if(hour>12)
{
    document.getElementById("ampm").innerHTML="PM";
}

if(hour>12)
{
    hour=hour-12;
}

function zero(num)
{
    return num<10?"0"+num:num;
}

document.getElementById("hour").innerHTML=zero(hour);
document.getElementById("minute").innerHTML=zero(minute);
document.getElementById("second").innerHTML=zero(second);




}
    
setInterval(displaytime,500)


let D=new Date();
console.log(D.getFullYear);
