var width = screen.width
var mouseEvent = "ampity"
var lastPositionX, lastPositionY
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "black"
newWidth = screen.width - 70
newHeight = screen.height - 300
if (width < 992) {
    document.getElementById("myCanvas").width = newWidth
    document.getElementById("myCanvas").height = newHeight
    document.body.style.overflow = "hidden"
}
canvas.addEventListener("touchstart", Mytouchstart)
function Mytouchstart(e) {
    color = document.getElementById("color").value
    largura = document.getElementById("largura").value
    lastpositionX = e.touches[0].clientX - canvas.offsetLeft
    lastpositionY = e.touches[0].clientY- canvas.offsetTop 
}
canvas.addEventListener("touchmove", Mytouchmove)
function Mytouchmove(e) {
    positionX = e.touches[0].clientX - canvas.offsetLeft
    positionY = e.touches[0].clientY - canvas.offsetTop 
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = largura
        ctx.moveTo(lastPositionX, lastPositionY)
        ctx.lineTo(positionX, positionY)
        ctx.stroke()
    
    lastPositionX = positionX
    lastPositionY = positionY
}

function clearÁrea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}