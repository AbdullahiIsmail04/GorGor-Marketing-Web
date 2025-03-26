document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting and refreshing the page

    // Get input values
    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let message = document.getElementById("message").value.trim();

    // validate input values
    if (firstName === "" || lastName === "" || email === "" || number === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Success alert
    alert("Form submitted successfully! We Will Contact you.");
    
    // Reset form after submission
    document.getElementById("contactForm").reset();
});
const client = document.getElementById("client");
client.textContent = "Our Customers"