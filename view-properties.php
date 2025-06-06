<?php
require 'db_config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Available Properties</title>
</head>
<body>
    <h2>Available Properties</h2>
    <a href="list-property.php">← Back to Listing Form</a><br><br>

    <?php
    $query = "SELECT * FROM properties ORDER BY id DESC";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<div style='border:1px solid #ccc; padding:10px; margin-bottom:10px;'>";
            echo "<h3>" . htmlspecialchars($row['title']) . "</h3>";
            echo "<p><strong>Location:</strong> " . htmlspecialchars($row['location']) . "</p>";
            echo "<p><strong>Price:</strong> $" . htmlspecialchars($row['price']) . "</p>";
            echo "<p><strong>Description:</strong> " . nl2br(htmlspecialchars($row['description'])) . "</p>";
            echo "<img src='uploads/" . htmlspecialchars($row['image']) . "' alt='Property Image' width='300'>";
            echo "</div>";
        }
    } else {
        echo "<p>No properties listed yet.</p>";
    }

    $conn->close();
    ?>
</body>
</html>