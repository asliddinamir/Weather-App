const Base_Url = 'https://api.openweathermap.org/data/2.5/weather?q='
const Api_Key = '9eace37467b19852c1760098c905c0dc'
const inputValue = document.getElementById('inputValue')
const btn = document.getElementById('btn')
const h1 = document.querySelector('h1')
const temp = document.getElementById('temp')
const wType = document.getElementById('wType')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const icon = document.querySelector('.img')



inputValue.addEventListener('keypress', func)
btn.addEventListener('click', basefunc)


function func(e) {
    if (e.keyCode == 13) {
        basefunc()
    }
}

function basefunc() {

    h1.innerText = inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1)
    let city = inputValue.value
    fetch(`${Base_Url}${city}&appid=${Api_Key}&units=metric`)
        .then(a => a.json())
        .then(b => {
            console.log(b);
            if (b.name) {
                wType.innerText = b.weather[0].main
                temp.innerText = Math.floor(b.main.temp) + "°C"
                h2.innerText = ', ' + b.sys.country
                h3.innerText = ''
                h3.style.backgroundColor = ''
                icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${b.weather[0].icon}@2x.png'>`
            } else {
                h2.innerText = ''
                wType.innerText = ''
                temp.innerText = ''
                icon.innerHTML = ''
                h3.innerText = ' City Not Found '
                h3.style.backgroundColor = 'red'
                // setTimeout(func2, 2000)
                // function func2(){
                //     h3.innerText = ''
                //     h3.style.backgroundColor = ''
                // }
            }
        })
    inputValue.value = ''
}






