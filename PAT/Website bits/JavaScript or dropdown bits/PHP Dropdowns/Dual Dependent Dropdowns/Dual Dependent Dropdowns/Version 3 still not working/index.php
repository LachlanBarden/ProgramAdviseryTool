<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<script src="../js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#program").change(function(){
				var aid = $("#program").val();
				$.ajax({
					url: 'data.php',
					method: 'post',
					data: 'aid=' + aid
				}).done(function(major){
					console.log(major);
					major = JSON.parse(major);
					$('#major').empty();
					major.forEach(function(major){
						$('#major').append('<option>' + major.majorName + '</option>')
					})
				})
			})
		})
	</script>
</head>
<body>
	<div class="container">
		<h1 class="text-center">Dependent Drop Down list test </h1>
		<hr>
		<div class="row">
		    <div class="col-md-6 col-md-offset-3">
				<form role="form" method="post" action="">
		        	<div class="row">
		                <div class="form-group">
		                    <label for="authors">Programs</label>
		                    <select class="form-control" id="authors" name="authors">
		                    	<option selected="" disabled="">Select Program</option>
		                    	<?php 
		                    		require 'data.php';
		                    		$program = loadPrograms();
		                    		foreach ($program as $program) {
		                    			echo "<option id='".$program['id']."' value='".$program['id']."'>".$program['programName']."</option>";
		                    		}
		                    	 ?>
		                    </select>
		                </div>
		            </div>
		            <div class="row">
		                <div class="form-group">
		                    <label for="books">Major</label>
		                    <select class="form-control" id="books" name="books">
		                    	
		                    </select>
		                </div>
		            </div>
		        </form>
		    </div>
		</div>
	</div>
</body>
</html>