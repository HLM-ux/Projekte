// { }

document.getElementById('b1').addEventListener('click', function() {
    if (!document.getElementById('instructions')) { 
    const deleter = document.getElementById('contentforb1')
    deleter.remove()
    const instructions = document.getElementById('instforb1')
    const instructionsremover = document.getElementById('instremover')
    const stepbystep = document.createElement('h3')
    const stepremover = document.createElement('button')
    stepremover.id = 'sbr3'
    stepremover.textContent = 'Click here to remove the tutorial too'
    stepbystep.id = 'instructions'
    stepbystep.textContent = 'document.getElementById(<i>id of your selected button</i>).addEventListener(<i>declare which event use click as it is default</i>, function() {<br> const deleter = document.getElementById(<i>select the id of your choosen element</i>)<br> deleter.remove()'
    instructionsremover.appendChild(stepremover)
    instructions.appendChild(stepbystep) 

document.getElementById('sbr3').addEventListener('click', function() { 
    stepbystep.remove()
    const buttonremover = document.getElementById('sbr3')
    buttonremover.remove()
})
} })

document.getElementById('b2').addEventListener('click', function() { 
    if (!document.getElementById('appendedp')) { 
    const thediv2 = document.getElementById('contentforb2')
    const appended = document.createElement('p')
    appended.id = 'appendedp'
    appended.textContent = 'There, now the text is generated instead of deleted making this button the opposite.'
    appended.style = 'font-size: 2rem; font-style: bold;'
    thediv2.appendChild(appended)
}
})

/* document.getElementById('b1').addEventListener('click', function() {
    const deleter = document.getElementById('contentforb1')
    deleter.remove()
}) */

