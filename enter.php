<?php 
    session_start();
    if (isset($_SESSION['id'])) header("Location:/courses.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/enter.css">
    <title>Cube</title>

</head>

<body>
    <?php include './header.php' ?>
    <main>
        <div class="container">
            <form name="form" onsubmit="submitForm(event)" class="box t2">
                <h3>Авторизация</h3>
                <label for="">Логин:</label><input name="login" type="text">
                <label for="">Пароль:</label><input name="password" type="password">
                <button class="btn">Войти</button>
                <span class="total"></span>
            </form>
        </div>
    </main>
    <?php
    include './footer.php'
    ?>
    <script src="./js/enter.js"></script>
</body>

</html>