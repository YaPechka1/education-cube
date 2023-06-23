<?php 
    session_start();
    if (isset($_GET['id']) && isset($_GET['mark']) && isset($_SESSION['id'])){
        include './link.php';
        $query ="INSERT INTO `result`( `id_user`, `id_test`, `mark`) VALUES ($_SESSION[id],$_GET[id],$_GET[mark])";
        mysqli_query($link,$query);
    }

    exit(json_encode('OK'));

?>