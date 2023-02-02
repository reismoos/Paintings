import {paintings} from './paintings'
import { authors } from './authors';

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
let rightAnswer = false;
const a = () => {
    console.log(tasks, paintings[tasks[curQuestion]])
}

const fillHTML = () => {
    const paintingImg = document.querySelector('.painting-img');
    paintingImg.style.backgroundImage = `url(${paintings[tasks[curQuestion]].image})`;

    // answer paintings
    const answersPaintings = document.querySelector('.answers-paintings');
    let paintingsArr = getAnswersArr(paintings.length, tasks[curQuestion])
    fillAnswers(answersPaintings, 'painting-name', paintingsArr, paintings)
    
    //answers painters
    const answersPainters = document.querySelector('.answers-painters');
/*     console.log(authors.findIndex(el => el.name === paintings[tasks[curQuestion]].author.name)) */
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



export {a, fillHTML}