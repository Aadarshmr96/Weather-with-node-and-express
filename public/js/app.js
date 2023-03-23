// console.log("client side javascript is running")


const f=document.querySelector('form')
const search=document.querccsdnySelector('input')
f.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    fetch("http://localhost:3000/weather?search="+location).then((response)=>{
    response.json().then((data)=>{
     const result=document.querySelector('p')
     result.innerHTML=data.forecastData
     search.value=''

    })
})
})
