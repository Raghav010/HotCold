// todo
// store high score


// generates a random number
let tries=0
let randomNumber=Math.floor(Math.random()*100)+1
console.log(randomNumber)

function displayHighScore()
{
    let hstext=document.createTextNode('High Score : '+localStorage.getItem('high_score'))
    let hsTextElem=document.getElementById('highScoreText')
    if(hsTextElem.firstChild == null)
    {
        hsTextElem.appendChild(hstext)
    }
    else
    {
        hsTextElem.replaceChild(hstext,hsTextElem.firstChild)
    }

}

function displayCurScore()
{
    let cstext=document.createTextNode('Current Score : '+tries)
    let csElem=document.getElementById('currentScoreText')
    if(csElem.firstChild==null)
    {
        csElem.appendChild(cstext)
    }
    else
    {
        csElem.replaceChild(cstext,csElem.firstChild)
    }
    
}

if(localStorage.getItem('high_score') != null)
{
    displayHighScore()
}
displayCurScore()

function indicate(e)
{
    if(e.key == 'Enter')
    {
        
        let guessVal=document.getElementById('guess').value
        if(guessVal==null || guessVal==0 || guessVal<1 || guessVal>100) // handling not number values
        {
            return
        }

        tries++
        displayCurScore()

        let diff=Math.abs(guessVal-randomNumber)
        console.log('hey you entered'+guessVal,diff)

        if(diff==0)
        {
            document.getElementById('guess').style.animation='bubbleBlow 1.2s'
            document.getElementById('guess').style.boxShadow='0 0 50px white'
            document.body.style.backgroundColor='white'
            if(localStorage.getItem('high_score')==null || tries < localStorage.getItem('high_score'))
            {
                localStorage.setItem('high_score',tries)
            }
            displayHighScore()
            document.getElementById('guess').disabled=true
           
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