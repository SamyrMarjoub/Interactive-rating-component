const onestar = document.querySelector('.one')
const twostar = document.querySelector('.two')
const threestar = document.querySelector('.three')
const fourstar = document.querySelector('.four')
const fivestar = document.querySelector('.five')
const submit = document.querySelector('.submit-button')
const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')
const container = document.querySelector('.container')
const msg = document.querySelector('.selected')
let cont = 0

onestar.addEventListener('click', function () {
    cont = 1
})
twostar.addEventListener('click', function () {
    cont = 2
})
threestar.addEventListener('click', function () {
    cont = 3
})
fourstar.addEventListener('click', function () {
    cont = 4
})
fivestar.addEventListener('click', function () {
    cont = 5
})
submit.addEventListener('click', function () {
    if (cont !== 0) {
        tela1.style.display = 'none'
        tela2.style.display = 'block'
        container.style.transform = 'rotate(360deg)'
        if(cont==1){
        msg.innerHTML = 'You selected 1 out of 5'
        }else if(cont==2){
        msg.innerHTML = 'You selected 2 out of 5'
        }else if(cont==3){
        msg.innerHTML = 'You selected 3 out of 5'
        }else if(cont==4){
        msg.innerHTML = 'You selected 4 out of 5'
        }else if(cont==5){
        msg.innerHTML = 'You selected 5 out of 5'
        }
    }
   

})