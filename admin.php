<?php
session_start();


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $_SESSION['name'] = $_POST['name'];
  $_SESSION['email'] = $_POST['email'];
  $_SESSION['role'] = $_POST['role'];
}


$nameErr = $emailErr = $roleErr = '';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (empty($_POST['name'])) {
    $nameErr = 'Name is required';
  }
  if (empty($_POST['email'])) {
    $emailErr = 'Email is required';
  }
  if (empty($_POST['role'])) {
    $roleErr = 'Role is required';
  }
}
?>