fetch('https://api.openweathermap.org/data/2.5/weather?q=villupuram&appid=2e1bd31474a25825cb00350b611037e0&units=metric')
.then((res)=>((res.json())))
.then((deg)=>console.log(deg))


let input=document.getElementById("input");
let button=document.querySelector("button")
let result=document.getElementById("result")


button.addEventListener("click",()=>{

    console.log("clicked")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2e1bd31474a25825cb00350b611037e0&units=metric`)
    .then((res)=>(res.json()))
    .then(deg=>gettemp(deg))

})

function gettemp(deg)
{

    result.innerHTML="Temparature = "+deg.main.temp;
    //let para=document.createElement('p')
    //result.appendChild(para).innerHTML= "Temparature= "+deg.main.temp;

}

result.addEventListener("click",()=>{
    result.innerHTML=''
    input.value=''
})