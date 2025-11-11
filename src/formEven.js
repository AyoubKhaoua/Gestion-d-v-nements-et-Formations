let listEvents = [];
fetch("events.json")
  .then((res) => res.json())
  .then((data) => {
    listEvents = data;
    changeForm();
  });

//creer un evinment
//initial the content the form
let contentForm = `    <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >title</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
        <div class="mt-3">
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >date</label
          >
          <div>
            <input type="date" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
        <div class="mt-3">
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >location</label
          >
          <div>
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
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
              class="w-90 ml-6.5 h-10 border-2 rounded-xl"
            >
              <option value=""></option>
              <option value="autre">autre</option>
              <option value="club">club</option>
              <option value="atelier">atelier</option>
              <option value="conférence">conférence</option>
            </select>
          </div>
        </div>
        <div class="mt-3">
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >description</label
          >
          <div>
            <textarea
              placeholder="description"
              cols="30"
              rows="6"
              class="w-90 ml-6.5 border-2 rounded-xl"
            ></textarea>
          </div>
        </div>`;

//1-navige into formulaire for create event
const navigateToForm = function (url) {
  window.location.href = url;
};

//2-if chnage the type change the content of formulaire
//2-1-1select the formulire and the inpute select
let selectInput = document.getElementById("select-type");
let form = document.getElementById("form");
changeForm = () => {
  selectInput.addEventListener("change", (e) => {
    if (e.target.value == "conférence") {
      form.innerHTML = "";
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >speaker</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >duration</label
          >
          <div class="mt-1">
            <input type="number" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >registrationLink</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl " placeholder='entre registrationLink'/>
          </div>
        </div>

        `;
    } else if (e.target.value == "atelier") {
      form.innerHTML = "";
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >materials</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >skillLevel</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >maxParticipants</label
          >
          <div class="mt-1">
            <input type="number" class="w-90 ml-6.5 h-10 border-2 rounded-xl " />
          </div>
        </div>

        `;
    } else if (e.target.value == "club") {
      form.innerHTML = "";
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >frequency</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >contact</label
          >
          <div class="mt-1">
            <input type="email" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >membershipFee</label
          >
          <div class="mt-1">
            <input type="number" class="w-90 ml-6.5 h-10 border-2 rounded-xl " placeholder='membershipFee'/>
          </div>
        </div>

        `;
    } else {
      form.innerHTML = "";
      form.innerHTML =
        contentForm +
        `
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >customFieldLabel</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
         <div>
          <label for="" class="block font-medium text-gray-700 ml-6.5"
            >customFieldValue</label
          >
          <div class="mt-1">
            <input type="text" class="w-90 ml-6.5 h-10 border-2 rounded-xl" />
          </div>
        </div>
        

        `;
    }
  });
};
//console.log(selectInput);
//changeForm();
