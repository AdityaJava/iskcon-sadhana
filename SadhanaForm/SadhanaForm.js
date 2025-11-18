function initSadhanaForm() {
  console.log("initSadhanaForm");
  const sadhanaForm = document.getElementById("sadhana-form");
  sadhanaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("sadhana form submitted");
  });
}

window.initSadhanaForm = initSadhanaForm;
