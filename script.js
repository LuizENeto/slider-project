const containers = document.getElementsByClassName('container')
let indexContainers = 0
const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')
const moreInfo = document.getElementsByClassName('more-info')
function loadInitialStates() {
    leftArrow.style.opacity = 0.3
}

function goToNextPage() {
    containers[indexContainers].classList.remove('ativa')
    if (indexContainers < containers.length - 1) indexContainers++
    if (indexContainers === containers.length - 1) rightArrow.style.opacity = 0.3
    leftArrow.style.opacity = 1
    containers[indexContainers].classList.add('ativa')
    const moreInfoColor = changeColorMoreInfo()
    moreInfo[indexContainers].classList.add(moreInfoColor)
}
function goToPreviousPage() {
    containers[indexContainers].classList.remove('ativa')
    if (indexContainers > 0) indexContainers--
    if (indexContainers === 0) leftArrow.style.opacity = 0.3
    rightArrow.style.opacity = 1
    containers[indexContainers].classList.add('ativa')
    const moreInfoColor = changeColorMoreInfo()
    moreInfo[indexContainers].classList.add(moreInfoColor)
}
function changeColorMoreInfo() {
    const Colors = {
        0: 'red',
        1: 'yellow',
        2: 'orange',
        3: 'blue'
    }
    return Colors[indexContainers]
}



