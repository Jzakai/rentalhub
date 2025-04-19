document.getElementById("contact-us").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values
  let Fname = document.getElementById("Fname").value.trim();
  let Lname = document.getElementById("Lname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let gender = document.getElementById("gender").value;
  let DOB = document.getElementById("DOB").value;
  let lan = document.getElementById("lan").value;
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Simple validation
  if (!Fname || !Lname || !email || !phone || !gender || !DOB || !lan || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!/^[0-9]{8,15}$/.test(phone)) {
    alert("Please enter a valid phone number (numbers only, 8–15 digits).");
    return;
  }

  // If all valid, send to server
  fetch("/insert", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Fname, Lname, email, phone, gender, DOB, lan, subject, message }),
  })
    .then(function (response) {
      if (response.ok) {
        alert("Data inserted successfully!");

        // Clear form
        document.getElementById("contact-us").reset();

        
      } else {
        alert("Failed to insert data!");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    });
});

  
 