<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$servername = "localhost";
$port = 3306;
$username = "root";
$password = "";
$dbname = "BuddyDB";

$conn = mysqli_connect($servername, $username, $password, null, $port);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

function createDB(
  mysqli $connection,
  string $database
): void {
  // Create the database
  $query = "CREATE DATABASE IF NOT EXISTS " . $database;
  if (!mysqli_query($connection, $query)) {
    die("Error creating database: " . mysqli_error($connection));
  }

  // Select the database
  mysqli_query($connection, "USE " . $database);

  // Create Users table
  $query = (
    "CREATE TABLE IF NOT EXISTS `Users` (" .
    "`uuid` CHAR(36) PRIMARY KEY," .
    "`username` VARCHAR(30) NOT NULL," .
    "`password` Text NOT NULL," .
    "`access` INT(11) NOT NULL" .
    ")"
  );
  if (!mysqli_query($connection, $query)) {
    echo "Error creating Users table: " . mysqli_error($connection);
  }
}
createDB($conn, $dbname);

function createUser(
  mysqli $connection,
  string $uuid,
  string $username,
  string $password,
  int $access
): void {
  $query = (
    "INSERT INTO Users (uuid, username, password, access)" .
    "VALUES ('$uuid', '$username', '$password', $access)"
  );
  if (!mysqli_query($connection, $query)) {
    echo "Could not create user: " . mysqli_error($connection);
  }
}

mysqli_close($conn);
