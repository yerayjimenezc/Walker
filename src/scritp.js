let topImage = 0
let leftImage = 0
let zero = 0
let inputKey = document.getElementById('body')
let move = document.getElementById('play')


inputKey.onkeydown = function (e){    
    if (e.key === 'w'){
        topImage--
    } else if (e.key === 's'){
        topImage++
    } else if (e.key === 'd'){
        leftImage++
    } else if (e.key === 'a'){
        leftImage--
    }
    move.style.setProperty("background-position", `${leftImage}px ${topImage}px`)
    console.log(`${leftImage}px ${topImage}px`)
}

