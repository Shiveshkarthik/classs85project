canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image

background_img = "parkingLot.jpg";
greencar_img = "car2.png";

greencar_x=5;
greencar_y=225;

greencar_width=70;
greencar_height=100;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground; 
     background_imgTag.src = background_img; 
	 greencar_imgTag = new Image(); 
     greencar_imgTag.onload = uploadgreencar; 
    greencar_imgTag.src = greencar_img;  }


function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(rover_y>=0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
   }
}

function down()
{
	if(greencar_y<=500){
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadgreencar();
   }
}

function left()
{
	if(greencar_x>=0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
   }
}

function right()
{
	if(greencar_x<=700){
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadgreencar();
   }
}
