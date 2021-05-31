var rangeval = document.getElementById('choose_amount');
var update = document.getElementById('fromrange')
var change = document.getElementById('yearormonth')
var toggle = document.getElementById('toggle')
toggle.addEventListener('click', function () {
    if (toggle.checked) {
        change.innerHTML = '/year'
        rangeval.setAttribute('max','120')
        rangeval.value = 0
    }
    else{
        change.innerHTML = '/month'
        rangeval.setAttribute('max','10')
        rangeval.value = 0
    }
})

rangeval.addEventListener('mousedown',function () {
    var amount, putval
    rangeval.addEventListener('mousemove', function () {
        amount = Number(rangeval.value);
        putval = amount.toFixed(2)
        update.innerHTML = putval        
    })
    
})
rangeval.addEventListener('touchstart',function () {
    var amount, putval
    rangeval.addEventListener('touchmove', function () {
        amount = Number(rangeval.value);
        putval = amount.toFixed(2)
        update.innerHTML = putval        
    })
    
})
