import { ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYhMBLauYhj5TkEC7Zpg8kTXQOUC-49TE",
    authDomain: "ironmantracker-80abc.firebaseapp.com",
    databaseURL: "https://ironmantracker-80abc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ironmantracker-80abc",
    storageBucket: "ironmantracker-80abc.firebasestorage.app",
    messagingSenderId: "664742131957",
    appId: "1:664742131957:web:1f9044573289d5c4fe6dbc",
    measurementId: "G-XJNL6DK558"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  window.submitKiller = function submitKiller() {
    const selectedValue = document.getElementById("dropdown1").value;
    const urlRef = ref(db, 'killer/url');
    set (urlRef, selectedValue)
    .then(() => {
        console.log("Dropdown value set at killer/url:", selectedValue);
    })
    .catch((error) => {
        console.error("Error writing to database:", error);
      });
  }

  window.submitsurvivor = function submitsurvivor() {
    const selectedValue = document.getElementById("dropdown2").value;
    const urlRef = ref(db, 'survivor/url');
    set (urlRef, selectedValue)
    .then(() => {
        console.log("Dropdown value set at survivor/url:", selectedValue);
    })
    .catch((error) => {
        console.error("Error writing to database:", error);
      });
  }
