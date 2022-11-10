const form = document.getElementById('form');
const input = document.getElementById('input')
const msg = document.getElementById('msg');

form.addEventListener('submit',function(e){
    e.preventDefault();
    formValidation()
});


function formValidation(){
    if(input.value === ''){
        msg.innerText = 'Post cannot be blank';
    }
    else{
        console.log('success');
    }
}