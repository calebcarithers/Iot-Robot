function forward() {
	$.ajax({
		url:"controlPHP/Motor/forward.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function backward() {
	$.ajax({
		url:"controlPHP/Motor/backward.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function turnLeft() {
	$.ajax({
		url:"controlPHP/Motor/left.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function turnRight() {
	$.ajax({
		url:"controlPHP/Motor/right.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function halt() {
	$.ajax({
		url:"controlPHP/Motor/stop.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function redLight() {
	$.ajax({
		url:"controlPHP/Light/redLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function greenLight() {
	$.ajax({
		url:"controlPHP/Light/greenLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function blueLight() {
	$.ajax({
		url:"controlPHP/Light/blueLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function yellowLight() {
	$.ajax({
		url:"controlPHP/Light/yellowLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function cyanLight() {
	$.ajax({
		url:"controlPHP/Light/cyanLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function magentaLight() {
	$.ajax({
		url:"controlPHP/Light/magentaLight.php",
		type: "POST",
		success:function(result) {
			}
		})
		}

function whiteLight() {
	$.ajax({
		url:"controlPHP/Light/whiteLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

function offLight() {
	$.ajax({
		url:"controlPHP/Light/offLight.php",
		type: "POST",
		success:function(result) {
			}
		})
	}

window.onkeydown = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
		if (code === 38) {
			forward();
		} else if (code === 40) {
			backward();
		} else if (code === 37) {
			turnLeft();
		} else if (code === 39) {
			turnRight();
			}
		}

window.onkeyup = function (e) {
	var code = e.keyCode ? e.keyCode : e.which;
		if (code === 38) {
			halt();
		} else if (code === 40) {
			halt();
		} else if (code === 37) {
			halt();
		} else if (code === 39) {
			halt();
			}
		}

window.ondevicemotion = function(event) {
	var accelerationX = event.accelerationIncludingGravity.x;
	var accelerationY = event.accelerationIncludingGravity.y;
	var accelerationZ = event.accelerationIncludingGravity.z;

if (accelerationX >= 5) {
		turnRight();
	} else if (accelerationX <= -5) {
		turnLeft();
	} else if (accelerationY >= 5){
		forward();
	} else if (accelerationY <= -5) {
		backward();
	} else {
		halt();
			}
	}

        