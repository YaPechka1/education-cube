let container = document.querySelector('.container');

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getPeople();

async function getPeople(){
    await fetch('/php/getPeopleCourse.php?id='+myParam).then(res=>res.json()).then(
        data=>{
            for(let i=0;i<data.length;i++){
                container.insertAdjacentHTML('beforeend', '<div class="box t3"><span>'+data[i].name+'</span><span>'+data[i].email+'</span><button class="btn red" onclick="deletePeople(event,'+data[i].id+')">Удалить</button></div>')
            }
        }
    )
}
async function deletePeople(event, id){
    await fetch('/php/deletePeopleFromCourse.php?id='+id).then(res=>res.json()).then(
        data=>{
            event.target.parentNode.remove();
        }
    )
}