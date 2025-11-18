function initSadhanaForm() {
  console.log("initSadhanaForm");
  const sadhanaForm = document.getElementById("sadhana-form");
  sadhanaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = {
      date: document.getElementById("sadhana-form-date").value,
      toBed: document.getElementById("sadhana-form-to-bed-time").value,
      wakeUp: document.getElementById("sadhana-form-wake-up-time").value,
      rounds: document.getElementById("sadhana-form-chanted-rounds").value,
    };
    console.log(data);
  });
}

window.initSadhanaForm = initSadhanaForm;
