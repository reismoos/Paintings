const createStartMenu = () => {
    let menu = document.createElement('div');
    document.body.append(menu);
    menu.classList.add('menu');
    menu.insertAdjacentHTML('beforeend', `<button class = startBtn>Старт</buttonp>`)
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
    score.innerHTML = '45'
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
    paintingAbout.classList.add('painting-about')

    const answersCR = document.createElement('div');
    main.append(answersCR);
    answersCR.classList.add('answers');
    const answers = document.querySelector('.answers');

    const answersPaintings = document.createElement('div');
    answers.append(answersPaintings);
    answersPaintings.classList.add('answers-paintings');
    const answersPainters = document.createElement('div');
    answers.append(answersPainters);
    answersPainters.classList.add('answers-painters');

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

}

const createGameMenu = () => {
    createHeader()
    createMain()
}



export {createStartMenu, createGameMenu}