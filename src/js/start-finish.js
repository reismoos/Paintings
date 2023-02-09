import { startGameVar } from "./gameplay-and-task";
import { createFinishMenu, createGameMenu, } from "./createHTML";
import { clearBody, fillHTML, checkingAnswers, createPaintingAboutWindow, changingAnswersVariants} from "./gameplay-and-task";
const startBtn = document.querySelector('.start-btn');

const startGame = () => {
    clearBody()
    startGameVar();
    createGameMenu()
    fillHTML()
    changingAnswersVariants();
    checkingAnswers()
}

const finishGame = () => {
    clearBody()
    createFinishMenu()
}
export {startGame, finishGame}