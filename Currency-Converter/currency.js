
let btn=document.querySelector('button');
let input=document.getElementById('input');
let select=document.querySelectorAll('select')
fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then((msg)=>display(msg))

function display(msg)
{
    let Currency=Object.entries(msg)
    for(let i=0;i<Currency.length;i++)
    {
    let opt= `<option value='${Currency[i][0]}'>${Currency[i][0]}</option>`
    select[0].innerHTML +=opt;
    select[1].innerHTML +=opt;
    }

}

btn.addEventListener("click",()=>{
    console.log("clicked")

    let c1=select[0].value
    let c2=select[1].value
    let value=input.value

    if(c1==c2)
    {
        alert("Select Different CURRENCY")
    }
    else
    {
        convert(c1,c2,value)
    }
})

function convert(c1,c2,value)
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${value}&from=${c1}&to=${c2}`)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('result').value = Object.values(data.rates)[0]
    });
}

