const launchButton = document.querySelector('#launchButton');
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');
// console.log('launchButton', launchButton);
// console.log('confirmButton', confirmButton);
// console.log('cancelButton', cancelButton);

// success 
const successMessage = document.querySelector('h1.success');
const failureMessage = document.querySelector('h1.failure');
//modal
const modal = document.querySelector("div.modal");
console.log('modal', modal);

// click event edit
launchButton.onclick = (e) =>{
    console.log('this is the event: ', e)
}

// event
launchButton.addEventListener('click', () =>{
    console.log('hellow world');
});

// challenge
launchButton.addEventListener('focus', (e) =>{
    e.target.style.background = 'pink';
})

launchButton.addEventListener('focus', (e) =>{
    e.target.style.width = '120%';
})

Array.from(document.links).forEach((l)=>{
    l.addEventListener('mouseover', (e) =>{
        console.log('Hovered on a link!');
    });
})

function launch(){
    modal.classList.toggle('off');
}
launchButton.addEventListener('click', launch);