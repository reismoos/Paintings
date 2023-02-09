import {paintings} from './paintings'
import { authors } from './authors';
import { finishGame } from './start-finish';

const clearBody = () => {
    while(document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
}

const getRandomArr = (range, count) => {

    let m = {};
    let a = [];
    for (let i = 0; i < count; ++i) {
    let r = Math.floor(Math.random() * (range - i));
    a.push(((r in m) ? m[r] : r) + 0);
    let l = range - i - 1;
    m[r] = (l in m) ? m[l] : l;
    }
    return a
}

const shuffle = (array) =>{
    return array.sort(() => Math.round(Math.random() * 100) - 50);
  }

const getAnswersArr = (length, cur) => {
    let arr;
    const createArr = () => {
        arr = getRandomArr(length, 4);
        if (arr.includes(cur)) {
            createArr()
        }
    }
    createArr()
    arr.push(cur);
    return shuffle(arr)
    
} 

const fillAnswers = (place, className, arr, p) => {
    for (let i = 0; i < 5; i++){
        const li = document.createElement('li');
        place.append(li);
        li.classList.add(className);
        let el = document.querySelectorAll('.' + className);
        el[i].innerHTML = p[arr[i]].name;
        if (className === 'painter-name'){
            li.id = arr[i]
        }
    }
}
let tasks = getRandomArr(paintings.length, 10);
let curQuestion = 0;
let rightAnswers = {
    painting: false,
    painter: false,
};
let curScore = {
    painting: 5,
    painter: 5,
    all: 0,
}

const a = () => {
    console.log('tasks =', tasks, 'painting =',paintings[tasks[curQuestion]])
}

const createPaintingAboutWindow = () => {
    const div = document.createElement('div');
    document.body.prepend(div);
    div.classList.add('painting-about-window');
    div.innerHTML = paintings[tasks[curQuestion]].discription
}

const fillHTML = () => {
    const paintingImg = document.querySelector('.painting-img');
    paintingImg.style.backgroundImage = `url(${'../src/images'+paintings[tasks[curQuestion]].image})`;

    // answer paintings
    const answersPaintings = document.querySelector('.answers-paintings');
    while(answersPaintings.firstChild) {
        answersPaintings.removeChild(answersPaintings.firstChild)
    }
    let paintingsArr = getAnswersArr(paintings.length, tasks[curQuestion])
    fillAnswers(answersPaintings, 'painting-name', paintingsArr, paintings)
    
    //answers painters
    const answersPainters = document.querySelector('.answers-painters');
    while(answersPainters.firstChild) {
        answersPainters.removeChild(answersPainters.firstChild)
    }
    let painersArr = getAnswersArr(authors.length, authors.findIndex(el => el.name === paintings[tasks[curQuestion]].author.name));
    console.log(painersArr, authors.length, authors.findIndex(el => el.name === paintings[tasks[curQuestion]].author.name))
    fillAnswers(answersPainters, 'painter-name', painersArr, authors);

}

const fillAuthorAbout = () => {
    const authorid = document.querySelectorAll('.painter-name');
    console.log(authorid[0])
    authorid.forEach(el => el.addEventListener('click', () => {
        console.log(el.id)
    const painterPhoto = document.querySelector('.painter-about-img');
    const painterAboutText = document.querySelector('.painter-about-text');

    painterPhoto.style.backgroundImage = `url(${authors[el.id].image})`;
    painterAboutText.innerHTML = `${authors[el.id].about}`
    }))
}

const changingAnswersVariants = () => {
    const paintingVariant = document.querySelector('.painting-variant');
    const painterVariant = document.querySelector('.painter-variant');
    const answersPaintings = document.querySelector('.answers-paintings');
    const answersPainters = document.querySelector('.answers-painters');
    painterVariant.addEventListener('click', () => {
        if(paintingVariant.classList.contains('variant-btn-active')){
            paintingVariant.classList.remove('variant-btn-active');
            painterVariant.classList.add('variant-btn-active');
            answersPaintings.classList.add('answers-disactive');
            answersPainters.classList.remove('answers-disactive');
        }
    });
    paintingVariant.addEventListener('click', () => {
        if(painterVariant.classList.contains('variant-btn-active')){
            painterVariant.classList.remove('variant-btn-active');
            paintingVariant.classList.add('variant-btn-active');
            answersPainters.classList.add('answers-disactive');
            answersPaintings.classList.remove('answers-disactive');
        }
    })
    /* variantBtns.forEach((el, i) => {
        el.addEventListener('click', ()=>{
            const paintingVariant = document.querySelector('.painting-variant');
            const painterVariant = document.querySelector('.painter-variant');
            if(painterVariant.classList.contains('variant-btn-active')){
                
            }
        })
    }) */
  
}

const checkingAnswers = () => {
    const answersPaintings = document.querySelectorAll('.painting-name');
    const answersPainters = document.querySelectorAll('.painter-name');

    //checking painting
    answersPaintings.forEach(el => {
        el.addEventListener('click', () => {
            console.log(el, paintings[tasks[curQuestion]].author.name)
            if(!rightAnswers.painting){
                if(el.innerHTML === paintings[tasks[curQuestion]].name) {
                    rightAnswers.painting = true;
                    el.classList.add('right-answer');
                    curScore.all += curScore.painting;
                    fillScore();
                    curScore.painting = 5;
                    openBtn();
                    console.log('score:',curScore.all);
                } else {
                    el.classList.add('wrong-answer');
                    if(curScore.painting !== 0){
                        curScore.painting -= 1;
                    }
                }
            }
        })
    })

    // checking painters
    answersPainters.forEach(el => {
        el.addEventListener('click', () => {
            console.log(answersPainters, el.innerHTML)
            if(!rightAnswers.painter) {
                if(el.innerHTML === paintings[tasks[curQuestion]].author.name){
                    el.classList.add('right-answer');
                    rightAnswers.painter = true;
                    curScore.all += curScore.painter;
                    fillScore();
                    curScore.painter = 5;
                    openBtn()
                } else {
                    el.classList.add('wrong-answer');
                    if(curScore.painter !== 0){
                        curScore.painter -= 1;
                    }
                }
            }
        })
    })
}

const fillScore = () => {
    const scorePoint = document.querySelector('.score-num');
    scorePoint.innerHTML = curScore.all
}

const nextQueston = () => {
    curQuestion += 1;
    const curQuestionStr = document.querySelector('.question');
    curQuestionStr.innerHTML = `${curQuestion + 1} вопрос из 10`;
    rightAnswers.painting = false;
    rightAnswers.painter = false;
    fillHTML();
    checkingAnswers();
    const btn = document.querySelector('.next-question-btn');
    btn.removeEventListener('click', nextQueston);
    btn.classList.add('next-question-btn-disactive');
}

const openBtn = () => {
    if(rightAnswers.painter && rightAnswers.painting){
        const btn = document.querySelector('.next-question-btn');
        btn.classList.remove('next-question-btn-disactive');
        if(curQuestion === 9) {
            btn.innerHTML = 'Показать результаты';
            btn.addEventListener('click', finishGame);
        }
        btn.addEventListener('click', nextQueston);
    }
}

const startGameVar = () => {
    tasks = getRandomArr(paintings.length, 10);
    curQuestion = 0;
    rightAnswers = {
        painting: false,
        painter: false,
    };
    curScore = {
        painting: 5,
        painter: 5,
        all: 0,
    }
}


export {a, clearBody, fillHTML, createPaintingAboutWindow, changingAnswersVariants, checkingAnswers, startGameVar, curScore}