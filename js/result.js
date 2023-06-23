let container = document.querySelector('.lec');


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyTest();

async function getMyTest() {
    await fetch('/php/getResult.php?id='+myParam).then(res => res.json()).then(
        data => {

            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><p>Оценка: '+data[i].mark+'</p><button class="btn" onclick="redirect('+data[i].id_test+')">Пройти повторно</button></div>')
            }
        }
    )
}


function redirect(id){
    document.location.href ='/test.php?id='+id
}
