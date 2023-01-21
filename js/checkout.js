const personalInfoForm = document.getElementById("personal-info-form");
const productInfoForm = document.getElementById("product-info-form");
const continueToPaymentBtn = document.getElementById("continue-to-payment-btn");

personalInfoForm.addEventListener("input", () => {
  if (personalInfoForm.checkValidity() && productInfoForm.checkValidity()) {
    continueToPaymentBtn.disabled = false;
  } else {
    continueToPaymentBtn.disabled = true;
  }
});

productInfoForm.addEventListener("input", () => {
  if (personalInfoForm.checkValidity() && productInfoForm.checkValidity()) {
    continueToPaymentBtn.disabled = false;
  } else {
    continueToPaymentBtn.disabled = true;
  }
});

continueToPaymentBtn.addEventListener("click", () => {
  //submit the forms and navigate to the payment page

  // Example of how to submit the form data to a server-side script using fetch API
  const personalInfo = new FormData(personalInfoForm);
  const productInfo = new FormData(productInfoForm);

  fetch("/checkout", {
    method: "POST",
    body: new FormData(personalInfoForm).append(new FormData(productInfoForm)),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        window.location.href = "/payment";
      } else {
        alert("An error occurred. Please try again later.");
      }
    });
});
