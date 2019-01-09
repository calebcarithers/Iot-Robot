<?php
//set output for rgb pins
	system ("gpio -g mode 25 out"); //red light
	system ("gpio -g mode 26 out"); //green light
	system ("gpio -g mode 11 out"); //blue light
	
//turn on light (common anode rgb LED)
	system ("gpio -g write 25 0"); //red low
  	system ("gpio -g write 26 0"); //green low
  	system ("gpio -g write 11 1") //blue high
?>