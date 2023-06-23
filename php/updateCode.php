<?php 
if (isset($_GET['id'])){
    include './genCode.php';
    include './link.php';
    $code = genCode();
    $query = "UPDATE `courses` SET `code` = '$code' WHERE `courses`.`id` = $_GET[id];";
    mysqli_query($link,$query);
    exit(json_encode($code));
}
exit(json_encode('OK'));
?>