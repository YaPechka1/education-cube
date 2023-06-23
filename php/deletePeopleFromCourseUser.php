<?php 
session_start();
if (isset($_GET['id']) && isset($_SESSION['id'])){

    include './link.php';

    $query = "set @id = (SELECT id from courses_people where `id_course`=$_GET[id] and id_user=$_SESSION[id]);";
    mysqli_query($link,$query);
    $query="DELETE FROM `courses_people` WHERE id=@id;";
    mysqli_query($link,$query);

}
exit(json_encode('OK'));
?>