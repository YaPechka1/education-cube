let container = document.querySelector('.lec');
let name_test = document.form.name;
let description_test = document.form.description;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyTest();
async function createTest(event) {
    event.preventDefault();
    let form = new FormData();
    form.append('name', name_test.value);
    form.append('description', description_test.value);
    await fetch('/php/createTest.php?id='+myParam, { method: "POST", body: form }).then(res => res.json()).then(
        async data => {
            document.form.reset();
            await getMyTest();
        }
    )
}
async function getMyTest() {
    await fetch('/php/getMyTest.php?id='+myParam).then(res => res.json()).then(
        data => {
            let temp = document.querySelectorAll('.lec>*')

            for (let i = 0; i < temp.length; i++) {
                temp[i].remove();
            }
            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><button class="btn" onclick="redirect('+data[i].id+')">Перейти</button><button class="btn red" onclick="deleteTest(event, '+data[i].id+')">Удалить</button></div>')
            }
            if (document.querySelectorAll('.lec > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'создайте тест' + '</p></div>')
            }
            
        }
    )
}
async function deleteTest(event, id){
    await fetch('/php/deleteTest.php?id='+id).then(res=>res.json()).then(
        data=>{
            event.target.parentNode.remove();
            if (document.querySelectorAll('.lec > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'создайте тест' + '</p></div>')
            }
        }
    )
}

function redirect(id){
    document.location.href ='/test_editor.php?id='+id
}
function redirectResult(){
    document.location.href='/result_admin.php?id='+myParam;
}

