<?php 
if (isset($_GET['id'])){

    include './link.php';

    $query = "DELETE FROM `test` WHERE `id` = $_GET[id];";
    mysqli_query($link,$query);

}
exit(json_encode('OK'));
?>