function getFormvalue() {
    //Write your code here
	const name=document.getElementById("form1");
	 
	// name.forEach((item) =>allname+item );
	let fname=document.getElementsByTagName("input")[0].value;
	let lname=document.getElementsByTagName("input")[1].value;
	
	
	alert(fname+" "+lname);
	

}
