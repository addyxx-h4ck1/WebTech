const form = document.getElementById('newsLetter');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let email = document.getElementById('subscribe')
    let service = document.getElementById('subscribeNews')
    let subscribebtn = document.getElementById('subscribebtn')

    const formData = {
        email: email.value,
        service: service.value
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
        subscribebtn.value = 'Subscribed'
        subscribebtn.style.color = 'green'
        subscribebtn.type = 'button'
    })
    
})

//portfolioform//
const portfolioForm = document.getElementById('portfolioForm');
portfolioForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let portfolioEmail = document.getElementById('porfolioEmail')
    let portfolioService = document.getElementById('portfolioService')
    let portfoliobtn = document.querySelector('.portfoliobtn')
    let portfolioh3 = document.querySelector('.portfolioh3')
    const formData = {
        Email: portfolioEmail.value,
        Service: portfolioService.value
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
        portfolioEmail.value = ''
        portfoliobtn.style.display = 'none'
        portfolioh3.style.display = 'block'
    })
})
//portfolioform//
//webdevform//

const webdevForm = document.getElementById('webdevForm');
webdevForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let webEmail = document.getElementById('webdevEmail')
    let webService = document.getElementById('webdevService')
    let webbtn = document.querySelector('.webdevbtn')
    let webh3 = document.querySelector('.webdevh3')
    const formData = {
        Email: webEmail.value,
        Service: webService.value
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
        webEmail.value = ''
        webbtn.style.display = 'none'
        webh3.style.display = 'block'
    })
})
//portfolioform//


//webdevform//

const adjustmentForm = document.getElementById('adForm')
 adjustmentForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let adEmail = document.getElementById('adEmail')
    let adService = document.getElementById('adService')
    let adbtn = document.querySelector('.adbtn')
    let adh3 = document.querySelector('.adh3')
    const formData = {
        Email: adEmail.value,
        Service: adService.value
    }
    console.log(formData);

    fetch("https://formsubmit.co/ajax/briannjosh23@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then(action => {
        adEmail.value = ''
        adbtn.style.display = 'none'
        adh3.style.display = 'block'
    })
})
//portfolioform//