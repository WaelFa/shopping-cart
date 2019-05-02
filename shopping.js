function plus(id){
    let quantity=document.getElementById("input"+id);
    quantity.value = parseInt(quantity.value)+1
    let price= document.getElementById("price"+id);
    let priceArr= [39,54,62]
    price.innerHTML = (quantity.value *priceArr[id-1]  + " $")
}
function minus(id){
    let quantity=document.getElementById("input"+id);
    let price= document.getElementById("price"+id);
    let priceArr= [39,54,62]
    if (parseInt(quantity.value) >0){
        quantity.value = parseInt(quantity.value)-1;
        price.innerHTML = (quantity.value *priceArr[id-1]  + " $")
    }
}
function remove(i){
    let elem = document.getElementById("element"+i);
    elem.parentNode.removeChild(elem)
}

let loveImg=Array.from(document.querySelectorAll(".fa-heart"))

for( el of loveImg){
    el.addEventListener("click", (el)=>{
        console.log(getComputedStyle(el.target).color)
        if (getComputedStyle(el.target).color==="rgb(0, 0, 0)"){
            el.target.style.color="red";
        }
        else {
            el.target.style.color="black"
        }
    })
}
let buttons = Array.from(document.querySelectorAll("button"))
for (el of buttons){
    el.addEventListener("click", (el)=>{
        let total = document.querySelector(".total p")
        let price1 = parseInt(document.querySelector("#price1").innerHTML);
        let price2 = parseInt(document.querySelector("#price2").innerHTML);
        let price3 = parseInt(document.querySelector("#price3").innerHTML);
        total.innerHTML= "Shopping bag Total:" + (price1+price2+price3)+ "$"
    })
}

