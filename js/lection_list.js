let container = document.querySelector('.container');

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getMyLecture();

async function getMyLecture() {
    container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Тестирование' + '</h4><button class="btn" onclick="redirectTest()">Перейти</button><button class="btn" onclick="redirectResult()">Результаты</button></div>')
    await fetch('/php/getMyLection.php?id='+myParam).then(res => res.json()).then(
        data => {
            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><button class="btn" onclick="redirect('+data[i].id+')">Перейти</button></div>')
            }
        }
    )
}
function redirect(id){
    document.location.href='/lection.php?id='+id
}
function redirectTest(){
    document.location.href='/test_list.php?id='+myParam;
}
function redirectResult(){
    document.location.href='/result.php?id='+myParam
}