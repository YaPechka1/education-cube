<?php 

if (isset($_GET['id'])){
    include './link.php';
    $query = "SELECT `id`, `material` FROM `test_material` WHERE `id_test`=$_GET[id]";
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)));
}
exit(json_encode('OK'));
?>