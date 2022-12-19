// todo
// store high score

if(localStorage.getItem('high_score')==null)
{
    localStorage.setItem('high_score',0)
}

// generates a random number
let tries=0
let randomNumber=Math.floor(Math.random()*100)+1
console.log(randomNumber)

function displayHighScore()
{
    let text=document.createTextNode('High Score : '+localStorage.getItem('high_score'))
    let hsTextElem=document.getElementById('highScoreText')
    if(hsTextElem.firstChild == null)
    {
        hsTextElem.appendChild(text)
    }
    else
    {
        hsTextElem.replaceChild(text,hsTextElem.firstChild)
    }
}

displayHighScore()

function indicate(e)
{
    if(e.key == 'Enter')
    {
        tries++

        let guessVal=document.getElementById('guess').value
        let diff=Math.abs(guessVal-randomNumber)
        console.log('hey you entered'+guessVal)

        if(diff==0)
        {
            document.getElementById('guess').style.animation='bubbleBlow 1.2s'
            document.getElementById('guess').style.boxShadow='0 0 50px white'
            document.body.style.backgroundColor='white'
            if(tries < localStorage.getItem('high_score'))
            {
                localStorage.setItem('high_score',tries)
            }
            displayHighScore()
        }
        else
        {
            document.body.style.backgroundColor='hsl('+Math.ceil(diff*2.5)+',100%,50%)'
            // formula is final color = diff*2.5
            // hue ranges from 0 to 250
        }
        
    }
}



document.getElementById('guess').addEventListener("keypress",indicate)