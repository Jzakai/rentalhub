document.getElementById("propertyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const title = document.getElementById("propertyTitle").value.trim();
    const type = document.getElementById("propertyType").value;
    const location = document.getElementById("location").value.trim();
    const price = document.getElementById("price").value.trim();
    const area = document.getElementById("area").value.trim();
    const rooms = document.getElementById("rooms").value.trim();
    const bathrooms = document.getElementById("bathrooms").value.trim();
    const description = document.getElementById("description").value.trim();
    const propertyImage = document.getElementById("propertyImage").value.trim();

  // Simple validation
  if (!fullName || !email || !phone || !title || !type || !location || !price || !area || !rooms || !bathrooms || !description) {
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
  fetch("/add-property", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, phone, title, type,location, price, area, rooms, bathrooms, description, propertyImage}),
  })
    .then(function (response) {
      if (response.ok) {
        alert("Data inserted successfully!");

        // Clear form
        document.getElementById("propertyForm").reset();

        
      } else {
        alert("Failed to insert data!");
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    });
});


