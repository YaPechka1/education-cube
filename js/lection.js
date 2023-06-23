let container = document.querySelector('.lec');
let material = [];


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

getMaterial();

async function getMaterial() {
    await fetch('/php/getOneLection.php?id=' + myParam).then(res => res.json()).then(
        data => {
            material = JSON.parse(data[0].material);
            drawMaterial();
        }
    )
}

function drawMaterial() {
    for (let i = 0; i < material.length; i++) {
        switch (material[i].type) {
            case "0":
                container.insertAdjacentHTML('beforeend', "<div id='box"+i+"' class='box t1'><p>" + material[i].content + "</p></div>")
                break;
            case "1":
                container.insertAdjacentHTML('beforeend', "<div id='box"+i+"' class='box t1'><img src='" + material[i].content + "'></div>")
                break;
        }
    }
}






