<?php 
session_start();
if (isset($_GET['id']) && isset($_SESSION['id'])){
    include './link.php';
    $query = "SELECT `id_result`, `id_test`, `mark`, `name`, `description` FROM `result` inner JOIN test on test.id = result.id_test where id_user=$_SESSION[id] and test.id_course=$_GET[id]";
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)));
}
exit(json_encode('OK'));
?>