// Dropdown Menu
	function openMenu() {
		document.getElementById("nav-display").style.display = "block";
		document.getElementById("menuHamburger").style.display = "none";
		document.getElementById("menuX").style.display = "block";
	}
	function closeMenu() {
		document.getElementById("nav-display").style.display = "none";
		document.getElementById("menuHamburger").style.display = "block";
		document.getElementById("menuX").style.display = "none";
	}
// end

//Footer Date
	function getYear() {
		const year = new Date().getFullYear();
		return year;
	}
document.getElementById("time").innerHTML = getYear();
// end

//Projects show and hide stack
	function showStack1() {
		document.getElementById('stack1').style.display = 'block';
		document.getElementById('hide1').style.display = 'block';
		document.getElementById('show1').style.display = 'none';
	}
	function hideStack1() {
		document.getElementById('stack1').style.display = 'none';
		document.getElementById('hide1').style.display = 'none';
		document.getElementById('show1').style.display = 'block';
	}

	function showStack2() {
		document.getElementById('stack2').style.display = 'block';
		document.getElementById('hide2').style.display = 'block';
		document.getElementById('show2').style.display = 'none';
	}
	function hideStack2() {
		document.getElementById('stack2').style.display = 'none';
		document.getElementById('hide2').style.display = 'none';
		document.getElementById('show2').style.display = 'block';
	}

	function showStack3() {
		document.getElementById('stack3').style.display = 'block';
		document.getElementById('hide3').style.display = 'block';
		document.getElementById('show3').style.display = 'none';
	}
	function hideStack3() {
		document.getElementById('stack3').style.display = 'none';
		document.getElementById('hide3').style.display = 'none';
		document.getElementById('show3').style.display = 'block';
	}
	
//Form OnSubmit
	function onSubmit() {
		document.getElementById('contactForm').style.display = 'none';
		document.getElementById('contactMsg').style.display = 'block';
	}
