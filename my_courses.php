<?php 
    session_start();
    if (empty($_SESSION['id']))  header('Location:/enter.php');
    if ($_SESSION['id_role']==2) header('Location:/courses.php');
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
            <form name="form" onsubmit="createCourse(event)" class="box t2" >
                <label for="">Название курса:</label> <input type="text" name="name">
                <textarea name="description" placeholder="Описание курса:"></textarea>
                <button class="btn">Создать</button>
            </form>
            <div class="container lec">
                
            </div>
        </div>
    </main>
    <?php
    include './footer.php'
    ?>
    <script src="/js/my_courses.js"></script>
</body>

</html>