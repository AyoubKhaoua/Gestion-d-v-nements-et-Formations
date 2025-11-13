//console.log("Stored events:", events[0]);
showEvents();

/* let tbody = document.getElementById("tbody");
window.addEventListener("load", () => { */
function showEvents() {
  let events = JSON.parse(localStorage.getItem("events"));
  tbody.innerHTML = "";
  events.forEach((event) => {
    tbody.innerHTML += ` <tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${event.title}"
            </th>
            <td class="px-6 py-4">${event.date}</td>
            <td class="px-6 py-4">${event.location}</td>
            <td class="px-6 py-4">${event.type}</td>
            <td class="px-6 py-4 flex justify-between">
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onclick="forUpdate('${event.id}')"
              >
                Update
              </button>
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onclick="delet('${event.id}')"
              >
                Delet
              </button>
            </td>
          </tr>`;
  });
}

function navigateToForm(url) {
  window.location.href = url;
}

const forUpdate = (ev) => {
  let events = JSON.parse(localStorage.getItem("events"));
  let index = events.findIndex((e) => e.id == ev);
  console.log(events[index]);
  form.innerHTML = `
        <div
      class="formulaire w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-10 bg-blue-300 rounded-2xl border p-5"
    >
      <form action="" id="form" class="w-full space-y-3">
       <input type="hidden" name="productId" value="${events[index].id}">
        <div>
          <label for="" class="block font-medium text-gray-700">title</label>
          <div class="mt-1">
            <input
              value="${events[index].title}"
              name="title"
              type="text"
              id="title"
              class="w-full h-10 border-2 rounded-xl"
            />
          </div>
        </div>

        <div>
          <label for="" class="block font-medium text-gray-700">date</label>
          <div>
            <input
              value="${events[index].date}"
              name="date"
              type="date"
              id="date"
              class="w-full h-10 border-2 rounded-xl"
            />
          </div>
        </div>

        <div>
          <label for="" class="block font-medium text-gray-700">location</label>
          <div>
            <input
              
              name="location"
              type="text"
              id="location"
              class="w-full h-10 border-2 rounded-xl"
              value="${events[index].location}"
            />
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
            > ${events[index].description}</textarea>
          </div>
        </div>
        <div class="w-full">
          <button
            id="btn-create"
            class="text-xl w-full h-12 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    
     `;
  const updateForm = document.getElementById("form");

  updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    events[index].title = updateForm.title.value;
    events[index].date = updateForm.date.value;
    events[index].location = updateForm.location.value;
    events[index].description = updateForm.description.value;

    localStorage.setItem("events", JSON.stringify(events));
  });
};

/* const update = (id) => {
  let events = JSON.parse(localStorage.getItem("events"));
  let updateEvent = events.find((ev) => ev.id == id);
  forUpdate(updateEvent);
  console.log(updateEvent);
}; */

const delet = (id) => {
  let events = JSON.parse(localStorage.getItem("events"));
  events = events.filter((even) => even.id != id);
  localStorage.setItem("events", JSON.stringify(events));
  showEvents();
};
