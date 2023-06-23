let container = document.querySelector('.lec');


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyTest();

async function getMyTest() {
    await fetch('/php/getResultAdmin.php?id='+myParam).then(res => res.json()).then(
        data => {
            //container.insertAdjacentHTML('beforeend', '<div class="box t3"><h4>' + 'Имя участника' + '</h4><h4>' + 'Название теста' + '</h4><h4>Оценка</h4></div>')
            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t3"><span>' + data[i].name + '</span><span>' + data[i].test_name + '</span><button class="btn">'+data[i].mark+'</button></div>')
            }
        }
    )
}


function redirect(id){
    document.location.href ='/test.php?id='+id
}
