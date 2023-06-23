let container = document.querySelector('.lec');

let mark = [];
let material = [];
let selected = [];
let id=0;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyTest();
getMaterial();
async function getMyTest() {
    await fetch('/php/getInfoTest.php?id=' + myParam).then(res => res.json()).then(
        data => {
            id = data.id_course;
            mark = JSON.parse(data.mark)
        }
    )
}
async function getMaterial() {
    await fetch('/php/getOneTest.php?id=' + myParam).then(res => res.json()).then(
        data => {
            material = JSON.parse(data[0].material);
            drawMaterial();
        }
    )
}

function drawMaterial() {
    for (let i = 0; i < material.length; i++) {
        selected.push['0'];
        let answers = "";
        console.log(material[i])
        for (let z=0;z<material[i].answers.length;z++){
            answers+="<button class='btn' onclick='enterAns(event, "+i+", "+z+")'>"+material[i].answers[z].text+"</button>";
            //answers+="<input oninput='editAnswerText(event,"+i+", "+z+")' type='text' value='"+material[i].answers[z].text+"'><input type='number' onchange='editAnswerPoint(event, "+i+", "+z+")' onkeypress='return false' min='0' value='"+material[i].answers[z].point+"'><buttom class='btn red' onclick='deleteAnswer(event,"+i+","+ z+")'>Удалить</buttom>";
        }
        container.insertAdjacentHTML('beforeend', '<div class="box t1"><p>'+material[i].text+'</p><div class="t2">'+answers+'</div></div>')
        //container.insertAdjacentHTML('beforeend', '<div class="box t1"><textarea oninput="editMaterialText(event, '+i+')">'+material[i].text+'</textarea><div class="t3"><h4>Текст ответа</h4><h4>Количество баллов</h4><span></span>'+answers+'<button class="btn" onclick="createAnswer(event, '+i+')">Добавить вариант ответа</button></div></div>')
    }
    container.insertAdjacentHTML('beforeend','<button class="t1 btn" onclick="submitTest()">Отправить</button>')
}
function enterAns(event, idx, z){
    let temp = event.target.parentNode.querySelectorAll('.btn');
    for (let i=0;i<temp.length;i++){
        temp[i].classList.remove('green');
    }
    event.target.classList.add('green');
    selected[idx]=material[idx].answers[z].point
}
async function submitTest(){
    let total = 2;
    let sum=0;
    for (let i=0;i<selected.length;i++){
        sum+=Number(selected[i]);
    }
    for (let i=mark.length-1;i>=0;i--){
        // console.log(mark[i])
        if (Number(mark[i].point)<=sum){
            total = mark[i].mark;
            break
        }
    }
    await fetch('/php/submitResult.php?id='+myParam+'&mark='+total).then(res=>res.json()).then(
        data=>{
            document.location.href = '/result.php?id='+id;
        }
    )
}