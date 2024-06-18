const containers = document.getElementsByClassName('container')
let indexContainers = 0

const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')

rightArrow.addEventListener('click', () => {

    containers[indexContainers].classList.remove('ativa')
    indexContainers++
    containers[indexContainers].classList.add('ativa')

    if(indexContainers === containers.length - 1) {
        rightArrow.style.opacity = 0.3
    }
})
leftArrow.addEventListener('click', () => {
    if (indexContainers === 0) {
        return;
    }
    if (indexContainers >= 0) {
        rightArrow.style.opacity = 1
    }
    containers[indexContainers].classList.add('invisible')
    indexContainers--
    containers[indexContainers].classList.remove('invisible')

})

