const jokeEL = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');
jokebtn.addEventListener('click', generateJoke);

generateJoke();

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEL.innerHTML = data.joke;

    document.body.style.backgroundColor = generateRandomColor();
}





// generateJoke()
//      const config = {
//         headers:{
//             'Accept' : 'application/json'
//         },
//     }
    
//     fetch('https://icanhazdadjoke.com' ,config)
//     .then((res) =>res.json())
//     .then((data ) => {
//         jokeEL.innerHTML = data.joke
//     })
// }
