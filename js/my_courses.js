let container = document.querySelector('.lec');
let name_course = document.form.name;
let description_course = document.form.description;

getMyCourses();
async function createCourse(event) {
    event.preventDefault();
    let form = new FormData();
    form.append('name', name_course.value);
    form.append('description', description_course.value);
    await fetch('/php/createCourse.php', { method: "POST", body: form }).then(res => res.json()).then(
        async data => {
            document.form.reset();
            await getMyCourses();
        }
    )
}
async function getMyCourses() {
    await fetch('/php/getMyCourse.php').then(res => res.json()).then(
        data => {
            let temp = document.querySelectorAll('.lec>*')

            for (let i = 0; i < temp.length; i++) {
                temp[i].remove();
            }
            for (let i = 0; i < data.length; i++) {
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><input type="text" readonly value="' + data[i].code + '"><button class="btn" onclick="genCode(event, '+data[i].id+')">Сгенерировать новый код</button><button class="btn" onclick="redirect('+data[i].id+')">Перейти</button><button class="btn red" onclick="deleteCourse(event, '+data[i].id+')">Удалить</button></div>')
            }
            if (document.querySelectorAll('.lec > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'создайте курс' + '</p></div>')
            }
        }
    )
}
async function deleteCourse(event, id){
    await fetch('/php/deleteCourse.php?id='+id).then(res=>res.json()).then(
        data=>{
            event.target.parentNode.remove();
            if (document.querySelectorAll('.lec > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'создайте курс' + '</p></div>')
            }
        }
    )
}
async function genCode(event, id) {
    await fetch('/php/updateCode.php?id='+id).then(res=>res.json()).then(
        data=>{
            event.target.parentNode.querySelector('input').value = data;
        }
    )
}
function redirect(id){
    document.location.href ='/lection_list_admin.php?id='+id
}
