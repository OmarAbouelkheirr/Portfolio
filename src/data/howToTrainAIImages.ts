import type { ProjectScreenshot } from './projectImages.ts'

const base = 'https://media.githubusercontent.com/media/OmarAbouelkheirr/HowToTrainYourAI-Game/main/Documentation/Imgaes/'

export const howToTrainAICoverImage = `${base}Game%20hero.png`

export const howToTrainAIScreenshots: ProjectScreenshot[] = [
  { src: `${base}Dialogue%201.png`, title: 'Story Dialogue I', description: 'Narrative dialogue moment used to move the story and player objectives forward.' },
  { src: `${base}Dialogue%202.png`, title: 'Story Dialogue II', description: 'A second dialogue scene from the game narrative and character interaction flow.' },
  { src: `${base}Game%20hero.png`, title: 'Game Hero', description: 'Primary promotional gameplay image representing the visual direction of the project.' },
  { src: `${base}Grandfather%20message.png`, title: 'Grandfather Message', description: 'Narrative message that introduces an important part of the game story.' },
  { src: `${base}House%20Gate.png`, title: 'House Gate', description: 'Exterior environment at the entrance to the inherited house.' },
  { src: `${base}House.png`, title: 'The House', description: 'The inherited house that serves as a central location in the narrative.' },
  { src: `${base}Main%20Menue.png`, title: 'Main Menu', description: 'Entry screen for starting and navigating the game experience.' },
  { src: `${base}Robot%20before%20miniagme%201.png`, title: 'Robot Before Training', description: 'The robot immediately before the first calibration mini-game begins.' },
  { src: `${base}Screenshot%202026-07-05%20175229.png`, title: 'Gameplay Capture I', description: 'Additional in-game capture included in the project documentation.' },
  { src: `${base}Screenshot%202026-07-05%20180008.png`, title: 'Gameplay Capture II', description: 'Additional in-game capture included in the project documentation.' },
  { src: `${base}Screenshot%202026-07-05%20180101.png`, title: 'Gameplay Capture III', description: 'Additional in-game capture included in the project documentation.' },
  { src: `${base}minigame%201%20result%20.png`, title: 'Calibration Result', description: 'Result screen showing the outcome of the first robot calibration mini-game.' },
  { src: `${base}minigame%201.1.png`, title: 'Control Calibration — Detail', description: 'Detailed view from the first training challenge focused on robot control calibration.' },
  { src: `${base}minigame%201.png`, title: 'Control Calibration', description: 'First training mini-game where the player calibrates the robot movement systems.' },
  { src: `${base}minigame%202.1.png`, title: 'Path Efficiency — Detail', description: 'Detailed view of the second training challenge and its constrained navigation mechanics.' },
  { src: `${base}minigame%202.png`, title: 'Path Efficiency Trial', description: 'Second mini-game focused on collecting the target while managing path and energy efficiency.' },
  { src: `${base}minigame%203%20result%20.png`, title: 'Signature Match Result', description: 'Completion state for the third robot-training puzzle.' },
  { src: `${base}minigame%203.1.png`, title: 'Signature Match — Detail', description: 'Detailed puzzle view from the third training mini-game.' },
  { src: `${base}minigame%203.png`, title: 'Training Signature Match', description: 'Third mini-game built around spatial logic, device placement, and matching rules.' },
]
