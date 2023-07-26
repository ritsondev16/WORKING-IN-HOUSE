let aa = document.querySelector('#aa');
let ab = document.querySelector('#ab');
let button = document.querySelector('#bb');



function resolution(){

 let username = aa.value;
 let password = ab.value;

    console.log(username);
    console.log(password);

}

button.addEventListener('click',resolution);

