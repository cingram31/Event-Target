 function myButton(){
 	document.body.style.backgroundColor = "purple";	
 }



 var toggled = false;
 function toggle() {
 	if(!toggled) {
 		toggled = true;
 		document.getElementById("demo").style.display = "none";
 		return;
 	}
 	if(toggled) {
 		toggled = false;
 		document.getElementById("demo").style.display = "block";
 		return;
 	}
 }


 var x = document.getElementById("image");
 x.addEventListener("mouseover", newPicture);
 x.addEventListener("mouseout", oldPicture);


 function newPicture() {
 	document.getElementById("image").src="img/KittenNursery.jpg"
 }

 function oldPicture() {
 	document.getElementById("image").src="img/cutepuppy.jpg"
 }





 