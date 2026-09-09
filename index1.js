const thecanvacircle = document.getElementById('fic')
const thecc = thecanva.getContext('2d')

//my circle

thecc.arc(280, 20, 50, 0, Math.PI * 2, false)
thecc.fillStyle = 'blue'
thecc.fill()

const thecanva = document.getElementById('fi')
const thec = thecanva.getContext('2d')

//north border

thec.fillStyle = 'red'
thec.fillRect(0, 0, 3000, 20)

const thecanval = document.getElementById('fil')
const thecl = document.getElementById('2d')

//rectangle

thecl.fillStyle = 'blue'
thecl.fillRect(10, 7, 40, 6)

//the text

thec.fillStyle = 'black'
thec.font = '10px arial'
thec.fillText('welcome', 10, 10)

//west border

thec.fillStyle = 'red'
thec.fillRect(280, 10, 20, 400)








document.getElementById('button').addEventListener('click', function() { 
    if (!document.getElementById('fst')) { 
    const dadiv = document.getElementById('dadiv')
    const dap = document.createElement('p')
    dap.textContent = 'aight'
    dap.id = 'fst'
    dadiv.appendChild(dap)
    }
})

document.getElementById('button1').addEventListener('click', function() {
    const oh = document.getElementById('on')
    if (oh) { 
        re
    }
})
