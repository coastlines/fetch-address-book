'use strict';
let contacts;
let userId;
let btn;

window.onload = function() {
  getUsers();
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then(response => { return response.json();})
    .then(json => {showPeople(json.results)});
}

const showPeople = (people) =>{
  console.log(people);
  let output = '<h2>Address Book</h2>';
  output += '<section class="userList">'
  people.forEach((contact, idx) =>{
    userId = idx;
    output +=
    `<div class="card" id="card${userId}">
      <div class="thumbnail">
        ${contact.login.username}<br>
        <img src="${contact.picture.large}">
      </div>
      <div class="moreInfo" id="info${userId}" style="display: none">
        <strong>${contact.name.first} ${contact.name.last}<br></strong>
        Age: ${contact.dob.age}<br>
        Birthday: ${contact.dob.date}<br>
        Email: ${contact.email}<br>
        Phone: ${contact.phone}<br>
        Address: ${contact.location.street.number} ${contact.location.street.name}<br>
        ${contact.location.city}, ${contact.location.state} ${contact.location.postcode}<br>
      </div>
      <div class="btn">
        <button onclick="toggleBtn(${userId})">Say hi to ${contact.name.first}</button>
      </div>
    </div>`;
  })
  output += '</section>';
  document.getElementById("main").innerHTML = output;
  evenOrOdd();
  toggleBtn();
  } 

const toggleBtn = (userId) => {
  userId = 'info'+userId
  let moreInfo = document.getElementById(userId);
    if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
    } else {
      moreInfo.style.display = "none";
    }
  }

const evenOrOdd = () => {
    let card = document.querySelectorAll('.card');
    console.log(card);
    card.forEach(function(item, index) {
      if (index%2 == 0) {
        card[index].className += " even";
        console.log("even index");
      } else {
        card[index].className += " odd";
        console.log("odd index");
      }
    })
   
}





 
  