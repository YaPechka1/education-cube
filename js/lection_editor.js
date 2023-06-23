let container = document.querySelector('.lec');
let name_lecture = document.form.name;
let description_lecture = document.form.description;
let save = document.querySelector('.save');

let material = [];
let id = 0;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMyLecture();
getMaterial();
async function editLecture(event) {
    event.preventDefault();
    let form = new FormData();
    form.append('name', name_lecture.value);
    form.append('description', description_lecture.value);
    await fetch('/php/updateLectionName.php?id=' + myParam, { method: "POST", body: form }).then(res => res.json()).then(
        async data => {
            document.form.reset();
            await getMyLecture();
            document.querySelector('.total').innerHTML = "Успешно";
        }
    )
}
async function getMyLecture() {
    await fetch('/php/getInfoLection.php?id=' + myParam).then(res => res.json()).then(
        data => {
            name_lecture.value = data.name;
            description_lecture.value = data.description;

        }
    )
}
async function getMaterial() {
    await fetch('/php/getOneLection.php?id=' + myParam).then(res => res.json()).then(
        data => {
            id = data[0].id;
            material = JSON.parse(data[0].material);
            drawMaterial();

        }
    )
}

function drawMaterial() {
    for (let i = 0; i < material.length; i++) {
        switch (material[i].type) {
            case "0":
                container.insertAdjacentHTML('beforeend', "<div id='box"+i+"' class='box t1'><img class='delete' onclick='deleteMaterial(event,"+i+")' src='/file/del.svg'><select onchange='editMaterialType(event, "+i+")'><option selected value='0'>Текст</option><option value='1'>Фото</option></select><textarea oninput='editMaterialText(event,"+i+")'>" + material[i].content + "</textarea></div>")
                break;
            case "1":
                container.insertAdjacentHTML('beforeend', "<div id='box"+i+"' class='box t1'><img class='delete' onclick='deleteMaterial(event,"+i+")' src='/file/del.svg'><select onchange='editMaterialType(event, "+i+")'><option value='0'>Текст</option><option selected value='1'>Фото</option></select><input onchange='editMaterialPhoto(event, "+i+")' type='file'><img src='" + material[i].content + "'></div>")
                break;
        }
    }
    container.insertAdjacentHTML('beforeend', "<button onclick='createMaterial(event)' class='btn t1'>Добавить</button>")
    save.classList.add('red');
}

function deleteMaterial(event, id) {
    save.classList.add('red');
    material[id].type="2";
    event.target.parentNode.remove();
}

function redirect(id) {
    document.location.href = '/lection_editor.php?id=' + id
}

function editMaterialText(event, idx){
    material[idx].content = event.target.value;
    save.classList.add('red');
    console.log(material)
}
async function editMaterialPhoto(event, idx){
    let form = new FormData();
    form.append('photo', event.target.files[0]);
    await fetch('/php/uploadPhotomaterial.php', {method:"POST", body:form}).then(res=>res.json()).then(
        data=>{
            material[idx].content = data;
            event.target.parentNode.querySelector('img:not(.delete)').src=data;
            save.classList.add('red');
        }
    )
}
function editMaterialType(event, idx){
    save.classList.add('red');
    let temp = document.querySelectorAll('#box'+idx+' > *');
    console.log(temp)
    for (let i=2;i<temp.length;i++){
        console.log(temp[i])
        temp[i].remove();
    }
    switch(event.target.value){
        case "0": {
            event.target.parentNode.insertAdjacentHTML('beforeend', "<textarea oninput='editMaterialText(event,"+idx+")'>" + 'Новый параграф' + "</textarea>")
            material[idx].type = '0';
            material[idx].content ='Новый параграф';
            break;
        }
        case "1": {
            event.target.parentNode.insertAdjacentHTML('beforeend', "<input onchange='editMaterialPhoto(event, "+idx+")' type='file'><img src='" + '/file/logo.png' + "'>")
            material[idx].type = '1';
            material[idx].content ='/file/logo.png';
        }
    }
}
function createMaterial(event){
    event.target.remove();
    material.push({
        type:"0",
        content:"Новый параграф"
    })
    let i = material.length-1;
    container.insertAdjacentHTML('beforeend', "<div id='box"+i+"' class='box t1'><img class='delete' onclick='deleteMaterial(event,"+i+")' src='/file/del.svg'><select onchange='editMaterialType(event, "+i+")'><option selected value='0'>Текст</option><option value='1'>Фото</option></select><textarea oninput='editMaterialText(event,"+i+")'>" + material[i].content + "</textarea></div>")
    container.insertAdjacentHTML('beforeend', "<button onclick='createMaterial(event)' class='btn t1'>Добавить</button>")

}
async function saveMaterial(){
    let temp = [];
    for (let i=0;i<material.length;i++){
        if (material[i].type!='2'){
            temp.push(material[i]);
        }
    }
    await fetch('/php/saveLection.php?id='+id+'&material='+JSON.stringify(temp)).then(res=>res.json()).then(
        data=>{
            save.classList.remove('red');
        }
    )

}