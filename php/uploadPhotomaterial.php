<?php 
if (isset($_FILES['photo'])){

    $file = $_FILES['photo'];
    //переменная где хранится фото
    $name = $file['name'];//получить имя переменной
    $pathfile = __DIR__ . '\..\file\\' . $name;//полный путь до фото ДЛЯ сохранения на ПЗУ
    $pathfilee =  '/file/' . $name;//относительный путь файла для хранения в БД
    
    if (!move_uploaded_file($file['tmp_name'], $pathfile)) {
        $message='Ошибка передачи файла';
        exit(json_encode($message));
    }
    exit(json_encode($pathfilee));
}
exit(json_encode('FAIL'));
?>