<?php 
function genCode(){
    $code = '';
    for ($i=0;$i<6;$i++){
        $code=$code.''.rand(0,9);
    }
    return $code;
}
