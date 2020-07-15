function Add(){	
		$("#tblFnd ").append(
		"<tr>"+
		"<td><input type='text'/></td>"+
		" "+"<td><input type='text'/></td>"+
		" "+"<td><input type='text'/></td>"+
		
		
		
		" "+"<td><button  class='btnSave'>Save</button><button  class='btnDelete'>Delete</button></td>"+
		"</tr>");
	
		$(".btnSave").bind("click", Save);		
		$(".btnDelete").bind("click", Delete);


};

function Save(){
	var par = $(this).parent().parent(); //tr
	var tdDate = par.children("td:nth-child(1)");
	var tdCollected = par.children("td:nth-child(2)");
	var tdSpend = par.children("td:nth-child(3)");
	
	
	var tdButtons = par.children("td:nth-child(4)");

	tdDate.html(tdDate.children("input[type=text]").val());
	tdCollected.html(tdCollected.children("input[type=text]").val());
   tdSpend.html(tdSpend.children("input[type=text]").val());
	
	
	tdButtons.html("<button  class='btnDelete'>Delete</button><button  class='btnEdit'>Edit</button>");

	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
}; 



function Edit(){
	var par = $(this).parent().parent(); //tr
	var tdDate = par.children("td:nth-child(1)");
	var tdCollected = par.children("td:nth-child(2)");
	var tdSpend = par.children("td:nth-child(3)");
	
	var tdButtons = par.children("td:nth-child(4)");

	tdDate.html("<input type='text' id='txtDate' value='"+tdDate.html()+"'/>");
	tdCollected.html("<input type='text' id='txtCollected' value='"+tdCollected.html()+"'/>");
	tdSpend.html("<input type='text' id='txtSpend' value='"+tdSpend.html()+"'/>");
	
	
	tdButtons.html("<button  class='btnSave'>Save</button>");

	$(".btnSave").bind("click", Save);
	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
};

function Delete(){
	var par = $(this).parent().parent(); //tr
	par.remove();
}; 


$(function(){
	
	
	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
	$("#btnAdd").bind("click", Add);
	
});