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

export const projectScreenshotImages: Record<string, string[]> = {
  cinemaverse: [
    'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/user%20movies.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/User%20movie%20booking.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/CinemaVerse/main/docs/Images/Dashboard.png',
  ],
  dvld: [
    'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/main-screen.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/license-application1.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/Driving-Vehicles-and-Licenses-Department-System/master/Screenshots/people-management.png',
  ],
  'blood-bank': [
    'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/Dashboard.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/ManageDonors.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/BBMS-Project/main/screenshots/FindAMatch.png',
  ],
  'how-to-train-your-ai': [
    'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Game%20hero.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/Dialogue%201.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/House.png',
  ],
  uniconnect: [
    'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/home.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/students.png',
    'https://raw.githubusercontent.com/OmarAbouelkheirr/graduation-team-builder/main/screenshots/edit-profile.png',
  ],
}

export function getProjectCoverImage(projectId: string) {
  return projectCoverImages[projectId]
}

export function getProjectScreenshotImages(projectId: string) {
  return projectScreenshotImages[projectId] ?? []
}
