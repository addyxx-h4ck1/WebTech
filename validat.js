
//webdevform//
const buy = document.getElementById('form');
buy.addEventListener('submit', (e) =>{
    e.preventDefault();

    let email = document.getElementById('buyEmail');
    let subject = document.getElementById('buy');
    let button = document.querySelector('.buybtn');
    let message = document.querySelector('.buyh3');

    const formData = {
        Email: email.value,
        Subject: subject.value,
    }

    fetch("https://formsubmit.co/ajax/briannjosh23@gmail.com", {
   method: "POST",
   headers: { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
   },
   body: JSON.stringify(formData)
})  
   .then(action => {
       email.value = ''
       button.style.display = 'none'
       message.style.display = 'block'
   })
   
})
 
//portfolioform//


//webdevform//

const adjustment = document.querySelector('.form');
adjustment.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let email = document.getElementById('adEmail');
    let service = document.getElementById('adService');
    let button = document.getElementById('submit');
    let template = document.querySelector('.form #template')
    let message = document.querySelector('.adh3');

    const formData = {
        Email : email.value,
        Service : service.value,
       
    }
  
   fetch("https://formsubmit.co/ajax/briannjosh23@gmail.com", {
   method: "POST",
   headers: { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
   },
   body: JSON.stringify(formData)
})
    .then(res => {
        const response = res.json();
        console.log(response);
    })
   .then(action => {
       email.value = ''
       button.style.display = 'none'
       message.style.display = 'block'
   })

})
//portfolioform///////



//////contactform////////
const contactForm = document.querySelector('.input')
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let tel = document.getElementById('tel');
    let subject = document.getElementById('subject');    
    let message = document.getElementById('message');  
    let send = document.getElementById('send');  


    const contactData = {
        FirstName: fname.value,
        LastName: lname.value,
        Email: email.value,
        Tel: tel.value,
        Subject: subject.value,
        Message: message.value
    } 

    fetch("https://formsubmit.co/ajax/briannjosh23@gmail.com", {
   method: "POST",
   headers: { 
       'Content-Type': 'application/json',
       'Accept': 'application/json'
   },
   body: JSON.stringify(contactData)
})
    .then(res => {
        const response = res.json();
        console.log(response);
    })
   .then(action => {
       email.value = ''
       fname.value = ''
       lname.value = ''
       tel.value = ''
       subject.value = ''
       message.value = ''
       send.value = 'Sent!!!'
       send.style.color = 'green'
       send.style.backgroundColor = 'black'
       send.type = 'button'
       console.log(send);
   })

})

//////contactform////////

/////////////////////////////////////
const Subform = document.querySelectorAll('.sub-form');
Subform.forEach(form =>{
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const formObject = new FormData(form);
        console.log(formObject);
    })
})
/////////////////////////////////////