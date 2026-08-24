export interface ProjectScreenshot {
  src: string
  title: string
  description: string
}

export const projectCoverImages: Record<string, string> = {
  cinemaverse:
    'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/user%20home.png',
  dvld:
    'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/main-screen.png',
  'blood-bank':
    'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/Dashboard.png',
  'how-to-train-your-ai':
    'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Game%20hero.png',
  uniconnect:
    'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/home.png',
}

export const projectScreenshots: Record<string, ProjectScreenshot[]> = {
  cinemaverse: [
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/Admin%20User.png',
      title: 'Admin Users',
      description: 'Administrative user management screen for reviewing and managing platform accounts.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/Admin%20View%20user.png',
      title: 'User Details',
      description: 'Detailed admin view showing an individual user profile and account information.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/Admin%20branch.png',
      title: 'Branch Management',
      description: 'Admin interface for managing cinema branches and their operational information.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/Dashboard.png',
      title: 'Admin Dashboard',
      description: 'Operations dashboard with the main cinema management metrics and shortcuts.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/User%20movie%20booking.png',
      title: 'Movie Booking',
      description: 'Customer booking flow for selecting and reserving a cinema show.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20edit%20hall.png',
      title: 'Hall Editor',
      description: 'Administrative screen for editing cinema hall configuration and details.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20movies.png',
      title: 'Movie Management',
      description: 'Admin movie catalog used to manage the titles available across the platform.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20showtimes.png',
      title: 'Showtime Management',
      description: 'Scheduling interface for reviewing and managing cinema showtimes.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20tickets.png',
      title: 'Ticket Management',
      description: 'Administrative view for tracking issued tickets and booking records.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20view%20branch.png',
      title: 'Branch Details',
      description: 'Detailed view of a cinema branch and its configured information.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20view%20movies.png',
      title: 'Movie Details — Admin',
      description: 'Administrative movie details view with the information needed to manage a title.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admin%20view%20ticket.png',
      title: 'Ticket Details',
      description: 'Detailed ticket view used by administrators to inspect a booking record.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/admn%20bookings.png',
      title: 'Bookings',
      description: 'Admin booking list for reviewing reservations across cinema shows.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/user%20home.png',
      title: 'Customer Home',
      description: 'Public cinema landing experience highlighting movies and available content.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/user%20movie%20details.png',
      title: 'Movie Details',
      description: 'Customer-facing movie page with the information needed before booking.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/user%20movies.png',
      title: 'Movie Catalog',
      description: 'Browse experience for discovering the movies currently available to customers.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/user%20payment.png',
      title: 'Payment',
      description: 'Checkout step used to complete a cinema reservation and payment.',
    },
  ],
  dvld: [
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/license-application1.png',
      title: 'License Application',
      description: 'Application workflow for creating and processing a driving-license request.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/license-application2.png',
      title: 'Application Details',
      description: 'Detailed view of a license application and its current processing information.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/login-screen.png',
      title: 'Login',
      description: 'Secure staff login used to access the driving-license management system.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/main-screen.png',
      title: 'Main Control Panel',
      description: 'Primary desktop workspace for license services, applications, tests, and administration.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/people-management.png',
      title: 'People Management',
      description: 'Management screen for searching, reviewing, and maintaining person records.',
    },
  ],
  'blood-bank': [
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/BloodUnitCard.png',
      title: 'Blood Unit Details',
      description: 'Detailed blood-unit card showing the information needed to track stored inventory.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/Dashboard.png',
      title: 'Inventory Dashboard',
      description: 'Main blood-bank dashboard for monitoring inventory and operational activity.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/Donate.png',
      title: 'Donation Entry',
      description: 'Donation workflow for recording a donor visit and starting a new blood donation.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/Donate2.png',
      title: 'Donation Details',
      description: 'Follow-up donation screen containing the information captured during the donation process.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/FindAMatch.png',
      title: 'Find a Match',
      description: 'Compatibility workflow for finding suitable blood units for a patient request.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/Login.png',
      title: 'Staff Login',
      description: 'Authentication screen for employees accessing the blood-bank management system.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/ManageDonors.png',
      title: 'Donor Management',
      description: 'Donor directory for reviewing records, eligibility information, and donation history.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/MatchFound.png',
      title: 'Compatible Match',
      description: 'Result state showing a compatible blood match found by the system.',
    },
  ],
  'how-to-train-your-ai': [
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Dialogue%201.png',
      title: 'Story Dialogue I',
      description: 'Narrative dialogue moment used to move the story and player objectives forward.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Dialogue%202.png',
      title: 'Story Dialogue II',
      description: 'A second dialogue scene from the game narrative and character interaction flow.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Game%20hero.png',
      title: 'Game Hero',
      description: 'Primary promotional gameplay image representing the visual direction of the project.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Grandfather%20message.png',
      title: 'Grandfather Message',
      description: 'Narrative message that introduces an important part of the game story.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/House%20Gate.png',
      title: 'House Gate',
      description: 'Exterior environment at the entrance to the inherited house.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/House.png',
      title: 'The House',
      description: 'The inherited house that serves as a central location in the narrative.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Main%20Menue.png',
      title: 'Main Menu',
      description: 'Entry screen for starting and navigating the game experience.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Robot%20before%20miniagme%201.png',
      title: 'Robot Before Training',
      description: 'The robot immediately before the first calibration mini-game begins.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Screenshot%202026-07-05%20175229.png',
      title: 'Gameplay Capture I',
      description: 'Additional in-game capture included in the project documentation.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Screenshot%202026-07-05%20180008.png',
      title: 'Gameplay Capture II',
      description: 'Additional in-game capture included in the project documentation.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Screenshot%202026-07-05%20180101.png',
      title: 'Gameplay Capture III',
      description: 'Additional in-game capture included in the project documentation.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%201%20result%20.png',
      title: 'Calibration Result',
      description: 'Result screen showing the outcome of the first robot calibration mini-game.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%201.1.png',
      title: 'Control Calibration — Detail',
      description: 'Detailed view from the first training challenge focused on robot control calibration.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%201.png',
      title: 'Control Calibration',
      description: 'First training mini-game where the player calibrates the robot movement systems.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%202.1.png',
      title: 'Path Efficiency — Detail',
      description: 'Detailed view of the second training challenge and its constrained navigation mechanics.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%202.png',
      title: 'Path Efficiency Trial',
      description: 'Second mini-game focused on collecting the target while managing path and energy efficiency.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%203%20result%20.png',
      title: 'Signature Match Result',
      description: 'Completion state for the third robot-training puzzle.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%203.1.png',
      title: 'Signature Match — Detail',
      description: 'Detailed puzzle view from the third training mini-game.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/minigame%203.png',
      title: 'Training Signature Match',
      description: 'Third mini-game built around spatial logic, device placement, and matching rules.',
    },
  ],
  uniconnect: [
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/admin.png',
      title: 'Admin Dashboard',
      description: 'Administrative interface for reviewing and managing the student matching platform.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/edit-profile.png',
      title: 'Edit Profile',
      description: 'Profile editor where students maintain their information, track, and skill set.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/home.png',
      title: 'Home',
      description: 'Landing experience introducing the graduation-team discovery platform.',
    },
    {
      src: 'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/students.png',
      title: 'Student Directory',
      description: 'Searchable student directory for discovering potential teammates by profile and skills.',
    },
  ],
}

export function getProjectCoverImage(projectId: string) {
  return projectCoverImages[projectId]
}

export function getProjectScreenshots(projectId: string) {
  return projectScreenshots[projectId] ?? []
}
