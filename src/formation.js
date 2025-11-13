// nav bar 
const navbar = document.querySelector('nav');
const buttons = document.querySelector('.btn-login');
const icon = document.querySelector('.icon');
const versionMobile = document.querySelector('.version-mobile');

icon.addEventListener('click', () => {
    const isActive = versionMobile.classList.toggle('hidden');
    if (isActive) {
        icon.innerHTML = '<i class="fa-solid fa-bars text-3xl"></i>';
    } else {
        icon.innerHTML = '<i class="fa-solid fa-x text-3xl"></i>';

    }
})

let formationsList=[];

const cardsContainer = document.getElementById("cards-container");
const modal_continaire = document.getElementById('modal_continaire');

const renderFormations=()=>{
    cardsContainer.innerHTML = formationsList.map((f, index) => creatCardHtmlFormation(f, index)).join("")

     const btns = document.querySelectorAll('.inscrire-btn');
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                modal_continaire.classList.add('afficheFormulaire');
                modal_continaire.setAttribute('data-formation-id', btn.dataset.formationId)
        });
    });
}
const saveFormationsData =()=>{
    localStorage.setItem("list", JSON.stringify(formationsList))
}

const louadFormation = async () => {
    const savedData = localStorage.getItem("list")
    if(savedData) {
        formationsList = JSON.parse(savedData)
    } else {
        const reponse = await fetch("./formations.json");
        formationsList = await reponse.json();
        saveFormationsData();
    }
    


    renderFormations();
}


const creatCardHtmlFormation = (formation) => {
    return `
        <div
            class=" bg-white  rounded-2xl p-4 flex flex-col justify-between w-70 hover:shadow-2xl transition-shadow duration-300 box-content dark:bg-black dark:text-amber-50  dark:border-b dark:border-b-gray-400  dark:border-t dark:border-t-gray-400">
            <div>
                <h3 class="text-2xl font-bold  text-[#1C1D7F]  dark:text-amber-50 mb-4">${formation.theme}</h3>
            </div>
            <div class="flex justify-evenly  text-gray-600 text-sm mb-6">
                <div><i class="fa-solid fa-calendar-days"></i>${formation.duration} Semaines</div>
                <div><i class="fa-solid fa-user"></i>${formation.trainer}</div>
            </div>
            <div class="progress-container">
                <div class="progress-header">
                    <span>Participants: ${formation.participants.length} / ${formation.capacity}</span>
                    <span>${((formation.participants.length / formation.capacity) * 100).toFixed(0)}%</span>
                </div>
               
                <div class="progress-bar">
                    <div 
                        class="progress-fill" 
                        style="width: ${(formation.participants.length / formation.capacity * 100).toFixed(0)}%;">
                    </div>
                </div>
                
            </div>
            <button
                data-formation-id="${formation.id}"
                id="modal_${formation.id}"
                ${formation.participants.length === formation.capacity ? "disabled": ""}

                class="inscrire-btn bg-[#140BFF] text-white py-2 rounded-xl font-medium hover:bg-blue-300 transition duration-300">
                S'inscrire
            </button>
            
        </div>
    `;
}



const modalActions = async () => {
    const Envoyer = document.getElementById('btn-envoyer');

    Envoyer.addEventListener('click', () => {
        const  inputName=document.getElementById("inputName");
        const  inputDate=document.getElementById("inputDate");
        const  inputAdresse=document.getElementById("inputAdresse");
        const  inputVille=document.getElementById("inputVille");
        const  inputPhone=document.getElementById("inputPhone");
        const  inputEmail=document.getElementById("inputEmail");

        const formationId = modal_continaire.dataset.formationId;
        const formation = formationsList.find((f) => f.id === formationId)
        if(formation) {
            formation.participants.push("user")
            saveFormationsData();
            renderFormations();
        }
        // 

        // clear inputs
        inputName.value=""
        inputDate.value=""
        inputAdresse.value=""
        inputVille.value=""
        inputPhone.value=""
        inputEmail.value=""

       

        modal_continaire.classList.remove('afficheFormulaire');
         modal_continaire.removeAttribute('data-formation-id')
    });



}


const initMyApp = async () => {
    await louadFormation();
    await modalActions();
}


initMyApp();


