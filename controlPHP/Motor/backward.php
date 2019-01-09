<?php
//set pin modes to output
	system ("gpio -g mode 23 out"); //right motor activator
	system ("gpio -g mode 24 out"); //left motor activator
	system ("gpio -g mode 6 out"); //lMotorB
	system ("gpio -g mode 5 out"); //lMotorC
	system ("gpio -g mode 27 out"); //rMotorB
	system ("gpio -g mode 22 out"); //rMotorC

//activate left and right motors
	system ("gpio -g write 23 1");
 	system ("gpio -g write 24 1");

 //turn motors backward
	system ("gpio -g write 6 0");
 	system ("gpio -g write 5 1");
	system ("gpio -g write 27 1");
 	system ("gpio -g write 22 0");
?>
        