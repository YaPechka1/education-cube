let container = document.querySelector('.container');

getAllCourses();
async function getAllCourses(){
    await fetch('/php/getAllCourses.php').then(res=>res.json()).then(
        data=>{
            for (let i=0;i<data.length;i++){
                container.insertAdjacentHTML('beforeend', '<div class="box t1"><h4>' + data[i].name + '</h4><p>' + data[i].description + '</p><input type="text" readonly value="' + data[i].user_name + '"><input type="text" class="code" placeholder="Код доступа:"><button class="btn" onclick="pushPeople(event, '+data[i].id+')">Присоединиться</button><span class="res"></span></div>')
            }
        }
    )
}
async function pushPeople(event, id){
    let code = event.target.parentNode.querySelector('.code').value;
    await fetch('/php/pushPeopleOnCourse.php?id='+id+'&code='+code).then(res=>res.json()).then(
        data=>{
            if (data=='OK'){
                document.location.href='/education.php'
            }
            else{
                event.target.parentNode.querySelector('.res').innerHTML=data;
            }
        }
    )
}