<?php

$name = trim($_POST['name'] ?? '') ?: 'Not provided';
$username = trim($_POST['username'] ?? '') ?: 'Not provided';
$password = trim($_POST['password'] ?? '') ?: 'Not provided';
$address = trim($_POST['address'] ?? '') ?: 'Not provided';
$country = trim($_POST['country'] ?? '') ?: 'Not provided';
$zip = trim($_POST['zip'] ?? '') ?: 'Not provided';
$email = trim($_POST['email'] ?? '') ?: 'Not provided';
$sex = trim($_POST['sex'] ?? '') ?: 'Not provided';
$language = isset($_POST['language']) && is_array($_POST['language']) ? $_POST['language'] : [];
$about = trim($_POST['about'] ?? '') ?: 'Not provided';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    <link rel="stylesheet" type="text/css" href="preview.css">

    
</head>
<body>
    <div class="container">
        <h2>Preview</h2>

        
        <p><span class="output"><?php echo $name; ?></span></p>
        <p><span class="output"><?php echo $username; ?></span></p>
        <p><span class="output"><?php echo $password; ?></span></p>
        <p><span class="output"><?php echo $address; ?></span></p>
        <p><span class="output"><?php echo $country; ?></span></p>
        <p><span class="output"><?php echo $zip; ?></span></p>
        <p><span class="output"><?php echo $email; ?></span></p>
        <p><span class="output"><?php echo $sex; ?></span></p>
        <p><span class="output"><?php echo $language ? implode(", ", $language) : 'Not provided'; ?></span></p>
        <p><span class="output"><?php echo $about; ?></span></p>
    </div>
</body>
</html>