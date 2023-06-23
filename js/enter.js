let login = document.form.login; 
let password = document.form.password; 
let total = document.querySelector('.total')

async function submitForm(event){
    event.preventDefault();
    let form = new FormData();
    form.append('login', login.value);
    form.append('password', password.value);
    
    await fetch('/php/log.php', {method:'POST', body:form}).then(res=>res.json()).then(
        (data)=>{
            if (data.length ==0 ) document.location.href = '/courses.php';
            else {
                total.innerHTML = data;
                total.classList.remove('hide');
            }
        }
    )
    
}