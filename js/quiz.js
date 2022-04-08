const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question"),
  numberOfQuestion = document.getElementById("number__of__question"),
  numberOfAllQuestion = document.getElementById("number__of__all__question");

let indexOfQuestion,
  indexOfPage = 0;

const answersTracker = document.getElementById("answer__tracker");
const btnNext = document.getElementById("btn__next");

let score = 0;

const correctAnswer = document.getElementById("correct__answer"),
  numberOfAllQuestion2 = document.getElementById("number__of__all__question2"),
  btnTryAgain = document.getElementById("btn__try__again");

const questions = [
  {
    question: "Замонавий ЭҲМ нинг ишлаш принципи қайси саноқ системасига асосланган?",
    options: ["ўн олтилик", 
              "саккизлик", 
              "иккилик", 
              "ўнлик"],
    rightAnswer: 2,
  },
  {
    question: "Идентификатор – бу…",
    options: ["ўзгармас сон", 
              "ўзгарувчининг номи", 
              "ўзгарувчининг қиймати", 
              "рақам ва белгиларнинг чекланган кетма-кетлиги"],
    rightAnswer: 1,
  },
  {
    question: "Ахборот деб нимага айтилади?",
    options: ["тушунтириш, тавсифлаш", 
              "белгилар тўплами", 
              "атроф муҳитдаги объектлар, ходиса ва жараёнлар, уларнинг параметлари, хусусиятлари ва холати тўғрисидаги маълумотлар", 
              "моддий дунёнинг белгилар шаклида аксланиши тўғрисидаги маълумотлар"],
    rightAnswer: 2,
  },
  {
    question: "Ахборот ташувчиларга нималар киради?",
    options: ["принтер, дискета, винчестер", 
              "дискета, ойнома, рўзнома, сканер", 
              "дискета, монитор, электрон почта", 
              "алоқа тармоқлари, дискеталар, СD-ROM"],
    rightAnswer: 3,
  },
  {
    question: "Ахборот қандай хоссаларга эга бўлмаслиги лозим?",
    options: ["қимматли", 
              "қимматли", 
              "ишончлилик", 
              "ноаниқлик"],
    rightAnswer: 3,
  },
  {
    question: "Информатика фани нимани ўргатади?",
    options: ["мантиқ қонунлари ва масалаларни ечиш усулларини", 
              "ахборотларни ахборот технологиялари ёрдамида қайта ишлаш қонунлари,воситалари  ва усулларини", 
              "алгоритмларни тузиш ва ростлаш қонун ва усулларини", 
              "алгоритмларни ЭҲМ да бажариш усулларин"],
    rightAnswer: 1,
  },
  {
    question: "Ахборот технологиялари – бу…",
    options: ["компьютерлар мажмуаси", 
              "маълумотлар йиғиш воситалари", 
              "ахборот йиғиш, қайта ишлаш ва узатиш услублари ва техник воситалари жараёнидир", 
              "маълумотларни кайта ишлаш"],
    rightAnswer: 3,
  },
  {
    question: "ЭҲМда ахборот ўлчовининг энг кичик бирлигини кўрсатинг",
    options: ["байт", 
              "бит", 
              "кбайт", 
              "сон"],
    rightAnswer: 3,
  },
  {
    question: "Мониторнинг вазифаси – бу…	",
    options: ["ахборотни экранда сақлаш ", 
              "матнни экранга чиқариш	 ", 
              "ахборотни экранга ёзиш", 
              "экранга графикли ва матнли маълумотларни чиқариш"],
    rightAnswer: 3,
  },
  {
    question: "Клавиатура – бу…	",
    options: ["мулоқотни таъминловчи қурилма	", 
              "ахборотни киритиш қурилмаси	", 
              "ЭҲМни бошқариш қурилмаси", 
              "дастурларни ёзиш учун мўлжалланган қурилма	"],
    rightAnswer: 1,
  },
  {
    question: "Микропроцессор – бу…",
    options: ["барча қурилмаларни ўзаро боғловчи блок	", 
              "кўрсатмаларни бажарувчи, ахборотни ва ЭҲМ дастурини  сақловчи қурилма", 
              "ЭХМнинг бошқарувчи қурулма		", 
              "ЭХМни ёрдамчи қурилмаси	"],
    rightAnswer: 2,
  },
  {
    question: "Принтернинг вазифаси нима?",
    options: ["маълумотларни қоғозга чиқариш", 
              "ахборотни экрандан қоғозга кўчириш", 
              "натижаларни коғозга чоп этиш", 
              "матнли маълумотларни қоғозга чиқариш	"],
    rightAnswer: 0,
  },
  {
    question: "Дисковод  - бу…",
    options: ["дастурларни ўқиш ва  ёзиш қурилмаси	", 
              "ахборотларни дискдан ўқиш ва дискка ёзиш қурилмаси", 
              "ЭҲМ хотирасини магнит дискка кўчирадиган қурилма	", 
              "ахборот ташувчи"],
    rightAnswer: 1,
  },
  {
    question: "Операцион системанинг вазифаси нимадан иборат?	",
    options: ["дастур ва маълумотларни ўқиш ва ёзиш	", 
              "ахборотни қайта ишлаш жараёнини бошқариш ва аппарат воситалари билан фойдаланувчи ўртасида алоқани таъминлаш", 
              "ахборотни қайта ишлаш жараёнини бошқариш қурулмаси", 
              "аппарат воситалари билан фойдаланувчи ўртасида алоқани таъминлаш"],
    rightAnswer: 1,
  },
  {
    question: "Магнитли дискдаги секторлар сони нимага боғлиқ?	",
    options: ["магнитли диск ва дисковод қурилмасига боғлиқ", 
              "дисковод қурилмасига боғлиқ	", 
              "ЭХМ ва дисковод қурилмасига боғлиқ", 
              "ЭХМнинг хотирасига боғлиқ"],
    rightAnswer: 1,
  },
  {
    question: "Дисплей – бу…	",
    options: ["ўзаро яқин масофадаги бир нечта ШКлар орасида алоқа ўрнатиш", 
              "бир ЭХМ дан бошқасига маълумотлар ўтказиш", 
              "фойдаланувчига дастурларни жўнатиш", 
              "фойдаланувчиларни  дисковод курилмасидан фойдаланиши"],
    rightAnswer: 0,
  },
  {
    question: "Дисплей – бу…",
    options: ["экран ва клавиатурадан иборат бўлган қурилма	", 
              "монитор", 
              "клавиатура ва принтер", 
              "маълумотларни киритиш қурилмаси"],
    rightAnswer: 1,
  },
  {
    question: "Алгоритмни тасвирлаш усулларини кўрсатинг",
    options: ["блок - схема ", 
              "блок - схема, сузлар, аналитик, жадвал, алгоритмик тилда, дастур шаклида.", 
              "жадвал ва блок - схема	", 
              "аналитик ва махсус белгилар"],
    rightAnswer: 1,
  },
  {
    question: "График мухарир нима учун ишлатилади?",
    options: ["расмларни  чизиш ва тахрирлаш учун", 
              "дисплей экранида график тасвирларни куриш жараёнини автоматлаштириш учун.", 
              "тасвирни ташки хотирага чикариш учун	", 
              "ташки хотирадан тасвирни тезкор хотирага юклаш учун"],
    rightAnswer: 0,
  },
  {
    question: "Маълумотлар базаси - бу",
    options: ["маълумотларнинг тартибланган мажмуаси", 
              "маълумотларнинг ихтиёрий туплами	", 
              "маълумотлар ва уларнинг кайта ишлайдиган дастурлар туплами", 
              "маълумотларни кайта ишлайдиган дастурлар"],
    rightAnswer: 0,
  },
  {
    question: "Замонавий ЭҲМ нинг ишлаш принципи қайси саноқ системасига асосланган?",
    options: ["ўн олтилик", 
              "саккизлик", 
              "иккилик", 
              "ўнлик"],
    rightAnswer: 2,
  },
  {
    question: "Идентификатор – бу…",
    options: ["ўзгармас сон", 
              "ўзгарувчининг номи", 
              "ўзгарувчининг қиймати", 
              "рақам ва белгиларнинг чекланган кетма-кетлиги"],
    rightAnswer: 1,
  },
  {
    question: "Ахборот деб нимага айтилади?",
    options: ["тушунтириш, тавсифлаш", 
              "белгилар тўплами", 
              "атроф муҳитдаги объектлар, ходиса ва жараёнлар, уларнинг параметлари, хусусиятлари ва холати тўғрисидаги маълумотлар", 
              "моддий дунёнинг белгилар шаклида аксланиши тўғрисидаги маълумотлар"],
    rightAnswer: 2,
  },
  {
    question: "Ахборот ташувчиларга нималар киради?",
    options: ["принтер, дискета, винчестер", 
              "дискета, ойнома, рўзнома, сканер", 
              "дискета, монитор, электрон почта", 
              "алоқа тармоқлари, дискеталар, СD-ROM"],
    rightAnswer: 3,
  },
  {
    question: "Ахборот қандай хоссаларга эга бўлмаслиги лозим?",
    options: ["қимматли", 
              "қимматли", 
              "ишончлилик", 
              "ноаниқлик"],
    rightAnswer: 3,
  },
  {
    question: "Информатика фани нимани ўргатади?",
    options: ["мантиқ қонунлари ва масалаларни ечиш усулларини", 
              "ахборотларни ахборот технологиялари ёрдамида қайта ишлаш қонунлари,воситалари  ва усулларини", 
              "алгоритмларни тузиш ва ростлаш қонун ва усулларини", 
              "алгоритмларни ЭҲМ да бажариш усулларин"],
    rightAnswer: 1,
  },
  {
    question: "Ахборот технологиялари – бу…",
    options: ["компьютерлар мажмуаси", 
              "маълумотлар йиғиш воситалари", 
              "ахборот йиғиш, қайта ишлаш ва узатиш услублари ва техник воситалари жараёнидир", 
              "маълумотларни кайта ишлаш"],
    rightAnswer: 3,
  },
  {
    question: "ЭҲМда ахборот ўлчовининг энг кичик бирлигини кўрсатинг",
    options: ["байт", 
              "бит", 
              "кбайт", 
              "сон"],
    rightAnswer: 3,
  },
  {
    question: "Мониторнинг вазифаси – бу…	",
    options: ["ахборотни экранда сақлаш ", 
              "матнни экранга чиқариш	 ", 
              "ахборотни экранга ёзиш", 
              "экранга графикли ва матнли маълумотларни чиқариш"],
    rightAnswer: 3,
  },
  {
    question: "Клавиатура – бу…	",
    options: ["мулоқотни таъминловчи қурилма	", 
              "ахборотни киритиш қурилмаси	", 
              "ЭҲМни бошқариш қурилмаси", 
              "дастурларни ёзиш учун мўлжалланган қурилма	"],
    rightAnswer: 1,
  },
  {
    question: "Микропроцессор – бу…",
    options: ["барча қурилмаларни ўзаро боғловчи блок	", 
              "кўрсатмаларни бажарувчи, ахборотни ва ЭҲМ дастурини  сақловчи қурилма", 
              "ЭХМнинг бошқарувчи қурулма		", 
              "ЭХМни ёрдамчи қурилмаси	"],
    rightAnswer: 2,
  },
  {
    question: "Принтернинг вазифаси нима?",
    options: ["маълумотларни қоғозга чиқариш", 
              "ахборотни экрандан қоғозга кўчириш", 
              "натижаларни коғозга чоп этиш", 
              "матнли маълумотларни қоғозга чиқариш	"],
    rightAnswer: 0,
  },
  {
    question: "Дисковод  - бу…",
    options: ["дастурларни ўқиш ва  ёзиш қурилмаси	", 
              "ахборотларни дискдан ўқиш ва дискка ёзиш қурилмаси", 
              "ЭҲМ хотирасини магнит дискка кўчирадиган қурилма	", 
              "ахборот ташувчи"],
    rightAnswer: 1,
  },
  {
    question: "Операцион системанинг вазифаси нимадан иборат?	",
    options: ["дастур ва маълумотларни ўқиш ва ёзиш	", 
              "ахборотни қайта ишлаш жараёнини бошқариш ва аппарат воситалари билан фойдаланувчи ўртасида алоқани таъминлаш", 
              "ахборотни қайта ишлаш жараёнини бошқариш қурулмаси", 
              "аппарат воситалари билан фойдаланувчи ўртасида алоқани таъминлаш"],
    rightAnswer: 1,
  },
  {
    question: "Магнитли дискдаги секторлар сони нимага боғлиқ?	",
    options: ["магнитли диск ва дисковод қурилмасига боғлиқ", 
              "дисковод қурилмасига боғлиқ	", 
              "ЭХМ ва дисковод қурилмасига боғлиқ", 
              "ЭХМнинг хотирасига боғлиқ"],
    rightAnswer: 1,
  },
  {
    question: "Дисплей – бу…	",
    options: ["ўзаро яқин масофадаги бир нечта ШКлар орасида алоқа ўрнатиш", 
              "бир ЭХМ дан бошқасига маълумотлар ўтказиш", 
              "фойдаланувчига дастурларни жўнатиш", 
              "фойдаланувчиларни  дисковод курилмасидан фойдаланиши"],
    rightAnswer: 0,
  },
  {
    question: "Дисплей – бу…",
    options: ["экран ва клавиатурадан иборат бўлган қурилма	", 
              "монитор", 
              "клавиатура ва принтер", 
              "маълумотларни киритиш қурилмаси"],
    rightAnswer: 1,
  },
  {
    question: "Алгоритмни тасвирлаш усулларини кўрсатинг",
    options: ["блок - схема ", 
              "блок - схема, сузлар, аналитик, жадвал, алгоритмик тилда, дастур шаклида.", 
              "жадвал ва блок - схема	", 
              "аналитик ва махсус белгилар"],
    rightAnswer: 1,
  },
  {
    question: "График мухарир нима учун ишлатилади?",
    options: ["расмларни  чизиш ва тахрирлаш учун", 
              "дисплей экранида график тасвирларни куриш жараёнини автоматлаштириш учун.", 
              "тасвирни ташки хотирага чикариш учун	", 
              "ташки хотирадан тасвирни тезкор хотирага юклаш учун"],
    rightAnswer: 0,
  },
  {
    question: "Маълумотлар базаси - бу",
    options: ["маълумотларнинг тартибланган мажмуаси", 
              "маълумотларнинг ихтиёрий туплами	", 
              "маълумотлар ва уларнинг кайта ишлайдиган дастурлар туплами", 
              "маълумотларни кайта ишлайдиган дастурлар"],
    rightAnswer: 0,
  },
];

