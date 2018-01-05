function styleHeaderSiblings(){
	if(!document.getElementsByName) return false;
	var heads=document.getElementsByTagName("h1");
	var elem;
	for(var i=0;i<heads.length;i++){
		var elem=getNextElement(heads[i].nextSibling);
		elem.style.fontWeight="bold";
		elem.style.fontSize="1.2em";
	}
}

function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(styleHeaderSiblings);