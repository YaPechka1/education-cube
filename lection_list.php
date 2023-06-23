<?php 
    session_start();
    if (empty($_SESSION['id']))  header('Location:/enter.php');
    if ($_SESSION['id_role']==1) header('Location:/my_courses.php');
    if ($_SESSION['id_role']==3) header('Location:/admin.php');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/course.css">
    <title>Cube</title>

</head>

<body>
    <?php include './header.php' ?>
    <main>
        <div class="container">
            
        </div>
    </main>
    <?php
    include './footer.php'
    ?>
    <script src="/js/lection_list.js"></script>
</body>

</html>