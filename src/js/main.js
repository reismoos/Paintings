import "../styles.scss"
import startGame from "./start"
import { createStartMenu, createGameMenu } from "./createHTML"
import {a, fillHTML, checkingAnswers, createPaintingAboutWindow, changingAnswersVariants} from "./gameplay-and-task"
/* createGameMenu()
a()
fillHTML() */

/* const btn = document.querySelector('.painting-about-btn');
btn.addEventListener('click', createPaintingAboutWindow)
changingAnswersVariants();
checkingAnswers() */

createStartMenu()
console.log(document.body.firstChild)
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startGame)