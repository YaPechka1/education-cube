<?php 

if (isset($_GET['id'])){
    include './link.php';
    $query = "SELECT id_result, test.name as 'test_name', users.name, mark  FROM `result` INNER JOIN test on test.id = result.id_test INNER JOIN users on users.id = result.id_user where id_course=$_GET[id];";
    exit(json_encode(mysqli_fetch_all(mysqli_query($link,$query),MYSQLI_ASSOC)));
}
exit(json_encode('OK'));
?>