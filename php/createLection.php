<?php 

    
    if (isset($_GET['id']) && isset($_POST['name']) && isset($_POST['description'])){
        include './link.php';
        $query ="INSERT INTO `lecture`( `name`, `description`, `id_course`) VALUES ('$_POST[name]','$_POST[description]',$_GET[id])";
        mysqli_query($link,$query);
        mysqli_query($link,"INSERT INTO `lecture_material`( `id_lecture`, `material`) VALUES (LAST_INSERT_ID(), '[]');");
    }
    exit(json_encode('OK'));

?>