
function submitForm() {
  $.post(
    "https://damp-stream-29490.herokuapp.com/send-email",
    { first, last, email, marketValue },
    function (data) { console.log("success!", { first, last, email, marketValue }) }
  )
  document.getElementById('contact-form').submit();
}

function validateForm() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const marketValue = document.getElementById("market-value").value;
  if (first && last && email && marketValue) {
    submitForm();
  } else {
    alert("Please fill out all required fields before submitting")
  }
}
