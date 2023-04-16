

import axios from "axios";

const NavHere = () => {
    fetch('../inc/navbar.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#NavHere').innerHTML = html;
      })
      .catch(error => console.log(error));
  }
  
  const LoadTable = () => {
    fetch('../inc/tabel.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#LoadTable').innerHTML = html;
      })
      .catch(error => console.log(error));
  }
  

const FetchData = () => {

    axios.get('http://127.0.0.1:8000/api/PaulUsers')

    .then(function(response) {
      // Get user data from API response
      const users = response.data.users;

      // Select table body
      const tableBody = document.querySelector('#users-table tbody');

      // Loop through users data and add rows to the table
      users.forEach(function(user) {
        // Create new row
        const row = tableBody.insertRow(-1);

        // Add user data to row
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.role}</td>
          <td>${user.phone}</td>
          <td>${user.Nationality}</td>
          <td>${user.Institution}</td>
          <td>${user.ApplicationLetter}</td>
          <td>${user.ParentInstitution}</td>
          <td>${user.WorkPhoneNumber}</td>
          <td>${user.PersonalPhoneNumber}</td>
          <td>${user.PermanentAddress}</td>
          <td>${user.HighestLevelOfEducation}</td>
          <td>${user.UserID}</td>
          <td>${user.Profession}</td>
          <td>${user.email}</td>
          <td>${user.email_verified_at}</td>
          <td>${user.password}</td>
          <td>${user.remember_token}</td>
          <td>${user.created_at}</td>
          <td>${user.updated_at}</td>
        `;
      });
    })
    .catch(function(error) {
      console.log(error);
    });


}

window.addEventListener('DOMContentLoaded', (event) => {
    
    NavHere();
    LoadTable();

    FetchData();



});