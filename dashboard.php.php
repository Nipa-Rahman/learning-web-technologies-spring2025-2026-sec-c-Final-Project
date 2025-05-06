<?php
if (!isset($_COOKIE["fitness_user"])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
</head>
<body>
  <h1>Welcome to your Fitness Dashboard, <?php echo htmlspecialchars($_COOKIE["fitness_user"]); ?>!</h1>
  <a href="logout.php">Logout</a>
</body>
</html>
