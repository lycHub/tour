<?php
	session_start();
	if($_POST['code']!=$_SESSION['code']){
		echo 0;
	}
?>