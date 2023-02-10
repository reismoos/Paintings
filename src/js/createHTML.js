import { curScore, clearBody } from "./gameplay-and-task";
import {startGame, finishGame} from "./start-finish"

const createStartMenu = () => {
    let menu = document.createElement('div');
    document.body.append(menu);
    menu.classList.add('menu');
    menu.insertAdjacentHTML('beforeend', `<button class = start-btn>Старт</buttonp>`);
    menu.firstChild.addEventListener('click', startGame);
}

const createHeader = () => {
    let headerCr = document.createElement('header');
    document.body.append(headerCr);
    const header = document.querySelector('header');

    let question = document.createElement('div');
    header.append(question);
    question.classList.add('question');
    question.innerHTML = '1 вопрос из 10'

    let score = document.createElement('div');
    header.append(score);
    score.classList.add('score');
    let scoreName = ['score-text', 'score-num']
    for(let i = 0; i < 2; i++){
        let div = document.createElement('div');
        score.append(div);
        div.classList.add(`${scoreName[i]}`);
        if(i === 0){
            div.innerHTML = 'Очки:'
        }
    }
}

const createMain = () => {
    let mainCr = document.createElement('main');
    document.body.append(mainCr);
    const main = document.querySelector('main');

    const paintingCR = document.createElement('div');
    main.append(paintingCR);
    paintingCR.classList.add('painting');
    const painting = document.querySelector('.painting')
    const paintingImg = document.createElement('div');
    painting.append(paintingImg);
    paintingImg.classList.add('painting-img');
    const paintingAbout = document.createElement('div');
    painting.append(paintingAbout);
    paintingAbout.classList.add('painting-about');
    paintingAbout.insertAdjacentHTML('beforeend', `<div class = painting-about-window></div>`)
    paintingAbout.insertAdjacentHTML('beforeend', `<button class = painting-about-btn>О картине</button>`)

    const answersCR = document.createElement('div');
    main.append(answersCR);
    answersCR.classList.add('answers');
    const answers = document.querySelector('.answers');

    const answerVarCr = document.createElement('div');
    answersCR.append(answerVarCr);
    answerVarCr.classList.add('answer-variant');
    const className = ['painting-variant', 'painter-variant'];
    const nameBTN = ['Картина', 'Художник']
    for(let i = 0; i < 2; i++) {
        const div = document.createElement('div');
        answerVarCr.append(div);
        div.classList.add(`${className[i]}`, 'variant-btn');
        div.innerHTML = nameBTN[i];
        if(i === 0){
            div.classList.add('variant-btn-active')
        }
    }

    const answersPaintings = document.createElement('ul');
    answers.append(answersPaintings);
    answersPaintings.classList.add('answers-paintings');
    const answersPainters = document.createElement('ul');
    answers.append(answersPainters);
    answersPainters.classList.add('answers-painters', 'answers-disactive');

    const painterAboutCr = document.createElement('div');
    main.append(painterAboutCr);
    painterAboutCr.classList.add('painter-about');
    const painterAbout = document.querySelector('.painter-about');
    const painterAboutImg = document.createElement('div');
    painterAbout.append(painterAboutImg);
    painterAboutImg.classList.add('painter-about-img');
    const painterAboutText = document.createElement('div');
    painterAbout.append(painterAboutText);
    painterAboutText.classList.add('painter-about-text');

    const nextQuestionBtn = document.createElement('button');
    main.append(nextQuestionBtn);
    nextQuestionBtn.classList.add('next-question-btn', 'next-question-btn-disactive');
    nextQuestionBtn.innerHTML = 'Следующий вопрос'
}

const createGameMenu = () => {
    createHeader()
    createMain()
}

const createFinishMenu = () => {
    const div = document.createElement('div');
    document.body.append(div);
    div.classList.add('finish');

    const finishText = document.createElement('div');
    div.append(finishText);
    finishText.classList.add('finish-text');
    let fraze = `Поздравляем, вы прошли викторину и получили ${curScore.all} баллов! `
    if(curScore.all > 90){
        finishText.innerHTML = fraze + `Вы отлично знакомы с произведениями искусства! Поробуете повторить свой результат? :)`
    } else if (curScore.all > 30) {
        finishText.innerHTML =  fraze + `Вы неплохо знакомы с произведениями искусства! Поробуете улучшить свой результат? :)`
    } else {
        finishText.innerHTML =  fraze + `Вы - неуч! Но не отчаивайтесь, у Вас все получится!`
    }
    
    div.insertAdjacentHTML('beforeend', `<button class = finish-btn>Вернуться в меню</buttonp>`);
    const finishBtn = document.querySelector('.finish-btn');
    finishBtn.addEventListener('click', () => {
        clearBody();
        createStartMenu()
    })
}

export {createStartMenu, createGameMenu, createFinishMenu}