<?php
session_start();
require 'connect.php';

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $username['password'])) {
        $_SESSION['user'] = $username['email'];
        header("Location: dashboard.html");
        exit();
    } else {
        echo "Invalid password. <a href='login.html'>Try again</a>";
    }
} else {
    echo "No user found with this email. <a href='signup.html'>Sign up</a>";
}

$stmt->close();
$conn->close();
?>
