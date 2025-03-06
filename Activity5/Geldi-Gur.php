<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Currency Converter</title>
</head>
<body>
    <form method="post">
        From: <input type="text" name="amount" value="<?php echo isset($_POST['amount']) ? htmlspecialchars($_POST['amount']) : '';?>">
        Currency:
        <select name="from_currency">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select>
        <br>
        To: 
        <input type="text" value="<?php
            if(isset($_POST['convert'])){
                $rates = ["USD"=>1.0, "CAD"=>1.35, "EUR"=>0.92]; // Example conversion rates
                $amount = $_POST['amount'];
                $from = $_POST['from_currency'];
                $to = $_POST['to_currency'];

                $result = ($amount / $rates[$from]) * $rates[$to];
                echo number_format($result, 2);
            }
            ?>">

        Currency:
        <select name="to_currency">
            <option value="USD">US Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="EUR">Euro</option>
        </select>
        <br><br>
        <button type="submit" name="convert">Convert</button>
    </form>
</body>
</html>