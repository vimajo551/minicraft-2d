var canvas = new fabric.Canvas("myCanvas");

var blockImgwidth = 30;
var blockImgheight = 30;
var player_x = 10;
var player_y = 10;
var player_obj = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_obj=Img;
        player_obj.scaleToWidth(150)
        player_obj.scaleToHeight(140)
        player_obj.set({
            left:player_x,top:player_y
        });
        canvas.add(player_obj)
    })
}

function newImg(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImg=Img;
        blockImg.scaleToWidth(blockImgwidth)
        blockImg.scaleToHeight(blockImgheight)
        blockImg.set({
            left:player_x,top:player_y
        });
        canvas.add(blockImg)
    })
}

window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keyPressed=e.keyCode
    if(e.shiftKey==true && keyPressed=='80'){
        blockImgwidth=blockImgwidth+10;
        blockImgheight=blockImgheight+10;
        document.getElementById("largat").innerHTML=blockImgwidth;
        document.getElementById("altuat").innerHTML=blockImgheight;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        blockImgwidth=blockImgwidth-10;
        blockImgheight=blockImgheight-10;
        document.getElementById("largat").innerHTML=blockImgwidth;
        document.getElementById("altuat").innerHTML=blockImgheight;
    }
    if(keyPressed=='38'){
        up()
    }
    if(keyPressed=='40'){
        down()
    }
    if(keyPressed=='37'){
        left()
    }
    if(keyPressed=='39'){
        right()
    }
    if(keyPressed=='85'){
        newImg("unique.png")
    }
    if(keyPressed=='87'){
        newImg("wall.jpg")
    }
    if(keyPressed=='89'){
        newImg("yellow_wall.png")
    }
    if(keyPressed=='82'){
        newImg("roof.jpg")
    }
    if(keyPressed=='76'){
        newImg("light_green.png")
    }
    if(keyPressed=='71'){
        newImg("ground.png")
    }
    if(keyPressed=='67'){
        newImg("cloud.jpg")
    }
    if(keyPressed=='68'){
        newImg("dark_green.png")
        console.log("d")
    }
    if(keyPressed=='84'){
        newImg("trunk.jpg")
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + blockImgwidth;
        canvas.remove(player_obj);
        player_update();
    }
}
function left(){
    if(player_x > 0){
        player_x = player_x - blockImgwidth;
        canvas.remove(player_obj);
        player_update();
    }
}
function up(){
    if(player_y >= 0 ){
        player_y = player_y - blockImgheight;
        canvas.remove(player_obj);
        player_update();
    }
}
function down(){
    if(player_y <= 500 ){
        player_y = player_y + blockImgheight;
        canvas.remove(player_obj);
        player_update();
    }
}