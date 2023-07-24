let second=0;
let msec=0;
let minute=0;
let btn=document.getElementById("start");
let btnp=document.getElementById("pause");
let btnr=document.getElementById("reset");



btn.addEventListener("click",()=>
{
    loop=setInterval(inc,10)

}
)

btnp.addEventListener("click",()=>
{
    clearInterval(loop);
} );

btnr.addEventListener("click",reset);
function reset()
{
    msec=0;
    second=0;
    minute=0;
    display();

}


function inc()
{
    msec++;
    if(msec==100)
    {
    msec=0;
    second++;
    }
    if(second==60)
    {
        minute++;
        second=0;
    }
    display();
    
}

function zero(num)
{
    return num<10?"0"+num:num;
}

function display()
{
    document.getElementById("mili").innerHTML=zero(msec);
    document.getElementById("sec").innerHTML=zero(second);
    document.getElementById("min").innerHTML=zero(minute);
}



