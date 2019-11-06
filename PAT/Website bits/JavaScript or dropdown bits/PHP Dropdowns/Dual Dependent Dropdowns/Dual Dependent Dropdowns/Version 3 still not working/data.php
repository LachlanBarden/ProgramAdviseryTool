<?php 
	require 'DbConnect.php';
	if(isset($_POST['aid'])) {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM major WHERE program = " . $_POST['aid']);
		$stmt->execute();
		$major = $stmt->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($major);
	}
	function loadPrograms() {
		$db = new DbConnect;
		$conn = $db->connect();
		$stmt = $conn->prepare("SELECT * FROM program");
		$stmt->execute();
		$program = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return $program;
	}
 ?>