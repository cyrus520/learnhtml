function stripeTables(){
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByName("table");
	var odd,rows;
	for(var i=0;i<tables.length;i++){
		odd=false;
		rows=tables[i].getElementsByName("tr");
		for(var j=0;j<rows.length;j++)
		{
			if(odd==true)
			{
				rows[j].style.backgroundColor="red";
				odd=false;
			}
			else
			{
				odd=true;
			}
		}
	}
}
addLoadEvent(stripeTables);