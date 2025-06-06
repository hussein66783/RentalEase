<?php
$conn = new mysqli("localhost", "root", "", "rentalease");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$title = $_POST['title'];
$description = $_POST['description'];
$location = $_POST['location'];
$price = $_POST['price'];

$image_name = $_FILES['image']['name'];
$image_tmp = $_FILES['image']['tmp_name'];
$image_path = "uploads/" . basename($image_name);

if (move_uploaded_file($image_tmp, $image_path)) {
    $stmt = $conn->prepare("INSERT INTO properties (title, description, location, price, image) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssds", $title, $description, $location, $price, $image_name);

    if ($stmt->execute()) {
        header("Location: view-listed-properties.html");
        exit;
    } else {
        echo "Failed to save property.";
    }

    $stmt->close();
} else {
    echo "Image upload failed.";
}

$conn->close();
?>
