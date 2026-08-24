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

export function getProjectCoverImage(projectId: string) {
  return projectCoverImages[projectId]
}
