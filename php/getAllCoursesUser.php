<?php 
    session_start();
    if (isset($_SESSION['id'])){
        include './link.php';
        $query = "SELECT courses.`id`, courses.`name`, `description`, `code`, users.name as 'user_name' FROM `courses` inner join users on users.id = courses.id_user where courses.id in (select id_course from `courses_people` where id_user=$_SESSION[id])";
        mysqli_query($link,$query);
        exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)));
    }
    exit(json_encode('FAIL'));
?>