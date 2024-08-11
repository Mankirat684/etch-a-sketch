//making grid

let n = 16
let container = document.querySelector(".container")
container.innerHTML = `<div class = "row">${`<div class = "column" ></div>`.repeat(n)}</div>`.repeat(n)


let box = document.querySelectorAll(".column")

for (let i=0 ; i<n*n ; i++){

    box[i].addEventListener("mouseover" , () => {
        let rdm = Math.floor(Math.random()*4)
        let choice = ["red","blue","green","yellow"]
        let colorChoice = choice[rdm].toString()
        box[i].style.backgroundColor = colorChoice;    
    })
}


//making reset button

let btn = document.querySelector(".btn")

btn.addEventListener("click",() => {
  let b = prompt("Type number of rows and column")
  let n = b*1
  let container = document.querySelector(".container")
  container.innerHTML = `<div class = "row">${`<div class = "column" ></div>`.repeat(n)}</div>`.repeat(n)
  let box = document.querySelectorAll(".column")

  if(n<51 ) {for (let i=0 ; i<n*n ; i++){

    box[i].addEventListener("mouseover" , () => {
       // for (let i=0 ; i<n*n ; i++){
        let rdm = Math.floor(Math.random()*4)
        let choice = ["red","blue","green","yellow"]
        let colorChoice = choice[rdm].toString()
        box[i].style.backgroundColor = colorChoice;    
    })
}}else{
    alert("pick a number b/w 1 & 50") 
    let n = 16
let container = document.querySelector(".container")
container.innerHTML = `<div class = "row">${`<div class = "column" ></div>`.repeat(n)}</div>`.repeat(n)


let box = document.querySelectorAll(".column")

for (let i=0 ; i<n*n ; i++){

    box[i].addEventListener("mouseover" , () => {
        let rdm = Math.floor(Math.random()*4)
        let choice = ["red","blue","green","yellow"]
        let colorChoice = choice[rdm].toString()
        box[i].style.backgroundColor = colorChoice;    
    })
}
}
})


//changing color on hovering

/*let box = document.querySelectorAll(".column")

for (let i=0 ; i<n*n ; i++){

    box[i].addEventListener("mouseover" , () => {
       // for (let i=0 ; i<n*n ; i++){
        let rdm = Math.floor(Math.random()*4)
        let choice = ["red","blue","green","yellow"]
        let colorChoice = choice[rdm].toString()
        box[i].style.backgroundColor = colorChoice;    
    })
}
/*
if(n<50 ){
    for (let i=0 ; i<n*n ; i++){

        box[i].addEventListener("mouseover" , () => {
           // for (let i=0 ; i<n*n ; i++){
            let rdm = Math.floor(Math.random()*4)
            let choice = ["red","blue","green","yellow"]
            let colorChoice = choice[rdm].toString()
            //console.log(colorChoice)
            box[i].style.backgroundColor = colorChoice;    
            //console.log("color changed")//}
    
        })
    }
    
}else{
    alert("pick a number")
}*/

/*let i = 0
do{
    box[i].addEventListener("mouseover" , () => {
        // for (let i=0 ; i<n*n ; i++){
         let rdm = Math.floor(Math.random()*4)
         let choice = ["red","blue","green","yellow"]
         let colorChoice = choice[rdm].toString()
         //console.log(colorChoice)
         box[i].style.backgroundColor = colorChoice;    
         //console.log("color changed")//}
         i++
 
     })
}while(i<n*n)*/






    