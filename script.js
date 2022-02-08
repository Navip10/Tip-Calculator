/**
 * Record the bill amiount
 * select the tip
 * select custom tip
 * record number of people
 * display tip amount/total amount per person
 * reset button
 * 
 */
let bill = document.getElementById("input")
let people = document.getElementById("peopleInput")
let percent = document.querySelectorAll(".grid-item")
let theme = document.getElementById("themeButton")
let dakrMode = false
let body = document.body.style
let container =  document.querySelector(".container").style
let custom = document.getElementById("custom")
let mode = document.getElementById("mode")
let rightTop = document.getElementsByClassName("rightBox")[0].style

function tipSplit(billAmount, amtPeople, percentage,) {
    // Write code below

    billAmount = parseInt(bill.value) 
    amtPeople = parseInt(people.value)
    console.log(billAmount,amtPeople, percentage)


    if(custom.value) {
        percentage = parseInt(custom.value)/100
        console.log(percentage)

        if(billAmount && amtPeople) {
            let tipPerPerson = (billAmount * percentage) / amtPeople
    
            let totalPerPerson = (billAmount / amtPeople) + tipPerPerson
    
            document.getElementById("tip-per-person").innerText = "$" + tipPerPerson.toFixed(2)
            document.getElementById("total-per-person").innerText = "$" + totalPerPerson.toFixed(2)
        }
    }

    //write a condition that check if all buttons are click
    else if(billAmount && amtPeople && percentage){
        
    
    
     tipAmount = billAmount * percentage
    tipPerPerson = tipAmount/amtPeople
    totalPerPerson = tipPerPerson + (billAmount / amtPeople)
    document.getElementById("tip-per-person").innerText = "$"+tipPerPerson.toFixed(2)
    document.getElementById("total-per-person").innerText = "$"+totalPerPerson.toFixed(2)
     }

    }
   
    bill.addEventListener("change", tipSplit)
    //how do i grab the people input
   

    people.addEventListener("change", tipSplit)
 

    percent.forEach((btn)=> {
        btn.addEventListener("click", function(){

            let btns = parseInt(btn.innerText)/100
            tipSplit(bill,people,btns)
        })
    })
    theme.addEventListener("click",function(){

        //write two function if its  light mode run dark
        //if its dark mode run light

        if (dakrMode == false){
            darkModeProps()
            dakrMode = true
        }else{
            lightModeProps()
            dakrMode = false
        }

            

    })
    let lightModeProps = ()=>{
        //changes props to light
        body.background = "#c4e0e9"
        theme.src = "./images/icon-moon.svg"
        container.backgroundColor = "white"
        mode.innerText = "Light Mode"
        document.getElementsByClassName("peopleContainer")[0].style.backgroundColor = "white"
        document.getElementById("inputBox").style.backgroundColor = "white"
        rightTop.backgroundColor = "#BBB6DF"

    }
    let darkModeProps = ()=> {
        //changes props to dark
        body.background = "rgb(20,29,47)"
        theme.src = "./images/icon-sun.svg"
        container.backgroundColor = "#1E2A47"
        document.getElementsByClassName("peopleContainer")[0].style.backgroundColor = "#536271"
        mode.innerText = "Dark Mode"
        document.getElementById("inputBox").style.backgroundColor = "#536271"
        rightTop.backgroundColor = "#453750"

    }

    // Create a function called tipSplit() that handles splitting the tip!
let reset = () => {
    document.getElementById("tip-per-person").innerText = "$0.00"
    document.getElementById("total-per-person").innerText = "$0.00"
        custom.value= ""
        bill.value=""
        people.value =""
        percent.value= ""
}

    