<!DOCTYPE html>
<html>
	<head>
		<title>SlideBlox</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>

	<body>
		<h1>SlideBlox</h1>
		<div class="content">
			<?php
				for ($i=1; $i < 12; $i++) { 
					echo '<div class="block" id=\"b' . $i . '"><h2>' . $i . '</h2></div>';
				}
			?>
			<div class="clearer"></div>
		</div>

		<div class="sideBar">
			
		</div>

	</body>

</html>


