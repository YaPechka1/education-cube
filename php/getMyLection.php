<?php 

if (isset($_GET['id'])){
    include './link.php';
    $query = "SELECT `id`, `name`, `description` FROM `lecture` WHERE  `id_course`=$_GET[id]";
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)));
}
exit(json_encode('OK'));
?>