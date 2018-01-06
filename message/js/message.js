function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==final_x&&ypos==final_y){
		return true;
	}
	if(xpos<final_x){
		xpos++;
	}
	if(xpos>final_x){
		xpos--;
	}
	if(ypos<final_y){
		ypos++;
	}
	if(ypos>final_y){
		ypos--;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	movement=setTimeout(repeat,interval);
}

function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="500px";
	elem.style.top="100px";
	moveElement("message",40,200,10);
	var elem2=document.getElementById("message2");
	elem2.style.position="absolute";
	elem2.style.left="400px";
	elem2.style.top="100px";
	moveElement("message2",40,250,10);
}
addLoadEvent(positionMessage);