# RentalEase - Apartment Rental Website

RentalEase is a dynamic and user-friendly apartment rental website designed to simplify the property rental process in Poland. It allows users to browse available apartments across various Polish cities with detailed descriptions, images, and pricing. Landlords can list their properties through a submission form, and the admin can manage these listings via a database interface like phpMyAdmin.

---

## 🌐 Features

- **Home Page:** Includes a featured listings section with image previews and pricing. Listings link to detailed property pages.
- **Available Listings Page:** Displays all available properties with images, locations, prices, and brief descriptions.
- **Individual Property Pages:** Each property has a dedicated page showing full details including images, pricing, location, and description.
- **List a Property:** A form where landlords can add new listings. Submitted properties are stored in a MySQL database.
- **Interactive Map Integration:** Users can view their current location using geolocation and Leaflet.js map.
- **Responsive Design:** The website is responsive and works well on desktops, tablets, and mobile devices.
- **Admin Control:** Admin can delete property listings directly from phpMyAdmin.

---

## ⚙️ Technologies Used

| Technology      | Purpose                                                        |
|------------------|----------------------------------------------------------------|
| HTML5, CSS3       | Structure and styling of all web pages                         |
| JavaScript        | Interactive map feature using Geolocation API + Leaflet.js     |
| Leaflet.js        | Displaying a dynamic map and user location                     |
| PHP               | Handling form submission and database interaction              |
| MySQL             | Storing and managing property listings                         |
| XAMPP (Apache)    | Local development server and MySQL database                    |
| phpMyAdmin        | Admin interface to manage property records                     |

---

## 📁 Website Structure


---

## 📊 Database

- **Database Name:** `rentalease_db`
- **Table:** `properties`
- **Fields:**
  - id (Primary Key)
  - title
  - price
  - location
  - description
  - image (filename)

- **Stored Data:**
  - User-submitted listings through `list-property.html` form
  - Admin can manage this data (delete or update) via phpMyAdmin

---

## ✅ Functional Highlights

- Form to add a new property
- Listings displayed dynamically
- Each listing links to its own detailed page
- Basic geolocation with map view
- Admin can manage database through phpMyAdmin
- Responsive layout with CSS media queries

---

## 🛠️ Installation Guide

1. Download or clone this project.
2. Install [XAMPP](https://www.apachefriends.org/index.html) and run Apache and MySQL.
3. Place the project folder in the `htdocs` directory (e.g., `C:\xampp\htdocs\RentalEase`).
4. Launch phpMyAdmin at `http://localhost/phpmyadmin`.
5. Create a new database named `rentalease_db`.
6. Import the `rental_db.sql` file provided in the project.
7. Visit `http://localhost/RentalEase/index.html` in your browser.

---

## ✨ Project Summary

RentalEase helps users easily find rental apartments with detailed information and images. Landlords can list properties via a form, and listings are stored in a MySQL database. The site is fully responsive and includes a map showing the user's location. Admins can manage property data directly via phpMyAdmin.

