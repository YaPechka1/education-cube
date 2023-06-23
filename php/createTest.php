<?php 

    
    if (isset($_GET['id']) && isset($_POST['name']) && isset($_POST['description'])){
        include './link.php';
        $query ="INSERT INTO `test`( `name`, `description`, `id_course`) VALUES ('$_POST[name]','$_POST[description]',$_GET[id])";
        mysqli_query($link,$query);
        mysqli_query($link,"INSERT INTO `test_material`( `id_test`, `material`, `mark`) VALUES (LAST_INSERT_ID(), '[]', '[{\"mark\":\"2\", \"point\":\"0\"},{\"mark\":\"3\", \"point\":\"3\"},{\"mark\":\"4\", \"point\":\"4\"},{\"mark\":\"5\", \"point\":\"5\"}]');");
    }
    exit(json_encode('OK'));

?>