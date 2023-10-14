
//webdevform//
const buyForm = document.getElementById('form');

 buyForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let buyEmail = document.getElementById('buyEmail')
    let buyService = document.getElementById('buy')
    let buybtn = document.querySelector('.buybtn')
    let buyh3 = document.querySelector('.buyh3')
    const formData = {
        Email: buyEmail.value,
        Service: buyService.value
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
        buyEmail.value = ''
        buybtn.style.display = 'none'
        buyh3.style.display = 'block'
    })
})
//portfolioform//