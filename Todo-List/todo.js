let button=document.querySelector("button")
let input=document.getElementById("input")
let result=document.getElementById("result")

let todos=[];

window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('A')) || []
    todos.forEach(v=>addtodo(v))
}



button.addEventListener("click",()=>
{
    localStorage.setItem('A',JSON.stringify(todos))
    console.log("Clicked");
    todos.push(input.value)

    addtodo(input.value)
    input.value='';

})

function addtodo(value)
{
    let para=document.createElement('p')
    para.innerHTML=value;
   result.appendChild(para)

   para.addEventListener("click",()=>{
    
    console.log("para clicked")
    para.style.textDecoration='line-through'
    removeval(value)
})


    para.addEventListener("dblclick",()=>{ 

        result.removeChild(para);
        removeval(value)
      })


}





function removeval(value)
{
    let index=todos.indexOf(value)
    if(index>-1)
    {
        console.log("removed",value)
        todos.splice(index,1);
        console.log("Splice")
        
    }
    localStorage.setItem('A',JSON.stringify(todos))


}

