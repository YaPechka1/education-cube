let container = document.querySelector('.lec');


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyTest();

async function getMyTest() {
    await fetch('/php/getMyTest.php?id='+myParam).then(res => res.json()).then(
        data => {

            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><button class="btn" onclick="redirect('+data[i].id+')">Пройти</button></div>')
            }
        }
    )
}


function redirect(id){
    document.location.href ='/test.php?id='+id
}
