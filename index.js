/*  { }  */

document.getElementById('b1').addEventListener('click', function() { 
    const theDiv = document.getElementById('d1')
    const theElement = document.createElement('p')
    theElement.textContent = 'Generated'
    theDiv.appendChild(theElement)
})

document.getElementById('b2').addEventListener('click', function() { 
    if (!document.getElementById('placed')) { 
        const theDiv2 = document.getElementById('d2')
        const theElement2 = document.createElement('p')
        theElement2.id = 'placed'
        theElement2.textContent = 'Generated'
        theDiv2.appendChild(theElement2)
    }
})

document.getElementById('b3').addEventListener('click', function() { 
    const theDiv3 = document.getElementById('d3')
    const theRemover = document.getElementById('clicktoremove')
    if (theRemover) { 
        theRemover.remove()
    } else { 
    const theElement3 = document.createElement('p')
    theElement3.textContent = 'Generated'
    theElement3.id = 'clicktoremove'
    theDiv3.appendChild(theElement3)
  }
})