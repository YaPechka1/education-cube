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
            <form class="box t2" name="form" onsubmit="submitForm(event)">
                <h3>Регистрация:</h3>
                <label for="">Логин:</label><input name="login" type="text">
                <label for="">Почта:</label><input name="email" type="email">
                <label for="">Имя:</label><input name="name" type="text">
                <label for="">Пароль:</label><input name="password" type="password">
                <select id="reg" name="role"> 
                    <option value="1">Я учитель</option>
                    <option value="2">Я обуаюсь</option>
                </select>
                <button class="btn">Зарегистрироваться</button>
                <span class="total"></span>

            </form>
        </div>
    </main>
    <?php
    include './footer.php'
    ?>
    <script src="./js/registration.js"></script>
</body>

</html>