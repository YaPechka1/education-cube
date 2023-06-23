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
            <div class="t1">
                <form name="form" onsubmit="createTest(event)" class="box t2" >
                    <label for="">Название теста:</label> <input type="text" name="name">
                    <textarea name="description" placeholder="Описание теста:"></textarea>
                    <button class="btn">Создать</button>
                </form>
                <button class="btn" onclick="redirectResult()">Результаты</button>
            </div>
            <div class="container lec">

            </div>
        </div>
    </main>
    <?php
    include './footer.php'
    ?>
    <script src="/js/test_list_admin.js"></script>
</body>

</html>