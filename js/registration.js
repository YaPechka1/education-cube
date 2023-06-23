let name_user = document.form.name; 
let login_user = document.form.login; 
let email_user = document.form.email; 
let role = document.form.role;
let password = document.form.password; 
let total = document.querySelector('.total')

async function submitForm(event){
    event.preventDefault();
    let form = new FormData();
    form.append('name', name_user.value);
    form.append('login', login_user.value);
    form.append('email', email_user.value);
    form.append('id_role', role.value);
    form.append('password', password.value);
    
    await fetch('/php/reg.php', {method:'POST', body:form}).then(res=>res.json()).then(
        (data)=>{
            if (data.length ==0 ) document.location.href = '/enter.php';
            else {
                total.innerHTML = data;
            }
        }
    )
    
}