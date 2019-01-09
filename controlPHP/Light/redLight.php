<?php
//set rgb pins as outputs
	system ("gpio -g mode 25 out"); //red
	system ("gpio -g mode 26 out"); //green
	system ("gpio -g mode 11 out"); //blue

//activate light (common anode rgb LED)
	system ("gpio -g write 25 0"); //red low
  	system ("gpio -g write 26 1"); //green high
  	system ("gpio -g write 11 1") //blue high
?>