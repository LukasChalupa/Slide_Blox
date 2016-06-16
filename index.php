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
			<div class="box">
				<?php
					for ($i=0; $i < 15; $i++) { 
						echo '<div class="block" id="' . $i . '">
							  	<span></span>
							  	<h2>' . ($i+1) . '</h2>
							  </div>';
					}
				?>
			</div>

			<form class="settings">
				<h3>Settings</h3>
				<div>
					<label>Height:</label>
					<input type="number" name="height" min="3" max="10" value="3"><br>
				</div>
				<div>
					<label>Width:</label>
					<input type="number" name="width" min="3" max="10" value="3"><br>
				</div>
				<div
					><button type="submit" id="submit">Submit</button>
				</div>
			</form>
		</div>

		<button id="shuffle">Shuffle</button>

		<div class="sideBar">
		</div>

	</body>

</html>


