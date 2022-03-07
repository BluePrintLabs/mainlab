
let menu = document.querySelector(".burger")
let list = document.querySelector(".line")
menu.addEventListener("click", ()=>{
    list.classList.toggle("list", ()=>{
        console.log("toggle")
    })
    console.log(list)
})
