function displayAbbreviations(){
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
	//获取所有的缩略词，并通过遍历把他放入数组defs中
	var abbreviations=document.getElementsByTagName("abbr");
	if (abbreviations.length<1) return false;
	var defs=new Array();
	for(var i=0;i<abbreviations.length;i++){
		var current_abbr=abbreviations[i];
		var definition= current_abbr.getAttribute("title");
		var key=current_abbr.lastChild.nodeValue;
		defs[key]=definition;
	}
	//创建dl定义列表
	var dlist= document.createElement("dl");
	//遍历数组，并放入到定义列表中
	for (key in defs){
		var definition=defs[key];
		//创建dt定义标题
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建dd定义描述
		var ddes=document.createElement("dd");
		var ddes_text=document.createTextNode(definition);
		ddes.appendChild(ddes_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddes);
	}
	//创建标题,并把定义列表dlist加到body中去
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);