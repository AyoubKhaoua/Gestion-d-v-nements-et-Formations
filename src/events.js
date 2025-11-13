fetch("events.json")
  .then((res) => res.json())
  .then((data) => {
    showEvents(data);
    filterEvent(data);
    findEvent(data);
    changeForm();
  });

//select the elements
let partEvents = document.querySelector(".events");
//select the btns
let listBtn = document.querySelector(".list-btns");
let autre = document.querySelector(".autre");
let club = document.querySelector(".club");
let atelier = document.querySelector(".atelier");
let conference = document.querySelector(".conference");
//select the btn search
let btnSearch = document.getElementById("search");

//fc=>showEvents

showEvents = (data) => {
  partEvents.innerHTML = "";
  data.forEach((element) => {
    partEvents.innerHTML += `
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative ml-5 mr-5 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-black">
    <button class="border-2 rounded-2xl w-30 absolute top-1 right-1.5 hover:bg-blue-400 hover:text-amber-50 mb-10">
          ${element.type}
        </button>
   
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-5">${element.title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.description}.</p>
    
<p class="flex items-center gap-2 text-gray-700">
  <span>📅</span> ${element.date}
</p>

<p class="flex items-center gap-2 text-gray-700">
  <span>📍</span> ${element.location}
</p>
<p class="flex items-center gap-2"><span>🗣️</span> ${element.speaker}</p>
  <p class="flex items-center gap-2">
    <span>🔗</span>
    <a href="#" class="text-blue-600 hover:underline">${element.speaker}</a>
  </p>


    
    <div>
    `;
  });
};
//fc=>filterEvent
filterEvent = (data) => {
  listBtn.addEventListener("click", (e) => {
    const btnclicked = e.target.value;
    const dataFilter = data.filter((event) => event.type == btnclicked);

    showEvents(dataFilter);
  });
};
//fc=>recherche
findEvent = (data) => {
  btnSearch.addEventListener("input", (e) => {
    let find = e.target.value.toLowerCase();
    let arravEvent = [];
    data.forEach((ev) => {
      if (ev.title.toLowerCase().includes(find)) {
        arravEvent.push(ev);
      }
    });
    showEvents(arravEvent);
  });
};
//creer un evinment
//1-navige into formulaire for create event
const navigateToForm = function (url) {
  window.location.href = url;
};
//2-if chnage the type change the content of formulaire
//2-1-1select the formulire and the inpute select
let selectInput = document.getElementById("select-type");
let form = document.getElementById("form");
changeForm = (data) => {
  selectInput.addEventListener("change", () => {
    console.log(data);
  });
};
//console.log(selectInput);
//changeForm();
