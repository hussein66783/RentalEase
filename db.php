<?php
$host = 'localhost';
$db = 'rentalease';  // Use your actual DB name
$user = 'root';
$pass = '';



$conn = new mysqli('localhost', 'root', '', 'rentalease');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
