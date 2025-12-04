# Amazoon.ca — Device Location Mapping Application

Amazoon.ca is a fictional delivery-style web application created for an assignment integrating the **Geolocation API** and **Mapbox GL JS**.  
The purpose of this project is to demonstrate the ability to retrieve a user’s device location, display it on an interactive map, and present the location in a professional, company-branded interface.

---

## 🚚 Project Overview
Amazoon.ca simulates a modern delivery platform similar to Amazon, DoorDash, or Uber Eats.  
The homepage automatically detects the user’s current location and updates:

- The **“Deliver to”** section in the header  
- The **Mapbox map**, centered on the user  
- A **marker** placed at the exact coordinates  

This creates a realistic experience of location-aware web applications.

---

## 🗺️ Features

### ✔ **Geolocation API Integration**
- Retrieves the user’s real-time latitude and longitude  
- Uses a success callback and error callback  
- Runs with `enableHighAccuracy` enabled  

### ✔ **Mapbox GL JS Integration**
- Custom Mapbox style (`navigation-night-v1`)
- Dynamically centers the map on the user's coordinates
- Adds a custom marker at the location
- Optional UI controls disabled for a cleaner experience

### ✔ **Dynamic UI Update**
- Header "Deliver to" section updates based on geolocation
- Map resizes fluidly inside a responsive layout

### ✔ **Professional Branding**
- Custom header inspired by modern ecommerce platforms  
- Cohesive color palette, layout, and typography  
- Fictional company name: **Amazoon.ca**

---

## 📂 Project Structure

