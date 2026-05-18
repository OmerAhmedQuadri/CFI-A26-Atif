const CODE_DISPLAY = document.getElementById('code-txt')
const redBtn = document.getElementById('red-btn')
const greenBtn = document.getElementById('green-btn')
const blueBtn = document.getElementById('blue-btn')
const statusBtn = document.getElementById('status-btn')

redBtn.addEventListener('click',updateColor)
blueBtn.addEventListener('click',updateColor)
greenBtn.addEventListener('click',updateColor)
statusBtn.addEventListener('click',disableBtns)

function updateColor(){
    CODE_DISPLAY.style.color = 'red'
    CODE_DISPLAY.style.color = 'green'
    CODE_DISPLAY.style.color = 'blue'
    console.log('update color was executed');
}

function disableBtns(){
    console.log('disableBtns was called');
    redBtn.removeEventListener('click',updateColor)
    CODE_DISPLAY.style.color = 'yellow'
    statusBtn.innerText = 'Enable'
    statusBtn.removeEventListener('click',disableBtns)
    statusBtn.addEventListener('click',enableBtns)
    
}
function enableBtns(){
    console.log('enableBtns was called');
    redBtn.addEventListener('click',updateColor)
    CODE_DISPLAY.style.color = 'yellow'
    statusBtn.innerText = 'Disable'  
    statusBtn.addEventListener('click',disableBtns)
    statusBtn.removeEventListener('click',enableBtns)  
}