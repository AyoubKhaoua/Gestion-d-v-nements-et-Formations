changeForm();
//

//creer un evinment
//initial the content the form
let contentForm = `    <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >title</label
          >
          <div class="mt-1">
            <input type="text"  id="title" name="title"  class="w-full h-10 border-2 rounded-xl" />
          </div>
        </div>
        <div class="mt-3">
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >date</label
          >
          <div>
            <input type="date" id="date" name="date" class="w-full h-10 border-2 rounded-xl" />
          </div>
        </div>
        <div class="mt-3">
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >location</label
          >
          <div>
            <input type="text"  name="location" id="location" class="w-full h-10 border-2 rounded-xl" />
          </div>
        </div>
        <div class="mt-3">
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >type</label
          >
          <div>
            <select
              name="type"
              id="select-type"
              class="w-full h-10 border-2 rounded-xl"
              required
              onclick=changeForm()
            >
              <option value=""></option>
              <option value="autre">autre</option>
              <option value="club">club</option>
              <option value="atelier">atelier</option>
              <option value="conférence">conférence</option>
            </select>
          </div>
        </div>
       <div>
          <label for="" class="block font-medium text-gray-700"
            >description</label
          >
          <div>
            <textarea
              name="description"
              placeholder="description"
              cols="30"
              rows="6"
              class="w-full border-2 rounded-xl"
            ></textarea>
          </div>
        </div>
        </div>`;

//1-navige into formulaire for create event
const navigateToForm = function (url) {
  window.location.href = url;
};

//2-if chnage the type change the content of formulaire
//2-1-1select the formulire and the inpute select

function changeForm() {
  let selectInput = document.getElementById("select-type");
  let form = document.getElementById("form");
  selectInput.addEventListener("change", (e) => {
    let titleValue = document.getElementById("title")?.value || "";
    let dateValue = document.getElementById("date")?.value || "";
    let locationValue = document.getElementById("location")?.value || "";
    let valueSelect = selectInput.value;

    if (e.target.value == "conférence") {
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >speaker</label
          >
          <div class="mt-1">
            <input type="text" id="speaker" class="w-full h-10 border-2 rounded-xl" name="speaker" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >duration</label
          >
          <div class="mt-1">
            <input type="number" id="duration" class="w-full h-10 border-2 rounded-xl" name="duration" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >registrationLink</label
          >
          <div class="mt-1">
            <input type="text" id="registrationLink" class="w-full h-10 border-2 rounded-xl " name="registrationLink" placeholder='entre registrationLink'/>
          </div>
        </div>
         <div class="w-full">
          <button
            class="text-xl w-full h-12 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition "
            
          >
            Submit
          </button>
        </div>

        `;
    } else if (e.target.value == "atelier") {
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >materials</label
          >
          <div class="mt-1">
            <input type="text" id="materials" class="w-full h-10 border-2 rounded-xl" name="materials" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >skillLevel</label
          >
          <div class="mt-1">
            <input type="text" id="skillLevel" class="w-full h-10 border-2 rounded-xl" name="skillLevel" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >maxParticipants</label
          >
          <div class="mt-1">
            <input type="number" id="maxParticipants" class="w-full h-10 border-2 rounded-xl " name="maxParticipants" />
          </div> <div class="w-full">
          <button
            class="text-xl w-full h-12 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
         
          >
            Submit
          </button>
        </div>
        

        `;
    } else if (e.target.value == "club") {
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >frequency</label
          >
          <div class="mt-1">
            <input type="text" id="frequency" class="w-full h-10 border-2 rounded-xl" name="frequency" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >contact</label
          >
          <div class="mt-1">
            <input type="email" id="contact" class="w-full h-10 border-2 rounded-xl" name="contact" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >membershipFee</label
          >
          <div class="mt-1">
            <input type="number" id="membershipFee" class="w-full h-10 border-2 rounded-xl " name="membershipFee" placeholder='membershipFee'/>
          </div>
        </div>
         <div class="w-full">
          <button
            class="text-xl w-full h-12 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
           
          >
            Submit
          </button>
        </div>

        `;
    } else {
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >customFieldLabel</label
          >
          <div class="mt-1">
            <input type="text" id="customFieldLabel" name="customFieldLabel" class="w-full h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >customFieldValue</label
          >
          <div class="mt-1">
            <input type="text" id="customFieldValue" name="customFieldValue" class="w-full h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div class="w-full">
          <button
            class="text-xl w-full h-12 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
           
          >
            Submit
          </button>
        </div>
        

        `;
    }
    document.getElementById("location").value = locationValue;
    document.getElementById("date").value = dateValue;
    document.getElementById("title").value = titleValue;
    document.getElementById("select-type").value = valueSelect;
  });
}

//for add evenment
//declare id

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  let events = JSON.parse(localStorage.getItem("events"));
  e.preventDefault();

  let formD = new FormData(form);
  let objetData = Object.fromEntries(formD.entries());
  let id = events.length > 0 ? events[events.length - 1].id + 1 : 1;
  objetData.id = id;

  addLocal(objetData);
  console.log(objetData);
  console.log(id);
  form.reset();
  navigateToForm("Admin.html");
});

//function ADD Event into local storsge
function addLocal(newData) {
  var oldItems = JSON.parse(localStorage.getItem("events")) || [];

  oldItems.push(newData);

  localStorage.setItem("events", JSON.stringify(oldItems));
}
