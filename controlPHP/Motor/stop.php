<?php
//set pin modes to output
	system ("gpio -g mode 23 out"); //right motor activator
	system ("gpio -g mode 24 out"); //left motor activator
	system ("gpio -g mode 6 out"); //lMotorB
	system ("gpio -g mode 5 out"); //lMotorC
	system ("gpio -g mode 27 out"); //rMotorB
	system ("gpio -g mode 22 out"); //rMotorC

//turn off activating pins
	system ("gpio -g write 23 0");
 	system ("gpio -g write 24 0");

//turn off all motors
	system ("gpio -g write 6 0"); //lMotorB
  	system ("gpio -g write 5 0"); //lMotorC
  	system ("gpio -g write 27 0"); //rMotorB
  	system ("gpio -g write 22 0"); //rMotorC
?>
        