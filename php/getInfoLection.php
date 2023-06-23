<?php 
if (isset($_GET['id'])){
    include './link.php';
    $query = "SELECT  `name`, `description` FROM `lecture` WHERE id = $_GET[id];";
    mysqli_query($link,$query);
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)[0]));
}
exit(json_encode('OK'));
?>