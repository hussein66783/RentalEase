function searchApartments() {
    let query = document.getElementById("searchBox").value;
    alert("Searching for: " + query);
}

// Function to handle user login
function loginUser(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Check if user exists (For now, just a mock validation)
    if (email === "test@rentalease.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password.");
    }
}

// Function to handle user registration
function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    // Store user data (In real case, send data to the backend)
    alert(`Welcome, ${name}! Your account has been created.`);
    window.location.href = "login.html"; // Redirect to login page
}

// Function to load user data
function loadUserData() {
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("userEmail");
    
    if (!username || !email) {
        alert("Please log in first.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").innerText = username;
    document.getElementById("userEmail").innerText = email;
}

// Function to handle user login (Modify this in `login.html`)
function loginUser(event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "test@rentalease.com" && password === "password123") {
        localStorage.setItem("username", "John Doe");
        localStorage.setItem("userEmail", email);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password.");
    }
}

// Function to logout user
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// Check if user is logged in before listing a property
function checkUserLogin() {
    let username = localStorage.getItem("username");
    if (!username) {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
}

// Handle property form submission (Now anyone can list)
document.getElementById("propertyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let title = document.getElementById("propertyTitle").value;
    let description = document.getElementById("propertyDescription").value;
    let price = document.getElementById("propertyPrice").value;
    let location = document.getElementById("propertyLocation").value;
    let image = document.getElementById("propertyImage").files[0];

    if (title && description && price && location && image) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let propertyData = {
                title: title,
                description: description,
                price: price,
                location: location,
                image: e.target.result
            };

            // Store property data in localStorage (temporary)
            let properties = JSON.parse(localStorage.getItem("properties")) || [];
            properties.push(propertyData);
            localStorage.setItem("properties", JSON.stringify(properties));

            alert("Property listed successfully!");
            window.location.href = "index.html"; // Redirect to home page after submission
        };
        reader.readAsDataURL(image);
    } else {
        alert("Please fill all fields.");
    }
});

// Predefined property listings
let sampleProperties = [
    {
        title: "Luxury Apartment in New York",
        description: "A stunning 2-bedroom apartment with skyline views.",
        price: 3200,
        location: "New York, NY",
        image: "images/property1.jpg"
    },
    {
        title: "Modern Condo in Los Angeles",
        description: "Spacious 3-bedroom condo near downtown.",
        price: 4500,
        location: "Los Angeles, CA",
        image: "images/property2.jpg"
    },
    {
        title: "Cozy Studio in San Francisco",
        description: "A perfect studio for young professionals.",
        price: 2800,
        location: "San Francisco, CA",
        image: "images/property3.jpg"
    },
    {
        title: "Family Home in Chicago",
        description: "A beautiful 4-bedroom home with a backyard.",
        price: 3700,
        location: "Chicago, IL",
        image: "images/property4.jpg"
    },
    {
        title: "Seaside Villa in Miami",
        description: "A luxurious villa with beach access.",
        price: 5500,
        location: "Miami, FL",
        image: "images/property5.jpg"
    },
    {
        title: "Penthouse in Seattle",
        description: "Top-floor penthouse with breathtaking city views.",
        price: 6000,
        location: "Seattle, WA",
        image: "images/property6.jpg"
    },
    {
        title: "Rustic Cabin in Denver",
        description: "A peaceful retreat in the mountains.",
        price: 2200,
        location: "Denver, CO",
        image: "images/property7.jpg"
    },
    {
        title: "Downtown Apartment in Austin",
        description: "A modern apartment near nightlife and restaurants.",
        price: 3100,
        location: "Austin, TX",
        image: "images/property8.jpg"
    },
    {
        title: "Suburban House in Atlanta",
        description: "A cozy home with a large front yard.",
        price: 2900,
        location: "Atlanta, GA",
        image: "images/property9.jpg"
    },
    {
        title: "Luxury Loft in Boston",
        description: "An elegant loft with high ceilings and modern decor.",
        price: 4800,
        location: "Boston, MA",
        image: "images/property10.jpg"
    }
];

// Store sample properties in localStorage (only if not already added)
if (!localStorage.getItem("properties")) {
    localStorage.setItem("properties", JSON.stringify(sampleProperties));
}

// Function to display properties
function displayProperties() {
    let properties = JSON.parse(localStorage.getItem("properties")) || [];
    let container = document.getElementById("propertyContainer");
    
    container.innerHTML = ""; // Clear previous content

    if (properties.length === 0) {
        container.innerHTML = "<p>No properties available yet.</p>";
        return;
    }

    properties.forEach(property => {
        let propertyCard = `
            <div class="property-card">
                <img src="${property.image}" alt="Property Image">
                <h3>${property.title}</h3>
                <p><strong>Price:</strong> $${property.price}</p>
                <p><strong>Location:</strong> ${property.location}</p>
                <p>${property.description}</p>
            </div>
        `;
        container.innerHTML += propertyCard;
    });
}
<script>

    
function showMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const map = L.map('map').setView([lat, lon], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([lat, lon]).addTo(map)
                .bindPopup('You are here!')
                .openPopup();
        }, function(error) {
            alert('Unable to retrieve location: ' + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
</script>
