const words = [[...'javascript'], [...'php']];
const element = document.querySelector('.hint');
const jeux = document.querySelector('.jeux');
let score = 0;
const showScore = document.querySelector('.score');
const nomberEasy = document.querySelector('.nomberEasy');
const showNomber = document.createElement('p');
let options;
let divP = document.querySelector('.word');
const div = document.querySelector('.alphabet');
showScore.textContent = score;
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

async function getRequest() {
    const res = await fetch("https://mocki.io/v1/f64d2ff5-72de-47ea-a59d-c8e8bfae08ef");
    const data = res.json();
    return data;
}
async function getData() {
    let count = 5;

    options = await getRequest()
    console.log(options);
    const choix = Math.floor(Math.random() * words.length);
    let word = options[choix].word;

    console.log(word);

    let hint = document.createElement('p');
    hint.textContent = options[choix].hint;
    hint.style.border= "1px solid #5a76e6";
    hint.style.padding = "5px";
    element.append(hint)

    for (let i = 0; i < word.length; i++) {
        let div = document.createElement('div');
        div.id = i;
        div.style.borderBottom = '1px solid black';
        div.style.width = '10px';
        div.innerHTML = "  ";
        divP.append(div);
    }
    let fixWord = [...word];
    const remove = div.querySelectorAll('button');
    remove.forEach(item => {
        item.remove();
    })
    alphabet.forEach(alph => {
        showNomber.textContent = count;
        nomberEasy.append(showNomber);

        let button = document.createElement('button');
        button.textContent = alph;
        button.style.backgroundColor = "#5a76e6";
        button.style.borderRadius = "5px"
        button.style.alignItems = "center"
        button.style.width='2rem';
        button.style.height='3rem';
        let check = [];
        button.addEventListener('click', () => {


            if (count !=0) {
                let indexs = [];
                fixWord.forEach((item, index) => {
                    if (item === button.textContent) {
                        indexs.push(index);
                    }
                })

                if (indexs.length == 0) {
                    count--;
                    console.log(count);
                    button.style.backgroundColor = "red";
                    button.disabled = true;

                } else {
                    button.style.backgroundColor = "green";
                }

                indexs.forEach(item => {
                    const al = document.getElementById(item);
                    al.textContent = button.textContent;
                    al.style.border = "none";
                    divP.querySelectorAll('div').forEach(item => {
                        check.push(item.textContent);
                    }
                    )
                        ;
                })
                let res = check.join('');
                if (res === word) {
                    score+=10;
                    showScore.textContent = score;
                    const removeHint = element.querySelector('p');
                    console.log(removeHint);
                    divP.querySelectorAll('div').forEach(item => {
                        item.remove();
                    })
                    removeHint.remove();
                    getData();
                }
            } else {
                const removeHint = element.querySelector('p');
                console.log(removeHint);
                divP.querySelectorAll('div').forEach(item => {
                    item.remove();
                })
                removeHint.remove();
                getData();
            } showNomber.textContent = count;
        })


        div.append(button);

    })
}

getData();







