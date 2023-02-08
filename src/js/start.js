import { startGameVar } from "./gameplay-and-task";
import { createGameMenu } from "./createHTML";
import { fillHTML, checkingAnswers, createPaintingAboutWindow, changingAnswersVariants} from "./gameplay-and-task";
const startBtn = document.querySelector('.start-btn');

const startGame = () => {
    startGameVar();
    
    while(document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
    createGameMenu()
    fillHTML()
    changingAnswersVariants();
    checkingAnswers()
    
}

export default startGame