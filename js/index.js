var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("sitUrlInput");
var nameMessage = document.getElementById("nameMessage");
var urlMessage = document.getElementById("urlMessage");

var bookList = [];
function addBookMark() {
  var bookMark = {
    name: siteNameInput.value,
    url: sitUrlInput.value,
  };

  bookList.push(bookMark);
  displayData();
  clearData();
}
function clearData() {
  siteNameInput.value = "";
  sitUrlInput.value = "";
}

function displayData() {
  var cartona = "";
  for (var i = 0; i < bookList.length; i++) {
    cartona += `
    <tr>
      <td>
      ${i}
      </td>
      <td>
      ${bookList[i].name}
      </td>
      <td>
      <button onclick="getUrlAndOpenTab()" id="visitBtn"  class=" btn  btn-warning text-center sm"><i class="fa-solid fa-eye px-1"></i>Visit</button>
      </td>
      <td>
      <button onclick="deleteData(${i})" class="btn btn-danger text-center sm "><i class="fa-solid fa-trash-can px-1"></i>Delete</button>
      </td>
      
    </tr>`;
  }
  document.getElementById("tbody").innerHTML = cartona;
}
function deleteData(index) {
  bookList.splice(index, 1);
  displayData();
}

function getUrlAndOpenTab() {
  var url1 = siteUrlInput.value;
  window.open(url1, "_blank");
}

function validationName() {
  var regex = /^[A-Z][a-z]{3,8}$/;
  var txt = siteNameInput.value;
  var check = regex.test(txt);

  if (check) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    nameMessage.classList.add("d-non");
    return true;
  } else {
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
    nameMessage.classList.remove("d-non");
    return false;
  }
}

function validationUrl() {
  var txt = siteNameInput.value;
  var regex =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
  var check = regex.test(txt);
  if (check) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    urlMessage.classList.add("d-non");
    return true;
  } else {
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
    urlMessage.classList.add("d-non");
    return false;
  }
}
