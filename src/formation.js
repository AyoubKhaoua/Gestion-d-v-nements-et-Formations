const cardsContainer=document.getElementById("cards-container");

const creatCardHtmlFormation = (formation) => {
    return `
        <div
            class=" bg-white  rounded-2xl p-6 flex flex-col justify-between w-80 hover:shadow-2xl transition-shadow duration-300">
            <div>
                <h3 class="text-2xl font-bold  text-[#1C1D7F] mb-4">${formation.theme}</h3>
            </div>
            <div class="flex justify-evenly  text-gray-600 text-sm mb-6">
                <div><i class="fa-solid fa-calendar-days"></i>${formation.duration} Semaines</div>
                <div><i class="fa-solid fa-user"></i>${formation.trainer}</div>
            </div>
            <div class="progress-container">
                <div class="progress-header">
                    <span>Participants: ${formation.participants.length} / ${formation.capacity}</span>
                    <span>${((formation.participants.length/formation.capacity)*100).toFixed(0)}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
            </div>
            <button
                class="bg-[#140BFF] text-white py-2 rounded-xl font-medium hover:bg-blue-300 transition duration-300">
                S'inscrire
            </button>
        </div>
    `;
}

async function louadFormation(){
    const reponse= await fetch("./formations.json");
    const data = await reponse.json();
    // data.forEach(formation => {
    //     cardsContainer.innerHTML+= creatCardHtmlFormation (formation);
    // });

    cardsContainer.innerHTML = data.map((f) => creatCardHtmlFormation(f)).join("") 
}

louadFormation();