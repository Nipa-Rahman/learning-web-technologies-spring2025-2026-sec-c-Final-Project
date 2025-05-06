<?php

$valid_user = 'admin';
$valid_pass = '123456';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $valid_user && $password === $valid_pass) {
        
        setcookie("fitness_user", $username, time() + 3600, "/");
        header("Location: dashboard.php");
        exit();
    } else {
        header("Location: login.html?error=1");
        exit();
    }
}
?>
