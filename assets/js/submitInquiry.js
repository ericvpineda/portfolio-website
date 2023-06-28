const inquiryForm = document.querySelector("#inquiry-form");

inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inquiry = e.target.elements;

  fetch("https://formsubmit.co/ajax/ericvpineda@berkeley.edu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: inquiry.name.value,
      email: inquiry.email.value,
      message: inquiry.message.value,
    }),
  }).then(() => {})
});
