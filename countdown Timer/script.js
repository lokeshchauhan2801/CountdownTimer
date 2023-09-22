const endDate = "22 September 2023 05:00 AM"
document.getElementById('end-date').innerText = endDate
const inputs = document.querySelectorAll('input')

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now)/1000 ; // this will convert milli-second into second
    if(diff < 0) return
    //convert into mint
    const mint = diff/60 ;
    //convert into hour
    const hour = mint/60 ; 
    //convert into days
    const day = hour/24 ;
    inputs[0].value = Math.floor(day)
    inputs[1].value = Math.floor(hour % 24)
    inputs[2].value = Math.floor(mint % 60)
    inputs[3].value = Math.floor(diff % 60)  

}
clock()
setInterval(
    ()=>{
        clock()
    },1000
)