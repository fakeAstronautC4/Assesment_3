let colorButton = document.getElementById('color')
let placeButton = document.getElementById('place')
let ritualButton = document.getElementById('ritual')
function clicky(event){
    alert('Blue')
}
function clicky2(event){
    alert('Cuba :)')
}
function clicky3(event){
    alert('None!')
}

colorButton.addEventListener('click', clicky)
placeButton.addEventListener('click', clicky2)
ritualButton.addEventListener('click', clicky3)