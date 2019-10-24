<html>
<head>
<script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
</head><?php include "connectdb.php"; ?>
<script>
function getMajor(val) {
	$.ajax({
	type: "POST",
	url: "get_Major.php",
	data:'programID='+val,
	success: functon(data){
		$("#major-list").html(data);
	}
	});
}

function showMsg()
{

	$("#msgC").html($("#program-list option:selected").text());
	$("#msgS").html($("#major-list option:selected").text());
	return false;
}
</script>
<body >
	<form>
	<label style="font-size:20px" >Program:</label>
		<select name="country" id="program-list" class="demoInputBox"  onChange="get_Major(this.value);">
		<option value="">Select Program</option>
		<?php
		$sql1="SELECT * FROM program";
         $results=$dbhandle->query($sql1); 
		while($rs=$results->fetch_assoc()) { 
		?>
		<option value="<?php echo $rs["programID"]; ?>"><?php echo $rs["programName"]; ?></option>
		<?php
		}
		?>
		</select>
        
	
		<label style="font-size:20px" >Major:</label>
		<select id="major-list" name="state"  >
		<option value="">Select Major</option>
		</select>
		<button value="submit" onclick="return showMsg()">Submit</button>
	</form>

		Selected Program: <span id="msgC"></span><br>
		Selected Major:  <span id="msgS"></span>
</body>
</html>