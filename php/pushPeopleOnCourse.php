<?php 
session_start();
if (isset($_GET['id']) && isset($_GET['code']) && isset($_SESSION['id'])){
    include './link.php';
    if (mysqli_num_rows(mysqli_query($link,"select id from courses WHERE id=$_GET[id] and code=$_GET[code]"))>0){
        $query = "INSERT INTO `courses_people`( `id_user`, `id_course`) VALUES ($_SESSION[id],(select id from courses WHERE id=$_GET[id] and code=$_GET[code]))";
        mysqli_query($link,$query);
        exit(json_encode('OK'));
    }
    else{
        exit(json_encode('Неверный код'));
    }
}
exit(json_encode('FAIL'));
?>