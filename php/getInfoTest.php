<?php 
if (isset($_GET['id'])){
    include './link.php';
    $query = "SELECT  `test`.`id_course`, `name`, `description`, `mark` FROM `test` INNER JOIN `test_material` on `test_material`.`id_test` = `test`.`id`  WHERE `test`.`id` = $_GET[id];";
    mysqli_query($link,$query);
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)[0]));
}
exit(json_encode('OK'));
?>