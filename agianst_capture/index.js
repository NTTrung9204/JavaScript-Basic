const listForbidenKeyCode = [16, 83, 91, 44]

document.addEventListener('keyup', function(event) {
    if(listForbidenKeyCode.includes(event.keyCode)) {
        document.body.style.display = 'none'
        setTimeout(() => {
            alert('You are not allowed to use this key')
        }, 1000)
        setTimeout(() => {
            document.body.style.display = 'block'
        }, 10000)
    }
});
