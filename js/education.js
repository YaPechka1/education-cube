let container = document.querySelector('.container');

getAllCourses();
async function getAllCourses(){
    await fetch('/php/getAllCoursesUser.php').then(res=>res.json()).then(
        data=>{
            for (let i=0;i<data.length;i++){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><input type="text" readonly value="' + data[i].user_name + '"><button class="btn" onclick="redirect('+data[i].id+')">Перейти</button><button class="btn red" onclick="deletePeople(event, '+data[i].id+')">Покинуть</button></div>')
            }
            if (document.querySelectorAll('.container > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'Станьте участником курса' + '</p></div>')
            }
        }
    )
}
async function deletePeople(event, id){
    await fetch('/php/deletePeopleFromCourseUser.php?id='+id).then(res=>res.json()).then(
        data=>{
            event.target.parentNode.remove();
            if (document.querySelectorAll('.container > *').length==0){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + 'Пусто' + '</h4><p>' + 'Станьте участником курса' + '</p></div>')
            }
        }
    )
}
function redirect(id){
    document.location.href = '/lection_list.php?id='+id;
}