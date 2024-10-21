//The user will enter a date. 
//Use that date to get the NASA picture of the day from that date! 
//https://api.nasa.gov/
import { apiKey } from "./apiKeys.js";
document.querySelector('button').addEventListener('click', makeAPhoto)

function makeAPhoto() {
    let date = document.querySelector('input').value
    console.log(date)

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON 
        .then(data => {
            console.log(data)
            console.log(data.title)
            console.log(data.explanation)
            console.log(data.url)
            document.querySelector('h2').innerText = data.title
            document.querySelector('p').innerText = data.explanation

            if (data.media_type === 'image'){
                document.querySelector('img').classList.remove('hidden')
                document.querySelector('img').src = data.url
                document.querySelector('iframe').classList.add('hidden')
                
            } else {
                document.querySelector('iframe').classList.remove('hidden')
                document.querySelector('img').classList.add('hidden')
                document.querySelector('iframe').src = data.url
                

            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}