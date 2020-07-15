function Add(){	
		$("#tblVol ").append(
		"<tr>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		
		
		"<td><button  class='btnSave'>Save</button><button  class='btnDelete'>Delete</button></td>"+
		"</tr>");
	
		$(".btnSave").bind("click", Save);		
		$(".btnDelete").bind("click", Delete);


};

function Save(){
	var par = $(this).parent().parent(); //tr
	var tdID = par.children("td:nth-child(1)");
	var tdName = par.children("td:nth-child(2)");
	var tdAge = par.children("td:nth-child(3)");
	var tdGender = par.children("td:nth-child(4)");
	var tdPhoneno = par.children("td:nth-child(5)");
	
	var tdButtons = par.children("td:nth-child(6)");

	tdID.html(tdID.children("input[type=text]").val());
	tdName.html(tdName.children("input[type=text]").val());
	tdAge.html(tdAge.children("input[type=text]").val());
	tdGender.html(tdGender.children("input[type=text]").val());
	tdPhoneno.html(tdPhoneno.children("input[type=text]").val());
	
	tdButtons.html("<button  class='btnDelete'>Delete</button><button  class='btnEdit'>Edit</button>");

	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
}; 



function Edit(){
	var par = $(this).parent().parent(); //tr
	var tdID = par.children("td:nth-child(1)");
	var tdName = par.children("td:nth-child(2)");
	var tdAge = par.children("td:nth-child(3)");
	var tdGender = par.children("td:nth-child(4)");
	var tdPhoneno = par.children("td:nth-child(5)");
	
	var tdButtons = par.children("td:nth-child(6)");

	tdID.html("<input type='text' id='txtID' value='"+tdID.html()+"'/>");
	tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
	tdAge.html("<input type='text' id='txtAge' value='"+tdAge.html()+"'/>");
	tdGender.html("<input type='text' id='txtGender' value='"+tdGender.html()+"'/>");
	tdPhonenotml("<input type='text' id='txtFname' value='"+tdPhoneno.html()+"'/>");
	
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