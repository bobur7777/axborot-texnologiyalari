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
    question: "Axborot bu - …",
    options: ["Ro’y beradigan hodisalar", 
              "Ma’lumotlar bazasi", 
              "Butun borliq, undagi roʼy beradigan hodisalar va jarayonlar xaqidagi xabar va maʼlumotlardir", 
              "Jarayonlar haqidagi habar"],
    rightAnswer: 2,
  },
  {
    question: "Axborot- lotincha information so’zidan olingan bo’lib … degan ma’noni beradi.",
    options: ["anglash", 
              "ko’rsatish", 
              "tushuntirish", 
              "bilmaslik"],
    rightAnswer: 2,
  },
  {
    question: "Axborot asosan qanday turlarga bo’linadi?",
    options: ["Matnli axborot,grafikli axborot, tovushli axborot, videolavhali axborot.", 
              "Matnli axborot,grafikli axborot, tovushli axborot, videolavhali axborot, belgili axborot, raqamli axborot.", 
              "Matnli axborot,grafikli axborot,belgili axborot, raqamli axborot.", 
              "Tovushli axborot, videolavhali axborot, belgili axborot, raqamli axborot."],
    rightAnswer: 1,
  },
  {
    question: "Axborot kompyuter,planshet, mobil qurilma va boshqalarga qanday qabul qiladi va uzatadi?",
    options: ["beshlik sanoq sistemasida", 
              "o’n oltilik sanoq sistemasida", 
              "o’nlik sanoq sistemasida", 
              "ikkilik sanoq sistemasida"],
    rightAnswer: 3,
  },
  {
    question: "Axborotlarni o’lchashda kompyuterda signalning borligi va yo’qligi qanday ifodalanadi?",
    options: ["1 va 0 orqali", 
              "+ va - orqali", 
              "1 va 2 orqali", 
              "2 va 3 orqali"],
    rightAnswer: 0,
  },
  {
    question: "Axborot katta hajmda bo’lganda uning sig’imini  ayni paytda qanday turlarda o’lchash mumkin,o’lchov birliklari?",
    options: ["Bit,Bayt, Kb,Mb,Gb,Tb,Pb ", 
              "Kb,Mb,Gb,Tb,Pb", 
              "Bit,Bayt, Kb,Mb", 
              "Bit,Bayt, Tb,Pb"],
    rightAnswer: 0,
  },
  {
    question: "Axborotni kompyuterga tashishga va saqlashga yordam beradigan vositalar - …",
    options: ["Ichki xotira,tashqi xotira", 
              "Kesh xotira,tezkor xotira", 
              "Tezkor xotira,ichki xotira", 
              "Kesh xotira,tezkor xotira,ichki xotira,tashqi xotira"],
    rightAnswer: 3,
  },
  {
    question: "Axborot texnologiyalari- ",
    options: ["Maʼlumotlarni boshqarish va qayta ishlash texnologiyalaridir", 
              "Qayta ishlash texnologiyalaridir", 
              "Uzatish texnologiyalaridir", 
              "Anglash texnologiyalaridir"],
    rightAnswer: 0,
  },
  {
    question: "Kompyuter ishga tushgandan soʼng barcha dasturiy vositalarni ishlashini taʼminlab beruvchi xotira-bu…",
    options: ["Ichki xotira", 
              "Tashqi xotira", 
              "Tezkor xotira", 
              "Kesh xotira"],
    rightAnswer: 2,
  },
  {
    question: "Foydalanuvchi tomonidan eng koʼp foydalanilgan axborot yoki dasturiy vositani oʼzida saqlab boruvchi xotira- bu …",
    options: ["Kesh xotira", 
              "Tezkor xotira", 
              "Ichki xotira", 
              "Tashqi xotira"],
    rightAnswer: 0,
  },
  {
    question: "Axborot texnologiyalarining rivojlanishi qanday bosqichlarga bo’linadi?",
    options: ["Insonlar oʼrtasidagi ilk muloqot, muloqot o’rnatishda qurilmalardan foydalanish, mikro- sxemalarning paydo boʼlishi", 
              "Elektromexanik,elektron", 
              "Premexanik,mexanik", 
              "Insonlar oʼrtasidagi ilk muloqot, muloqot o’rnatishda qurilmalardan foydalanish, mikro- sxemalarning paydo boʼlishi, hozirgi davr texnologiyalari"],
    rightAnswer: 3,
  },
  {
    question: "Telefon va telegraflardan axborot texnologiyalarning qaysi rivojlanish bosqichida foydalanilgan?",
    options: ["Elektron", 
              "Mexanik", 
              "Elektromexanik", 
              "Peremexanik"],
    rightAnswer: 2,
  },
  {
    question: "Axborot texnologiyalarining qaysi rivojlanish bosqichida insonlar o’rtasida ilk muloqat  yuzaga kelgan?",
    options: ["Elektron", 
              "Elektromexanik", 
              "Peremexanik", 
              "Mexanik"],
    rightAnswer: 2,
  },
  {
    question: "Axborot texnologiyalarining qaysi rivojlanish bosqichida  muloqot o’rnatishda qurilmalardan foydalanilgan?",
    options: ["Mexanik", 
              "Peremexanik", 
              "Elektromexanik", 
              "Elektron"],
    rightAnswer: 2,
  },
  {
    question: "Axborot texnologiyalarining qaysi rivojlanish bosqichida  hozirgi davr texnologiyalaridan foydalanila boshlandi?",
    options: ["Elektron", 
              "Mexanik", 
              "Elektromexanik", 
              "Peremexanik"],
    rightAnswer: 0,
  },
  {
    question: "Avtomatlashtirish- …",
    options: ["deganda inson ishtirokisiz biror bir mahsulotni ishlab chiqarish yoki xizmat kursatish tushuniladi", 
              "mahsulot ishlab chiqarish", 
              "Yetkazib berish mahsulotni", 
              "Xiamat ko’rsatish"],
    rightAnswer: 0,
  },
  {
    question: "Ishlab chigarishni avtomatlashtirish-…",
    options: ["Ishlab chiqarish va boshqarishni inson bajaradi", 
              "Boshqarishni insonlar bajaradi", 
              "Ishlab chiqarishni insonlar bajaradi", 
              "Mashinalashtirilgan ishlab chiqarishni nazorat qilish va boshqarish ishlarini avtomatik qurilmalar zimmasiga yuklash hisoblanadi"],
    rightAnswer: 3,
  },
  {
    question: "Ishlab chiqarishning …. bosqichlari bor.",
    options: ["Lokal,kompleks va to’la avtomatlashtirish", 
              "Qisman va yalpi", 
              "Yalpi va to’la avtomatlashtirish", 
              "Lokal va to’la avtomatlashtirish"],
    rightAnswer: 0,
  },
  {
    question: "Qo’llanish sohasiga qarab axborot tizimlarini qanday sinflarga ajratish mumkin:",
    options: ["Tashkiliy,Texnologik jaroyanlarni boshqarish", 
              "Tashkiliy,Texnologik jaroyanlarni boshqarish,Loyihalashtirishni avtomatlashtirish,  Ilmiy tadqiqotlarni avtomatlashtirish va boshqarish", 
              "Loyihalashtirishni avtomatlashtirish", 
              "Loyihalashtirishni avtomatlashtirish,  Ilmiy tadqiqotlarni avtomatlashtirish va boshqarish"],
    rightAnswer: 1,
  },
  {
    question: "Аxborot-kommunikatsiya texnologiyalarini asosiy roli va ahamyatlaridan biri bu-",
    options: ["Aholini yaxshi yashash darajasini oshirish", 
              "Siyosatni rivojlantirish", 
              "Dehqonchilikni rivojlantirish", 
              "Aholini yaxshi yashash darajasini pasaytirish"],
    rightAnswer: 0,
  },
  {
    question: "Аxborot-kommunikatsiya texnologiyalarini tatbiq etishdan maqsad-…",
    options: ["Iqtisodni rivojlantirish, Investitsiyalarni jalb qilish", 
              "Iqtisodni rivojlantirish, Investitsiyalarni jalb qilish, Ish oʼrinlarini koʼpaytirish, Barqaror iqtisodiy oʼsish, Аholi yashash darajasini oshirish", 
              "Investitsiyalarni jalb qilish, Ish oʼrinlarini koʼpaytirish", 
              "Barqaror iqtisodiy  oʼsish, Аholi yashash darajasini oshirish"],
    rightAnswer: 1,
  },
  {
    question: "Axborot-kommunikatsiya texnologiyalarining asosi nimalardan tashkil topgan?",
    options: ["Sofrware,hardware,brainware", 
              "Sofrware, brainware", 
              "Hardware,brainware", 
              "Sofrware,hardware"],
    rightAnswer: 0,
  },
  {
    question: "Kompyuter qaysi ta’minotsiz “quruq temir”ga aylanib qoladi?",
    options: ["software", 
              "hardware", 
              "brainware", 
              "software, hardware"],
    rightAnswer: 0,
  },
  {
    question: "Software nechta guruhga bo’linadi?",
    options: ["Tizimli va uskunaviy", 
              "Amaliy va uskunaviy", 
              "Tizimli va amaliy", 
              "Tizimli,amaliy va uskunaviy"],
    rightAnswer: 3,
  },
  {
    question: "Linux,ios,android,windows va boshqalar qanday dasturiy ta’minotga tegishli",
    options: ["Amaliy", 
              "Uskunaviy", 
              "Tizimli", 
              "Amaliy va tizimli"],
    rightAnswer: 2,
  },
  {
    question: "Foydalanuvchi  va qurilma o’rtasidagi muloqatni oʼrnatib beruvchi dasturiy mahsulotlar –bu …",
    options: ["Tizimli dasturiy ta’minot", 
              "Amaliy  dasturiy ta’minot", 
              "Uskunaviy dasturiy ta’minot", 
              "Amaliy va tizimli dasturiy ta’minot"],
    rightAnswer: 0,
  },
  {
    question: "Videoplayer, Office dasturlari paketi, grafik dasturlar, maʼlumotlar bazasi, antiviruslar, arxivatorlar  va boshqalar qanday dasturiy ta’minotga tegishli",
    options: ["Tizimli va dasturiy ta’minot", 
              "Uskunaviy dasturiy ta’minot", 
              "Amaliy dasturiy ta’minot", 
              "Tizimli dasturiy ta’minot"],
    rightAnswer: 2,
  },
  {
    question: "JavaScript,Java,C++,Python,Delphi,visual studio va boshqa dasturlash tillari qanday dasturiy ta’minotga tegishli?",
    options: ["Uskunaviy", 
              "Uskunaviy va amaliy", 
              "Amaliy", 
              "Tizimli"],
    rightAnswer: 3,
  },
  {
    question: "Muammoga yo’naltirilgan,sun’iy intellekt,kichik nashriyot ,umumiy maqsadli,multimediali va ofis  dasturiy ta’minot bilan qaysi dasturiy ta’minot tasniflanadi?",
    options: ["Uskunaviy va amaliy", 
              "Uskunaviy", 
              "Tizimli", 
              "Amaliy "],
    rightAnswer: 3,
  },
  {
    question: "Muammoga yo’naltirilgan amaliy  dasturiy ta’minot-…",
    options: ["Faqat buxgalteriyani  elektron  ko’rinishda muammolari hal qilinadi", 
              "Buxgalteriya,shaxsiy va jarayonlarni boshqarish ,bank axborot tizimlarini va boshqalarni   elektron  ko’rinishda muammolari hal qilinadi", 
              "Faqat jarayonlar boshqarishni  elektron  ko’rinishda muammolari hal qilinadi", 
              "Faqat shaxsiy boshqarishni  elektron  ko’rinishda muammolari hal qilinadi"],
    rightAnswer: 1,
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
