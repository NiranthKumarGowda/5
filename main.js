var Canvas=document.getElementById("myCanvas")
var color="red"
var widthofline=2
ctx=Canvas.getContext("2d")
var mouse_event=""
var last_position_of_X,last_position_of_Y
var width = screen.width
var height = screen.height
var newwidth = screen.width-70
var newheight = screen.height-300
if (width>992) {
  document.getElementById("myCanvas").width=newwidth  
  document.getElementById("myCanvas").height=newheight 
  document.body.style.overflow="hidden"
}
Canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart (e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("width").value
    last_position_of_X=e.touches[0].clientX-Canvas.offsetLeft
    last_position_of_Y=e.touches[0].clientY-Canvas.offsetTop
}
Canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    current_position_of_X=e.touches[0].clientX-Canvas.offsetLeft
    current_position_of_Y=e.touches[0].clientY-Canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
    ctx.moveTo(last_position_of_X,last_position_of_Y)
    ctx.lineTo(current_position_of_X,current_position_of_Y)
    ctx.stroke()
    last_position_of_X=current_position_of_X
    last_position_of_Y=current_position_of_Y
}
Canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouse_event="mouse_down"
    color=document.getElementById("color").value
    widthofline=document.getElementById("width").value
}   
Canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-Canvas.offsetLeft
    current_position_of_mouse_y=e.clientY-Canvas.offsetTop
    if (mouse_event=="mouse_down") {


    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
    ctx.moveTo(last_position_of_X,last_position_of_Y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    ctx.stroke()
}
    last_position_of_X=current_position_of_mouse_x
    last_position_of_Y=current_position_of_mouse_y
}
Canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouse_event="mouse_up"
   
}   
Canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){    mouse_event="mouse_leave"
   
}
  function cleararea(){
    ctx.clearRect(0,0,800,600)
  }
