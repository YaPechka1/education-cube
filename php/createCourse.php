<?php 
    session_start();
    
    if (isset($_SESSION['id']) && isset($_POST['name']) && isset($_POST['description'])){
        include './link.php';
        include './genCode.php';
        $code = genCode();
        $query ="INSERT INTO `courses`(`name`, `description`, `code`, `id_user`) VALUES ('$_POST[name]','$_POST[description]',$code,$_SESSION[id])";
        mysqli_query($link,$query);
    }
    exit(json_encode('OK'));

?>