# Hiring Portal

Welcome to the Hiring Portal project! This web application is built using ReactJS, Firebase, CSS, and other technologies to provide a platform for job seekers and employers.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
   - [Home Page](#home-page)
   - [Authentication](#authentication)
   - [Response Page](#response-page)
   - [Create Jobs](#create-jobs)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

The Hiring Portal is a web application designed to facilitate job posting and job seeking. The application is built on the ReactJS framework and uses Firebase for authentication and data storage.

## Features

- **Home Page (Not Logged In):** Introduction to the platform for visitors.
- **Authentication Page (Not Logged In):** Allows users to log in or sign up.
- **Home Page (Logged In):** Personalized experience with access to job listings.
- **Response Page (Logged In):** Displays responses received on job postings.
- **Create Jobs (Logged In):** Enables users to create a job posting.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project set up with authentication and Firestore database

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/hiring-portal.git
   cd hiring-portal
   ```
2. Install dependencies.
   ```bash
   npm install
   ```

## Usage

### Home Page

The home page provides an introduction to the platform. For logged-in users, it displays personalized job listings.

### Authentication

The authentication page allows users to log in or sign up. Firebase authentication is used for secure access.

### Response Page

Logged-in users can view responses received on their job postings. The page displays relevant details about each response.

### Create Jobs

The create jobs page enables users to create a job posting. Only one job posting is allowed per user.

## Contributing

We welcome contributions from the community! If you would like to contribute to the project, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
