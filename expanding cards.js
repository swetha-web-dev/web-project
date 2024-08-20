const pannel=document.querySelectorAll('.cards')
pannel.forEach(cards => {
  cards.addEventListener('click',() => {
    removeActiveclasses()
    cards.classList.add('active')

}

)

})

function removeActiveclasses(){
  pannel.forEach(cards => {
    cards.classList.remove('active')
  })
}
