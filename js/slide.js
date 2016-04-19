// SlideShow:
var img = new Array();
	function LoadHinh()
	{
		img[0] = "images/anh0.png";
		img[1] = "images/anh1.png";
		img[2] = "images/anh2.png";
		img[3] = "images/anh3.png";
		img[4] = "images/anh4.png";
		img[5] = "images/anh5.png";
	}
	LoadHinh();
	var b = 0;
	function BienDoi()
	{
		document.getElementById('anh').src = img[b];
		b++;
		if(b>img.length-1){
		b = 0;
		}
		setTimeout("BienDoi()",1800);
	}
	function next() 
	{
		if (b<img.length-1){
		b++; 
		document.getElementById('anh').src =  img[b]; 
		}
	} 
	function prev() 
	{ 
		if (b > 0) { 
		b--; 
		document.getElementById('anh').src =  img[b];
		}
	}