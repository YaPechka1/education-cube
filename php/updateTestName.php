<?php 
    if (isset($_GET['id']) && isset($_POST['name']) && isset($_POST['description'])){
        include './link.php';
        $query ="UPDATE `test` SET `name`='$_POST[name]',`description`='$_POST[description]' WHERE `id`=$_GET[id]";
        mysqli_query($link,$query);
    }

    exit(json_encode('OK'));

?>