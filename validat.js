
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
//portfolioform//