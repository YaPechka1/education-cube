<?php 

if (isset($_GET['id'])){
    include './link.php';
    $query = "SELECT courses_people.`id`, `id_user`, name, email FROM `courses_people` inner join users on users.id = courses_people.id_user WHERE `id_course` = $_GET[id]";
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)));
}
exit(json_encode('OK'));
?>