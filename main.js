
var canvas =new fabric.Canvas('myCanvas')

man_y=30;
man_x=40;
ghost_y=300;
ghost_x=510;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL('ghost.png',function(Img){
        hole_obj=Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:ghost_y,
            left:ghost_x
        });
        canvas.add(hole_obj);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL('man.png',function(Img){
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:man_y,
            left:man_x
        });
        canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((man_x==ghost_x)&&(man_y==ghost_y)){
    canvas.remove(hole_obj);
    document.getElementById("h21").innerHTML="You Won !!!";
	document.getElementById("myCanvas").style.borderColor="red";
	
	}
	else{
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
		if(man_y >=30){

			man_y = man_y - block_image_height;
			console.log("block image height =  "+ block_image_height);
			console.log("When up arrow key is pressed, X = "+ man_x+",Y =  "+ man_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(man_y <=635){

			man_y = man_y + block_image_height;
			console.log("block image height =  "+ block_image_height);
			console.log("When down arrow key is pressed, X = "+ man_x+",Y =  "+ man_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(man_x >=40)
		{
			man_x = man_x - block_image_width;
			console.log("block image width =  "+ block_image_width);
			console.log("When left arrow key is pressed, X = "+ man_x+",Y =  "+ man_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(man_x <=950)
		{
			man_x = man_x + block_image_width;
			console.log("block image width =  "+ block_image_width);
			console.log("When left arrow key is pressed, X = "+ man_x+",Y =  "+ man_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

