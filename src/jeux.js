const words =[ [...'javascript'] , [...'php']];
const element = document.querySelector('.word');
const jeux = document.querySelector('.jeux');
const choix = Math.floor(Math.random() * words.length);
const num = words[choix].length;
const div = document.querySelector('.alphabet');

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(num)
for (let i = 0 ; i < num ; i++){
    let div = document.createElement('div');
    div.id=i;
    div.style.borderBottom = '1px solid black';
    div.style.width = '10px';
    div.innerHTML = "  ";
    element.append(div);
}

alphabet.forEach(alph =>{
    let button = document.createElement('button');
    button.textContent = alph;
    button.addEventListener('click', ()=>{
       let index = words[choix].findIndex(check)
       console.log(index);
        if(index != -1){
            const al = document.querySelector(`#${index}`)
            al.textContent = 'gg';
        }
        function check(value){

            return value === button.textContent;
        }
        
    })
    div.append(button);
    
})

