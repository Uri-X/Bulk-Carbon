# BulkCarbon �

BulkCarbon is a carbon offset platform designed to streamline the carbon neutrality journey for individuals and organizations. It provides a clean, responsive web interface for calculating emissions, purchasing verified carbon credits, downloading emissions reports, and exploring carbon projects.

## � Problem Statement

As global emissions continue to rise, there is a lack of accessible, user-friendly platforms that allow users—especially in developing regions—to estimate their emissions and take immediate action through carbon offsetting. Many platforms are either too complex or not transparent enough, making it difficult for small businesses, schools, and even individuals to contribute meaningfully to sustainability efforts.

## � Proposed Solution

BulkCarbon bridges this gap by offering a simplified, educational, and functional carbon tracking and offsetting solution. It is built with responsiveness and ease-of-use in mind. The system includes:

- An emissions calculator (electricity and car travel)
- A carbon credit marketplace
- A report download center
- A project explorer
- Visual progress tracking
- Backend support using mock APIs or localStorage

---

---

## � System Architecture

### �� Actors

- **User**: Individual or organization accessing the system to calculate emissions, purchase credits, or download reports.
- **System Admin (future role)**: Would manage verified projects, reports, and user data.

### � Processes

- **Emission Estimation**: Calculates monthly CO₂ emissions using user input.
- **Credit Purchase**: Simulates purchasing verified credits from the marketplace.
- **Report Download**: Provides downloadable reports based on past activity.
- **Project Display**: Shows ongoing carbon offset initiatives.
- **State Management**: Uses local storage to retain credits purchased.

---

## � Features

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| � Emissions Calculator | Input electricity usage and car travel to calculate monthly emissions       |
| � Marketplace           | Browse and purchase verified carbon credits                                 |
| � Reports              | View and download pre-generated emission reports                            |
| � Projects             | View existing offset projects and their details                             |
| � Dashboard           | Overview of progress and credits owned                                       |

---

## ✅ Functional Requirements

- Users can estimate emissions from electricity and car usage.
- Users can simulate buying carbon credits.
- Users can view current owned credits.
- Users can download carbon reports.
- Users can explore carbon projects.

## � Non-Functional Requirements

- The platform is fully responsive and mobile-friendly.
- Easy navigation using tab-based switching.
- Visual clarity using TailwindCSS and Lucide icons.
- LocalStorage used for data persistence in lieu of a full backend.

---

## �️ Tech Stack

- **HTML** – Page structure
- **Tailwind CSS** – Styling
- **JavaScript (Vanilla)** – Client-side logic
- **Lucide Icons** – UI icons
- **(Optional)**: Node.js + Express API for backend extensions

---

## � Folder Structure



---

## � How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/bulkcarbon.git
   cd bulkcarbon


2.Open index.html in your browser.


� Future Enhancements
Add user authentication and profile tracking.

Dynamic project and report management via backend.

Integration with blockchain or crypto for tokenized carbon credits.

API for real-time CO₂ data tracking.

� Acknowledgements
This project was developed as part of a summative software engineering assignment. All calculations and examples are for demonstration purposes only.
