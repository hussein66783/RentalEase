<?php
// Connect to the database
$conn = new mysqli("localhost", "root", "", "rentalease");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare and execute insert statement
$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    // Redirect to homepage if successful
    header("Location: index.html");
    exit;
} else {
    echo "Error submitting message.";
}

$stmt->close();
$conn->close();
?>
