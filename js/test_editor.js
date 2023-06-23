let container = document.querySelector('.lec');
let name_test = document.form.name;
let description_test = document.form.description;

let save = document.querySelector('.save');
let markContainer = document.querySelector('.mark');

let mark = [];
let material = [];
let id = 0;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyTest();
getMaterial();
async function editTest(event) {
    event.preventDefault();
    let form = new FormData();
    form.append('name', name_test.value);
    form.append('description', description_test.value);
    await fetch('/php/updateTestName.php?id=' + myParam, { method: "POST", body: form }).then(res => res.json()).then(
        async data => {
            document.form.reset();
            await getMyTest();
            document.querySelector('.total').innerHTML = "Успешно";
        }
    )
}
async function getMyTest() {
    await fetch('/php/getInfoTest.php?id=' + myParam).then(res => res.json()).then(
        data => {
            name_test.value = data.name;
            description_test.value = data.description;
            mark = JSON.parse(data.mark)
            drawMark();
        }
    )
}
function drawMark(){
    let temp = document.querySelectorAll('.mark>*');
    for (let i=2;i<temp.length;i++){
        temp[i].remove();
    }
    for (let i=0;i<mark.length;i++){
        let min=0;
        let max = Infinity;
        let readonly="";
        if (i>0){
            min = Number(mark[i-1].point)+1;
        }
        if (i<mark.length-1){
            max=Number(mark[i+1].point)-1;
        }
        if (i==0){
            readonly="readonly";
        }
        markContainer.insertAdjacentHTML('beforeend', '<span>'+mark[i].mark+'</span><input '+readonly+' onchange="editMark(event, '+i+')" onkeypress="return false" min="'+min+'" max="'+max+'" type="number" value="'+mark[i].point+'">')
    }
}
function editMark(event, idx){
    let temp = markContainer.querySelectorAll('input');
    save.classList.add('red');
    mark[idx].point = event.target.value;
    for (let i=0;i<temp.length;i++){
        let min=0;
        let max = Infinity;
        if (i>0){
            min = Number(mark[i-1].point)+1;
        }
        if (i<mark.length-1){
            max=Number(mark[i+1].point)-1;
        }
        temp[i].min = min;
        temp[i].max = max;
    }
}
async function getMaterial() {
    await fetch('/php/getOneTest.php?id=' + myParam).then(res => res.json()).then(
        data => {
            id = data[0].id;
            material = JSON.parse(data[0].material);
            drawMaterial();

        }
    )
}

function drawMaterial() {
    for (let i = 0; i < material.length; i++) {
        let answers = "";
        console.log(material[i])
        for (let z=0;z<material[i].answers.length;z++){
            answers+="<input oninput='editAnswerText(event,"+i+", "+z+")' type='text' value='"+material[i].answers[z].text+"'><input type='number' onchange='editAnswerPoint(event, "+i+", "+z+")' onkeypress='return false' min='0' value='"+material[i].answers[z].point+"'><buttom class='btn red' onclick='deleteAnswer(event,"+i+","+ z+")'>Удалить</buttom>";
        }
        container.insertAdjacentHTML('beforeend', '<div class="box t1"><img class="delete" onclick="deleteMaterial(event, '+i+')" src="/file/del.svg"><textarea oninput="editMaterialText(event, '+i+')">'+material[i].text+'</textarea><div class="t3"><h4>Текст ответа</h4><h4>Количество баллов</h4><span></span>'+answers+'<button class="btn" onclick="createAnswer(event, '+i+')">Добавить вариант ответа</button></div></div>')

    }
    container.insertAdjacentHTML('beforeend', "<button onclick='createMaterial(event)' class='btn t1'>Добавить вопрос</button>")
}
function deleteAnswer(event, idx, z){
    material[idx].answers.splice(z, 1);
    let parent = event.target.parentNode; 
    let temp = parent.querySelectorAll('*');
    save.classList.add('red');
    console.log(temp)
    for (let i=3;i<temp.length;i++){
        temp[i].remove();
    }
    for (let i=0;i<material[idx].answers.length;i++){
        console.log(event.target.parentNode)
        parent.insertAdjacentHTML('beforeend',"<input type='text' oninput='editAnswerText(event,"+idx+", "+i+")' value='"+material[idx].answers[i].text+"'><input type='number' onchange='editAnswerPoint(event, "+idx+", "+i+")' onkeypress='return false' min='0' value='"+material[idx].answers[i].point+"'><buttom class='btn red' onclick='deleteAnswer(event,"+idx+","+ i+")'>Удалить</buttom>");
    }
    parent.insertAdjacentHTML('beforeend','<button class="btn" onclick="createAnswer(event, '+idx+')">Добавить вариант ответа</button>')
}
function createAnswer(event, idx){
    save.classList.add('red');
    material[idx].answers.push({text:"Ответ", point:'0'});
    let parent = event.target.parentNode; 
    let temp = parent.querySelectorAll('*');
    console.log(temp)
    for (let i=3;i<temp.length;i++){
        temp[i].remove();
    }
    for (let i=0;i<material[idx].answers.length;i++){
        console.log(event.target.parentNode)
        parent.insertAdjacentHTML('beforeend',"<input type='text' oninput='editAnswerText(event,"+idx+", "+i+")' value='"+material[idx].answers[i].text+"'><input type='number' onchange='editAnswerPoint(event, "+idx+", "+i+")' onkeypress='return false' min='0' value='"+material[idx].answers[i].point+"'><buttom class='btn red' onclick='deleteAnswer(event,"+idx+","+ i+")'>Удалить</buttom>");
    }
    parent.insertAdjacentHTML('beforeend','<button onclick="createAnswer(event, '+idx+')" class="btn">Добавить вариант ответа</button>')
}
function deleteMaterial(event, idx) {
    container.innerHTML="";
    material.splice(idx,1)
    save.classList.add('red');
    drawMaterial();
}

function redirect(id) {
    document.location.href = '/lection_editor.php?id=' + id
}

function editMaterialText(event, idx){
    material[idx].text = event.target.value;
    save.classList.add('red');
    console.log(material)
}
function editAnswerText(event, i, z){
    material[i].answers[z].text = event.target.value;
    save.classList.add('red');

}
function editAnswerPoint(event, i, z){
    material[i].answers[z].point = event.target.value;
    save.classList.add('red');

}

function createMaterial(event){
    event.target.parentNode.innerHTML="";
    save.classList.add('red');
    material.push({text:"Вопрос", answers:[]});
    drawMaterial();
}
async function saveMaterial(){
    await fetch('/php/saveTest.php?id='+id+'&material='+JSON.stringify(material)+'&mark='+JSON.stringify(mark)).then(res=>res.json()).then(
        data=>{
            save.classList.remove('red');
        }
    )

}