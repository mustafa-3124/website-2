let cartCount = 0;

function addToCart() {
  cartCount++;
  alert("Item added to cart! 🛍️");
}



let menuIcon = document.getElementById('menu-icon');
let navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Optional: change icon between ☰ and ✕
  menuIcon.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});


// Contact form simulation
let form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    form.reset();
  });
}

// Payment form behavior with loader animation
const paymentForm = document.getElementById("payment-form");
const loading = document.getElementById("loading");
const successMessage = document.getElementById("success-message");

if (paymentForm) {
  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById("name").value.trim();
    const card = document.getElementById("card").value.trim();

    if (name === "" || card.length < 16) {
      alert("Please enter valid payment details.");
      return;
    }

    // Hide form, show loader
    paymentForm.style.display = "none";
    loading.style.display = "block";

    // Simulate payment processing delay
    setTimeout(() => {
      loading.style.display = "none";
      successMessage.style.display = "block";
    }, 2500);
  });
}

const toggleBtn = document.getElementById('theme-toggle');

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "Dark Mode";
    }
});

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("error").textContent = "Please enter both fields.";
        return;
    }

    // Save user info in localStorage
    localStorage.setItem("loggedInUser", user);

    // Redirect to dashboard
    location.href = "home.html";
}
