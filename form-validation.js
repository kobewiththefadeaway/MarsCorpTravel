// Get the form element
const form = document.getElementById("booking-form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form field elements
  const destinationField = document.getElementById("destination");
  const departureDateField = document.getElementById("departure-date");
  const returnDateField = document.getElementById("return-date");
  const numTravelersField = document.getElementById("num-travelers");
  const ageField = document.getElementById("age");
  const experienceField = document.querySelector('input[name="experience"]:checked');
  const activityFields = document.querySelectorAll('input[name="activity"]:checked');

  // Validate the form fields
  let isValid = true;

  if (destinationField.value === "") {
    isValid = false;
    destinationField.classList.add("error");
  } else {
    destinationField.classList.remove("error");
  }

  if (departureDateField.value === "") {
    isValid = false;
    departureDateField.classList.add("error");
  } else {
    departureDateField.classList.remove("error");
  }

  if (returnDateField.value === "") {
    isValid = false;
    returnDateField.classList.add("error");
  } else {
    returnDateField.classList.remove("error");
  }

  if (numTravelersField.value === "") {
    isValid = false;
    numTravelersField.classList.add("error");
  } else {
    numTravelersField.classList.remove("error");
  }

  if (ageField.value === "") {
    isValid = false;
    ageField.classList.add("error");
  } else {
    ageField.classList.remove("error");
  }

  if (!experienceField) {
    isValid = false;
  }

  if (activityFields.length === 0) {
    isValid = false;
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
});
