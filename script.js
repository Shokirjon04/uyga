let food = {
    plainBurger: {
        name: "GAMBURBER",
        price: 18000,
        amount: 0,
        kcall: 450,
        get calcSum() {
            return this.price * this.amount
        },
        get sumKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURBER FRESH",
        price: 21500,
        amount: 0,
        kcall: 600,
        get calcSum() {
            return this.price * this.amount
        },
        get sumKcall() {
            return this.kcall * this.amount
        }
    },

    freshCombo: {
        name: "GAMBURBER COMBO",
        price: 35400,
        amount: 0,
        kcall: 700,
        get calcSum() {
            return this.price * this.amount
        },
        get sumKcall() {
            return this.kcall * this.amount
        }
    }
}
// rekursiya
// var i = 1
// var p = 1
// function faktorial(son) {
//     if (i < son) {
//         p *= i
//         i++
//         faktorial(son)
//         return p
//     } else {
//         return true
//     }
// }

// console.log(faktorial(10))

const elCounter = document.querySelector('.header__timer-extra')

function sanoq() {
    elCounter.innerHTML++
    if (elCounter.innerHTML < 100) {
        setTimeout(() => {
            sanoq()
        }, elCounter.innerHTML < 50 ? 30 : 180)
    }
}
sanoq()

const elCon = document.querySelector('.header__timer-extra')
const elPro = document.querySelectorAll('.main__product-info')
const elViw = document.querySelector('.view')
const elViClos = document.querySelector('.view__close')
const elCartOwer = document.querySelector('.receipt')
const elCartWidow = document.querySelector('.receipt__window')
const elCartWidowOut = document.querySelector('.receipt__window-out')
const elCartWidowPley = document.querySelector('.receipt__window-btn')
const elShowCart = document.querySelector('.addCart')

const cartProduct = {}


elPro.forEach(element => {
    element.addEventListener('click',function(){
        let thisI = element.querySelector('img')
        let viewI = elViw.querySelector('img')
        elViw.classList.add('active')
        viewI.src = thisI.src
    })
})
elViw.addEventListener('click',function(ev){
    if(ev.target == this){
        this.classList.remove('active')
    }
})
elViClos.addEventListener('click',function(){
        this.parentElement.classList.remove('active')
})
const elInfo = document.querySelectorAll('.main__product-info')
const elProBtn = document.querySelectorAll('.main__product-btn')
  
elProBtn.forEach(btn => {
    btn.addEventListener('click',function(){
        HIsob(this)
    })
})
function HIsob(thisBtn){
    let parent = thisBtn.closest('.main__product')
    let parentid = parent.getAttribute('id')
    let amountBox = parent.querySelector('.main__product-num')
    let productPri = parent.querySelector('.main__product-price span')
    let productCall = parent.querySelector('.main__product-kcall span')

    let operator = thisBtn.getAttribute('data-symbol')
    if(operator == '+'){
        ++food[parentid].amount
    }else if(operator == '-' && food[parentid].amount > 0){
        --food[parentid].amount
    }
    amountBox.innerHTML = food[parentid].amount
    productPri.innerHTML = food[parentid].calcSum
    productCall.innerHTML = food[parentid].sumKcall

    cartProduct[parentid] = {
        name: food[parentid].name,
        amount: food[parentid].amount,
        price: food[parentid].closSum
    }


}

elShowCart.addEventListener('.click',function(){
    elCartOwer.classList.add('active')
    elCartWidow.classList.add('active')
    let LocalProducts = JSON.parse(localStorage.getItem('products'))
    for(const products in LocalProducts){
        elCartWidow.innerHTML += `
        <h3>${LocalProducts[product].name}  ${LocalProducts[product].amount} ${LocalProducts[product].price}</h3>` 

    }
})
elCartWidowPley.addEventListener('.click',function(){
    window.location.reload()
})



