const containers = document.getElementsByClassName('container')
let indexContainers = 0
const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')
const moreInfo = document.getElementsByClassName('more-info')
leftArrow.style.opacity = 0.3

function goToNextPage () {
    containers[indexContainers].classList.remove('ativa')
    if (indexContainers < containers.length - 1) indexContainers++
    if (indexContainers === containers.length - 1) rightArrow.style.opacity = 0.3
    leftArrow.style.opacity = 1
    containers[indexContainers].classList.add('ativa')

    if (indexContainers === 0) {
        moreInfo[indexContainers].classList.add('red');
    } else if (indexContainers === 1) {
        moreInfo[indexContainers].classList.add('yellow');
    } else if (indexContainers === 3) {
        moreInfo[indexContainers].classList.add('blue');
    }
}
function goToPreviousPage () {
    containers[indexContainers].classList.remove('ativa')
    if (indexContainers > 0) indexContainers--
    if (indexContainers === 0) leftArrow.style.opacity = 0.3
    rightArrow.style.opacity = 1
    containers[indexContainers].classList.add('ativa')

    if (indexContainers === 0) {
        moreInfo[indexContainers].classList.add('red');
    } else if (indexContainers === 1) {
        moreInfo[indexContainers].classList.add('yellow');
    } else if (indexContainers === 3) {
        moreInfo[indexContainers].classList.add('blue');
    }
}




