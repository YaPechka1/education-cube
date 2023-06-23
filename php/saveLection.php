<?php 
if (isset($_GET['id']) && $_GET['material']){
    include './link.php';
    $query= "UPDATE `lecture_material` SET `material` = '$_GET[material]' WHERE `lecture_material`.`id` = $_GET[id];";
    mysqli_query($link,$query);
    // exit(json_encode($query));

}
exit(json_encode('OK'));
?>