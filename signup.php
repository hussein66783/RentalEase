<?php
require 'connect.php';

$username  = $_POST['username'];
$email     = $_POST['email'];
$password  = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Prepare and insert into database
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $usrname, , $email, $password);

if ($stmt->execute()) {
    echo "Signup successful! <a href='login.html'>Login here</a>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
