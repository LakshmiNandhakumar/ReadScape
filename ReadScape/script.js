const form = document.querySelector('#form');
const uname = document.querySelector('#uname');
const email = document.querySelector('#email');

let success=true;


form.addEventListener('submit',(e)=>{
  
   if(!validateInputs()){
    e.preventDefault();
   }
})

function validateInputs(){
    const namevalue = uname.value.trim();
    const emailvalue = email.value.trim();

    if(namevalue===''){
        success=false;
        setError(uname,'Name is required');
    }
    else{
        setSuccess(uname);
    }

    if(emailvalue===''){
        success=false;
        setError(email,'email is required');
    }
    else if(!validateEmail(emailvalue)){
        success=false;
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }

    return success;
}

function setError(element,message){

    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
    
}

function setSuccess(element){

    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
    
}

const validateEmail = (email) =>
{
    return String(email)
    .toLowerCase()
    .match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ );
};

