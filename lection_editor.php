<?php
session_start();
if (empty($_SESSION['id']))  header('Location:/enter.php');
if ($_SESSION['id_role'] == 2) header('Location:/courses.php');
if ($_SESSION['id_role'] == 3) header('Location:/admin.php');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/course.css">
    <link rel="stylesheet" href="/css/editor.css">
    <title>Cube</title>

</head>

<body>
    <?php include './header.php' ?>
    <main>
        <div class="container">
            <form name="form" onsubmit="editLecture(event)" class="box t2">
                <label for="">Название лекции:</label> <input type="text" name="name">
                <textarea name="description" placeholder="Описание лекции:"></textarea>
                <button class="btn">Изменить</button>
                <span class="total"></span>
            </form>
            <div class="container t1 lec">

            </div>
        </div>
    </main>
    <button class="btn save" onclick="saveMaterial()">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
        </svg>
    </button>
    <?php
    include './footer.php'
    ?>
    <script src="/js/lection_editor.js"></script>
</body>

</html>