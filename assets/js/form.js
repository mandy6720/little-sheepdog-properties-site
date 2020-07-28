
function submitForm(first, last, email, parcelSize, propertyZip) {
  const phone = document.getElementById("phone").value;
  const propertyCity = document.getElementById("property-city").value;
  const propertyState = document.getElementById("property-state").value;
  const propertyType = document.getElementById("property-type").value;
  let mortage, taxesPaid;
  document.getElementsByName("hasMortgage").forEach(el => el.checked ? mortage = el.value : null)
  document.getElementsByName("taxesPaid").forEach(el => el.checked ? taxesPaid = el.value : null)

  $.post(
    "https://damp-stream-29490.herokuapp.com/form-info",
    { first, last, email, phone, propertyCity, propertyState, propertyZip, parcelSize, propertyType, mortage, taxesPaid },
    function (data) {
      console.log("success!",
      { first, last, email, phone, propertyCity, propertyState, propertyZip, parcelSize, propertyType, mortage, taxesPaid })
    }
  );
}

function validateForm() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const parcelSize = document.getElementById("parcel-size").value;
  const propertyZip = document.getElementById("property-zip").value;

  if (first && last && email && parcelSize && propertyZip) {
    submitForm(first, last, email, parcelSize, propertyZip);
  } else {
    alert("Please fill out all required fields before submitting")
  }
}
