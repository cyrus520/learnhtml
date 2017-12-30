function displayCitations(){
	if(!document.getElementById||!document.createElement||!document.createTextNode) return false;
	//获取所有的引用
	var quotes=document.getElementsByTagName("blockquote");
	//遍历
	for(var i=0;i<quotes.length;i++){
		//如果没有cite属性，则进行下一次循环
		if(!quotes[i].getAttribute("cite")) continue;
		//保存cite属性
		var url=quotes[i].getAttribute("cite");
		//取得引用中的所有元素节点
		var quotesChilden=quotes[i].getElementsByTagName("*");
		//如果没有元素节点，则进行下一次循环
		if(quotesChilden.length<1) continue;
		//获取最后一个元素节点
		var elem=quotesChilden[quotesChilden.length-1];
		//创建超链接
		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript=document.createElement("sup");
		superscript.appendChild(link);
		//把上标添加到引用的最后一个元素节点中
		elem.appendChild(superscript);
	}
}
addLoadEvent(displayCitations);