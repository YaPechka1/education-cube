<header>
    <a href="" class="logo"><img src="/file/logo.png">Cube</a>
    <nav>
        <ul>
            <li><a href="/">Главная</a></li>
            <?php
            if (isset($_SESSION['id_role']) && $_SESSION['id_role'] == 2) {
                echo '
                    <li><a href="/courses.php">Учебные материалы</a></li>
                    <li><a href="/education.php">Мои курсы</a></li>
                    ';
            }
            if (isset($_SESSION['id_role']) && $_SESSION['id_role'] == 1) {
                echo '
                    <li><a href="/my_courses.php">Мои курсы</a></li>
                    ';
            }
            if (empty($_SESSION['id_role'])) {
                echo '
                    <li><a href="/enter.php">Вход</a></li>
                    <li><a href="/registration.php">Регистрация</a></li>
                    ';
            }
            else{
                echo '
                <li><a href="/php/exit.php">Выход</a></li>
                ';
            }
            ?>
        </ul>
    </nav>
</header>