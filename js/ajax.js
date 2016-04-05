function AJAX(itemId,target) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() { 
		if (xhttp.readyState == 4 && xhttp.status == 200) { 
	    	document.getElementById(itemId).innerHTML = xhttp.responseText;	
	   	}
	};
	xhttp.open("GET", target, true);
	xhttp.send();	
}
