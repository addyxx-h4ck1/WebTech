
//webdevform//
const buy = document.getElementById('form');
 buy.addEventListener('submit', (e) =>{
    e.preventDefault();

    let email = document.getElementById('buyEmail')
    let service = document.getElementById('buy')
    let btn = document.querySelector('.buybtn')
    let h3 = document.querySelector('.buyh3')
    
    const formData = {
        Email: email.value,
        Service: service.value
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
        email.value = ''
        btn.style.display = 'none'
        h3.style.display = 'block'
    })
})
//portfolioform//