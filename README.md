BingeBot - Frontend

BingeBot is a modern, sleek web application for movie streaming. It offers a clean, dark interface with bold, intuitive buttons and horizontal scrolling sections for displaying personalized content. This repository contains the frontend of the application, built using HTML, CSS, JavaScript, and React.

Table of Contents

  Project Overview
  Features
  Technologies
  Setup Instructions
  Project Structure
  Future Enhancements
  Contributing
  License
  Project Overview

BingeBot delivers a personalized streaming experience, leveraging sleek UI design elements. The application presents an engaging user interface with a dark background, minimalistic forms, horizontal content sliders, and a curved bottom section with a royal blue accent.

This repository contains only the frontend implementation.

Features

User Login and Registration: Intuitive, minimalistic login and registration forms with modern UI elements.
Dark Mode: The entire UI is built on a dark theme, making the experience immersive.
Horizontal Scrolling: Horizontal content sliders for personalized recommendations and recently watched movies.
Responsive Design: Mobile-first approach with responsiveness for various screen sizes.

Technologies

This project uses the following technologies:

React.js: JavaScript library for building dynamic user interfaces.
CSS3: Styling with modern design elements such as animations, hover effects, and transitions.
GitHub Pages: Optional deployment method for the frontend.

Setup Instructions

To get the frontend up and running locally, follow these steps:

  Prerequisites
    Node.js
    npm (Node Package Manager)
    Git  Installation
      
    Clone the repository:
      Copy code: git clone https://github.com/yourusername/bingebot-frontend.git

    Navigate to the project directory:
      Copy code: cd bingebot-frontend

    Install dependencies:
      Copy code: npm install

    Run the application:
      Copy code: npm start

The app will run in development mode. Open http://localhost:3000 to view it in your browser.

Project Structure

java
Copy code
bingebot-frontend/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Registration.js
│   │   ├── Profile.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
├── package.json
└── README.md

Key Files:
Login.js & Registration.js: Components for user authentication.
Profile.js: Displays user recommendations and recently watched movies.
App.css: Contains all styling, including Netflix and HBO Max-inspired elements.

Future Enhancements:

  Backend Integration: Connect to a backend service to fetch real-time data.
  Personalized Recommendations: Implement machine learning to provide tailored movie recommendations.
  User Preferences: Add options for users to customize themes or preferences.
  
License

This project is licensed under the MIT License - see the LICENSE file for details.
