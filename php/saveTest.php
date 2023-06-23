<?php 
if (isset($_GET['id']) && $_GET['material'] && $_GET['mark']){
    include './link.php';
    $query= "UPDATE `test_material` SET `material` = '$_GET[material]', `mark`='$_GET[mark]' WHERE `id` = $_GET[id];";
    mysqli_query($link,$query);
    // exit(json_encode($query));

}
exit(json_encode('OK'));
?>