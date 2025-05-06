<?php

setcookie("fitness_user", "", time() - 3600, "/");
header("Location: login.html");
exit();
?>
