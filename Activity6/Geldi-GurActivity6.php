<?php
// Activity6.php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
    
        <link rel="stylesheet" type="text/css" href="register.css">

</head>
<body>

    <h2>Registration Form</h2>
    <form method="POST" action="Geldi-GurActivity6Preview.php">


        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address"><br>

        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="">(Please select a country)</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
        </select><br>

        <label for="zip">ZIP Code:</label>
        <input type="text" id="zip" name="zip"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <label>Sex:</label>
        <input type="radio" class="inline" name="sex" value="Male">Male
        <input type="radio" class="inline" name="sex" value="Female">Female<br>

        <label>Language:</label>
        <input type="checkbox" class="inline" name="language[]" value="English">English
        <input type="checkbox" class="inline" name="language[]" value="French">French
        <input type="checkbox" class="inline" name="language[]" value="Germany">Germany<br>

        <label for="about">About:</label>
        <textarea id="about" name="about"></textarea><br>


        <input type="submit" value="Submit">
       
     </form>
</body>
</html>

<?php

?>
