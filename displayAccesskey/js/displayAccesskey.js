function displayAccesskey(){
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
	//获取所有的链接,并存放到defs数组中
	var links=document.getElementsByTagName("a");
	if (links.length<1) return false;
	var defs=new Array();
	for (var i=0;i<links.length;i++)
	{
		var current_links=links[i];
		//如果links[i]没有accesskey属性，则进入下一次循环
		if(!current_links.getAttribute("accesskey")) continue;
		//获取accesskey的值
		var key=current_links.getAttribute("accesskey");
		//获取链接的文本内容
		var text=current_links.lastChild.nodeValue;
		//添加到数组
		defs[key]=text;
	}
	//创建快捷键列表
	var alist=document.createElement("ul");
	//遍历数组，并放入到定义列表中
	for (key in defs){
		var text=defs[key];
		str=key+":"+text;
		var utitle=document.createElement("li");
		var utitle_text=document.createTextNode(str);
		utitle.appendChild(utitle_text);
		alist.appendChild(utitle);
	}
	var header=document.createElement("h3");
	var header_text=document.createTextNode("Accesskey");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(alist);
}
addLoadEvent(displayAccesskey);