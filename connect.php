<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'rentalease';

// Create connection
$conn = new mysqli($localhost, $user, $password, $rentalease);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
