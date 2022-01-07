 canvas= document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

 color="purple";
 lineWidth=5;
 radius=20;
 
 console.log(color);
 console.log(lineWidth);

 var mouseEvent="empty";

 canvas.addEventListener("mousedown" , my_mousedown);
 canvas.addEventListener("mousemove", my_mousemove);
 canvas.addEventListener("mouseup" , my_mouseup);
 canvas.addEventListener("mouseleave", my_mouseleave);


 function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("Color").value;
    lineWidth=document.getElementById("line_width").value;
    radius=document.getElementById("Radius").value;
 }
 function my_mouseleave(e){
    mouseEvent="mouseleave";
 }
 function my_mouseup(e){
    mouseEvent="mouseup";
 }
 function my_mousemove(e){
     current_pos_mouse_x=e.clientX-canvas.offsetLeft;
     current_pos_mouse_y=e.clientY-canvas.offsetTop;

     if (mouseEvent=="mousedown"){
        console.log("Current position of x and y coordinates = ")        
        console.log("x = " + current_pos_mouse_x + "y = " + current_pos_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.arc(current_pos_mouse_x, current_pos_mouse_y, radius , 0 , 2 * Math.PI);

        ctx.stroke();
     }
 }
 