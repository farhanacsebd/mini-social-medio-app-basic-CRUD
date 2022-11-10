const form = document.getElementById('form');
const input = document.getElementById('input')
const msg = document.getElementById('msg');
const posts = document.getElementById('posts');


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('button click');
    formValidation()
});


function formValidation(){
    if(input.value === ''){
        msg.innerText = 'Post cannot be blank';
    }
    else{
        console.log('success');
        acceptData()
    }
}


let data = {};

function acceptData(){
    data['text'] = input.value;
    console.log(data);
    createPosts()
}


function createPosts(){
    posts.innerHTML += 
    `<div>
    <p>${data.text}</p>
    <span class="options">
        <i onclick="editPosts(this)" class="fas fa-edit"></i>
        <i onclick="deletePosts(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
    

    // remove the input field 
    input.value = '';
}


// delete function
function deletePosts(e){
    e.parentElement.parentElement.remove();
  }

/* // also can use E6 function-

let deletePosts=(e)=>{
  e.parentElement.parentElement.remove();
} */


// edit post option function

function editPosts(e){
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}