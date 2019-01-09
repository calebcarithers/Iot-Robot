<?php
//set out put for rgb pins
	system ("gpio -g mode 25 out"); //red
	system ("gpio -g mode 26 out"); //green
	system ("gpio -g mode 11 out"); //blue

 //turn on light (common anode rgb LED)
	system ("gpio -g write 25 1"); //red high
  	system ("gpio -g write 26 0"); //green low
  	system ("gpio -g write 11 1") //blue high
?>
     