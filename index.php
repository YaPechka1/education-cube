<?php 
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <title>Cube</title>

</head>

<body>
    <?php include './header.php' ?>
    <main>
        <div class="container">
            <div class="box">
                <img id="logo" src="/file/logo.png" alt="">
            </div>
            <div class="box">
                <h3>Добро пожаловать на сайт</h3>
                <p>Cube - прототип информационной системы для обучения персонала,<br> выполненный в рамках дипломного проекта</p>
            </div>
        </div>
    </main>
    <?php
    include './footer.php'
    ?>
</body>

</html>