numberOfAllQuestion.innerHTML = questions.length;

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;
};

let complatedAnswer = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitdublicate = false;

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (complatedAnswer.length > 0) {
      complatedAnswer.forEach((item) => {
        if (item == randomNumber) {
          hitdublicate = true;
        }
      });
      if (hitdublicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    };
    if (complatedAnswer == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  };
  complatedAnswer.push(indexOfQuestion);
};

const checkAnswer = el => {
  if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');
  }
  disabledOptions();
}

const disabledOptions = () => {
  optionElements.forEach(item => {
    item.classList.add('disabled');
    if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add('correct');
    }
  })
}

const enableOptions = () => {
  optionElements.forEach(item => {
    item.classList.remove('disabled', 'correct', 'wrong');
  })
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
};

const updateAnswerTracker = status => {
  console.log(answersTracker.children);
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

for(option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}

const validate = () => {
  if(!optionElements[0].classList.contains('disabled')) {
    alert('Siz savolga javob bermadinggiz keyingi savolni ko`rish uchun javoblardan birini belgilang');
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener('click', validate);

for (option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}



const quizOver = () => {
  if(numberOfQuestion = numberOfAllQuestion) () =>{
  document.querySelector('.quiz__over__modle').classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestion2.innerHTML = questions.length;
}};

const tryAgain = () => {
  window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
});
