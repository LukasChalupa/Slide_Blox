<!DOCTYPE html>
<html>
	<head>
		<title>SlideBlox</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<meta charset="UTF-8">
		<script type = "text/javascript" src = "http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	    <script type = "text/javascript" language="javascript" src="script.js"></script>
	</head>

	<body>
		<h1>SlideBlox</h1>
		<div class="content">
			<?php
				for ($i=0; $i < 15; $i++) { 
					echo '<div class="block" id="' . $i . '"><h2>' . ($i+1) . '</h2></div>';
				}
			?>
		</div>

		<div class="sideBar">
		</div>

	</body>

</html>


