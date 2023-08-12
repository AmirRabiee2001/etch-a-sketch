var gridSize = 4
var gridContainer = document.getElementById('grid-container')
var sizeInput = document.getElementById('range-input')
var colorInput = document.getElementById('color-input')
var color = '#333'
var rainbowMode = false

sizeInput.addEventListener('input', getSize)
gridContainer.addEventListener('mouseover', paint)
colorInput.addEventListener('input', getColor)
document.getElementById('clear-btn').addEventListener('click', getSize)
document.getElementById('eraser-btn').addEventListener('click', () => {
    rainbowMode = false
    color = '#FFFF'
})
document.getElementById('rainbow-btn').addEventListener('click', () =>{
    rainbowMode = true
})

function clear(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function getSize(e){
    if(e.target.value){
        gridSize = e.target.value
    }
    document.getElementById('size-display').innerHTML = `${gridSize} X ${gridSize}`
    const gridPercent  = `${100 / gridSize}%`
    clear()
    for(let row = 0; row<gridSize; row++ ){
        for(let col = 0; col<gridSize; col++){
            const gridItem = document.createElement('div')
            gridItem.classList.add('grid-item')
            gridItem.style.width = gridPercent
            gridItem.style.height = gridPercent
            gridContainer.appendChild(gridItem)
        }
}
}

function getColor(e){
    rainbowMode = false
    color = e.target.value
}

function randomColor(){
    const hue = Math.random() * 360
    const saturation  = 60
    const brightness = 70

    color = `hsl(${hue}, ${saturation}%, ${brightness}%)`
}

function paint(e){
    if(e.target.classList.contains('grid-item')){
        if(rainbowMode === true){
            randomColor()
        }
        e.target.style.backgroundColor = color
    }
}




