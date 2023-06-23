let container = document.querySelector('.lec');
let name_lecture = document.form.name;
let description_lecture = document.form.description;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyLecture();
async function createLecture(event) {
    event.preventDefault();
    let form = new FormData();
    form.append('name', name_lecture.value);
    form.append('description', description_lecture.value);
    await fetch('/php/createLection.php?id='+myParam, { method: "POST", body: form }).then(res => res.json()).then(
        async data => {
            document.form.reset();
            await getMyLecture();
        }
    )
}
async function getMyLecture() {
    await fetch('/php/getMyLection.php?id='+myParam).then(res => res.json()).then(
        data => {
            let temp = document.querySelectorAll('.lec>*')

            for (let i = 0; i < temp.length; i++) {
                temp[i].remove();
            }
            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><button class="btn" onclick="redirect('+data[i].id+')">Перейти</button><button class="btn red" onclick="deleteLecture(event, '+data[i].id+')">Удалить</button></div>')
            }
            if (document.querySelectorAll('.lec > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'создайте лекцию' + '</p></div>')
            }
        }
    )
}
async function deleteLecture(event, id){
    await fetch('/php/deleteLecture.php?id='+id).then(res=>res.json()).then(
        data=>{
            event.target.parentNode.remove();
            if (document.querySelectorAll('.lec > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'создайте лекцию' + '</p></div>')
            }
        }
    )
}

function redirect(id){
    document.location.href ='/lection_editor.php?id='+id
}
function redirectTest(){
    document.location.href = '/test_list_admin.php?id='+myParam;
}
function redirectPeople(){
    document.location.href = '/people_course_admin.php?id='+myParam;
}
