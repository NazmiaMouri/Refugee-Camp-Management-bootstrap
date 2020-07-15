function Add1(){
	$("#tblMale").append(
		"<tr>"+
		"<td><input type='text' /></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><button  class='btnSave1'>Save</button><button  class='btnDelete'>Delete</button></td>"+
		"</tr>");
	
		$(".btnSave1").bind("click", Save1);		
		$(".btnDelete").bind("click", Delete);
		
};
function Add2(){
	$("#tblFemale ").append(
		"<tr>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><button  class='btnSave1'>Save</button><button  class='btnDelete'>Delete</button></td>"+
		"</tr>");
	
		$(".btnSave1").bind("click", Save1);		
		$(".btnDelete").bind("click", Delete);
		
};
function Add3(){	
		$("#tblKid ").append(
		"<tr>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		"<td><input type='text'/></td>"+
		
		"<td><button  class='btnSave2'>Save</button><button  class='btnDelete'>Delete</button></td>"+
		"</tr>");
	
		$(".btnSave2").bind("click", Save2);		
		$(".btnDelete").bind("click", Delete);


};
function Save1(){
	var par = $(this).parent().parent(); //tr
	var tdID = par.children("td:nth-child(1)");
	var tdName = par.children("td:nth-child(2)");
	var tdAge = par.children("td:nth-child(3)");
	
	var tdButtons = par.children("td:nth-child(4)");

	tdID.html(tdID.children("input[type=text]").val());
	tdName.html(tdName.children("input[type=text]").val());
	tdAge.html(tdAge.children("input[type=text]").val());
	tdButtons.html("<button  class='btnDelete'>Delete</button><button  class='btnEdit1'>Edit</button>");

	$(".btnEdit1").bind("click", Edit1);
	$(".btnDelete").bind("click", Delete);
}; 
function Save2(){
	var par = $(this).parent().parent(); //tr
	var tdID = par.children("td:nth-child(1)");
	var tdName = par.children("td:nth-child(2)");
	var tdAge = par.children("td:nth-child(3)");
	var tdGender = par.children("td:nth-child(4)");
	var tdFname = par.children("td:nth-child(5)");
	var tdMname = par.children("td:nth-child(6)");
	var tdButtons = par.children("td:nth-child(7)");

	tdID.html(tdID.children("input[type=text]").val());
	tdName.html(tdName.children("input[type=text]").val());
	tdAge.html(tdAge.children("input[type=text]").val());
	tdGender.html(tdGender.children("input[type=text]").val());
	tdFname.html(tdFname.children("input[type=text]").val());
	tdMname.html(tdMname.children("input[type=text]").val());
	tdButtons.html("<button  class='btnDelete'>Delete</button><button  class='btnEdit2'>Edit</button>");

	$(".btnEdit2").bind("click", Edit2);
	$(".btnDelete").bind("click", Delete);
}; 

function Edit1(){
	var par = $(this).parent().parent(); //tr
	var tdID = par.children("td:nth-child(1)");
	var tdName = par.children("td:nth-child(2)");
	var tdAge = par.children("td:nth-child(3)");
	var tdButtons = par.children("td:nth-child(4)");

	tdID.html("<input type='text' id='txtID' value='"+tdID.html()+"'/>");
	tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
	tdAge.html("<input type='text' id='txtAge' value='"+tdAge.html()+"'/>");
	tdButtons.html("<button  class='btnSave1'>Save</button>");

	$(".btnSave1").bind("click", Save1);
	$(".btnEdit1").bind("click", Edit1);
	$(".btnDelete").bind("click", Delete);
};
function Edit2(){
	var par = $(this).parent().parent(); //tr
	var tdID = par.children("td:nth-child(1)");
	var tdName = par.children("td:nth-child(2)");
	var tdAge = par.children("td:nth-child(3)");
	var tdGender = par.children("td:nth-child(4)");
	var tdFname = par.children("td:nth-child(5)");
	var tdMname = par.children("td:nth-child(6)");
	var tdButtons = par.children("td:nth-child(7)");

	tdID.html("<input type='text' id='txtID' value='"+tdID.html()+"'/>");
	tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
	tdAge.html("<input type='text' id='txtAge' value='"+tdAge.html()+"'/>");
	tdGender.html("<input type='text' id='txtGender' value='"+tdGender.html()+"'/>");
	tdFnametml("<input type='text' id='txtFname' value='"+tdFname.html()+"'/>");
	tdMname.html("<input type='text' id='txtMname' value='"+tdMname.html()+"'/>");
	tdButtons.html("<button  class='btnSave2'>Save</button>");

	$(".btnSave2").bind("click", Save2);
	$(".btnEdit2").bind("click", Edit2);
	$(".btnDelete").bind("click", Delete);
};

function Delete(){
	var par = $(this).parent().parent(); //tr
	par.remove();
}; 


$(function(){
	
	$(".btnEdit1").bind("click", Edit1);
	$(".btnEdit2").bind("click", Edit2);
	$(".btnDelete").bind("click", Delete);
	$("#btnAdd1").bind("click", Add1);
	$("#btnAdd2").bind("click", Add2);
	$("#btnAdd3").bind("click", Add3);
});