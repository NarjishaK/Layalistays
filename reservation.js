function sendMails() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
      checkin_date: document.getElementById("checkin_date").value,
      checkout_date: document.getElementById("checkout_date").value,
    };
  
    console.log(params); // Debugging: Ensure this logs the correct values
  
    const serviceID = "service_8mewh9b";
    const templateID = "template_5gqiwt5";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("checkin_date").value = "";
        document.getElementById("checkout_date").value = "";
  
        console.log(res); // Log the response to ensure success
        Swal.fire({
          title: 'Success!',
          text: 'Your reservation has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      })
      .catch((err) => {
        console.log(err); // Log errors for debugging
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }
  