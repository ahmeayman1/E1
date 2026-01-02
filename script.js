const questions = [

/* ================= PART 1 : MCQ ================= */

{
  type: "mcq",
  q: "Which management function involves setting goals and deciding in advance what is to be done?",
  options: ["Organizing", "Planning", "Staffing", "Controlling"],
  a: 1
},
{
  type: "mcq",
  q: "Management is the process of using what you have to achieve:",
  options: ["Profits", "Goals", "Fame", "Complexity"],
  a: 1
},
{
  type: "mcq",
  q: "Which level of management is responsible for the overall strategic policies and objectives?",
  options: ["Lower Level", "Middle Level", "Top Level", "First-line Level"],
  a: 2
},
{
  type: "mcq",
  q: "Technical skills are most important at which level of management?",
  options: ["Top Level", "Middle Level", "Lower Level", "Executive Level"],
  a: 2
},
{
  type: "mcq",
  q: "The Director of Nursing Service Department belongs to which level?",
  options: ["Top Level", "Middle Level", "Lower Level", "Operational Level"],
  a: 0
},
{
  type: "mcq",
  q: "Which principle states that an employee should receive orders from only one superior?",
  options: ["Unity of Direction", "Unity of Command", "Scalar Chain", "Division of Work"],
  a: 1
},
{
  type: "mcq",
  q: "What is the Scalar Chain in management?",
  options: [
    "A tool for measuring productivity",
    "The line of authority from top management to the lowest ranks",
    "A method for financial accounting",
    "The physical layout of an office"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Matching the right man for the right job is the definition of:",
  options: ["Planning", "Organizing", "Staffing", "Directing"],
  a: 2
},
{
  type: "mcq",
  q: "Management is considered a Science because it has:",
  options: [
    "Personal creativity",
    "An organized body of knowledge",
    "Emotional intelligence",
    "Random decision making"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which of the following is NOT a category of resource?",
  options: ["Financial", "Human", "Weather", "Information"],
  a: 2
},
{
  type: "mcq",
  q: "The management function that involves monitoring performance and comparing it to standards is:",
  options: ["Planning", "Leading", "Controlling", "Organizing"],
  a: 2
},
{
  type: "mcq",
  q: "Which skill involves the ability to analyze and diagnose complex situations?",
  options: ["Technical Skill", "Human Skill", "Conceptual Skill", "Mechanical Skill"],
  a: 2
},
{
  type: "mcq",
  q: "Division of Work leads to:",
  options: ["Confusion", "Specialization and efficiency", "High costs", "Centralization"],
  a: 1
},
{
  type: "mcq",
  q: "A Head Nurse is typically categorized under which management level?",
  options: ["Top Level", "Middle Level", "Lower Level", "Administrative Level"],
  a: 2
},
{
  type: "mcq",
  q: "Which principle emphasizes group interest over individual interest?",
  options: ["Equity", "Initiative", "Subordination of individual interests", "Remuneration"],
  a: 2
},
{
  type: "mcq",
  q: "Anything minus management equals:",
  options: ["Success", "Nothing", "Double profit", "More resources"],
  a: 1
},
{
  type: "mcq",
  q: "Which function involves giving instructions and motivating staff?",
  options: ["Staffing", "Directing", "Planning", "Controlling"],
  a: 1
},
{
  type: "mcq",
  q: "Stability of tenure of personnel refers to:",
  options: ["Changing jobs frequently", "Job security", "Increasing salaries", "Punishing employees"],
  a: 1
},
{
  type: "mcq",
  q: "A major cause of management failure is:",
  options: ["Too much teamwork", "Poor leadership skills", "High trust", "Fast decision making"],
  a: 1
},
{
  type: "mcq",
  q: "Equity in management means:",
  options: [
    "Treating employees with kindness and justice",
    "Giving everyone the same salary",
    "Strict punishment",
    "Only top management has rights"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Middle-level managers act as intermediaries between:",
  options: [
    "Customers and top management",
    "Top and lower management",
    "Government and employees",
    "Competitors and suppliers"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which of Fayol’s principles promotes harmony?",
  options: ["Order", "Team Spirit", "Centralization", "Discipline"],
  a: 1
},
{
  type: "mcq",
  q: "Paralysis by analysis is related to failure in:",
  options: ["Communication", "Decision making", "Resource allocation", "Technology"],
  a: 1
},
{
  type: "mcq",
  q: "Management is an Art because it deals with:",
  options: [
    "Scientific formulas",
    "Application of knowledge and skills",
    "Laboratory experiments",
    "Standardized machines"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which of these is a human resource?",
  options: ["Money", "People", "Equipment", "Raw materials"],
  a: 1
},

/* ================= TRUE / FALSE ================= */

{ type: "tf", q: "Management is a universal process.", a: true },
{ type: "tf", q: "Conceptual skills are more important for lower-level managers.", a: false },
{ type: "tf", q: "Coordination of activities brings harmony.", a: true },
{ type: "tf", q: "Organizing involves deciding in advance what to do.", a: false },
{ type: "tf", q: "Authority and responsibility are interdependent.", a: true },
{ type: "tf", q: "Management is only a science, not an art.", a: false },
{ type: "tf", q: "First-line managers deal directly with workers.", a: true },
{ type: "tf", q: "Toxic culture is a cause of management failure.", a: true },
{ type: "tf", q: "Scalar chain should never be broken.", a: false },
{ type: "tf", q: "Discipline means obeying organizational rules.", a: true },
{ type: "tf", q: "Staffing matches jobs with individuals.", a: true },
{ type: "tf", q: "Efficiency means using maximum resources.", a: false },
{ type: "tf", q: "Unity of direction means a single plan of action.", a: true },
{ type: "tf", q: "Top management prepares budgets for all departments.", a: true },
{ type: "tf", q: "Human skills are equally important at all levels.", a: true },

/* ================= THINKING ================= */

{
  type: "mcq",
  q: "A manager excellent technically but poor in resolving conflicts lacks:",
  options: ["Technical skills", "Conceptual skills", "Human skills", "Financial skills"],
  a: 2
},
{
  type: "mcq",
  q: "A company has resources but fails to produce results due to failure in:",
  options: ["Market conditions", "Management", "Raw materials", "Physical strength"],
  a: 1
},
{ type: "tf", q: "A manager can have authority without responsibility.", a: false },
{
  type: "mcq",
  q: "Which scenario violates unity of command?",
  options: [
    "Two employees on one project",
    "One employee receiving orders from two managers",
    "One manager supervising ten employees",
    "A department having two goals"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which management level focuses on a 5-year strategic plan?",
  options: ["Lower", "Middle", "Top", "All levels"],
  a: 2
},
{
  type: "mcq",
  q: "Centralization refers to the degree of:",
  options: [
    "City location",
    "Subordinates involvement in decision making",
    "Power at lower levels",
    "Task division"
  ],
  a: 1
},
{ type: "tf", q: "Efficiency and effectiveness mean the same thing.", a: false },
{
  type: "mcq",
  q: "A supervisor encouraging responsibility practices:",
  options: ["Order", "Initiative", "Centralization", "Remuneration"],
  a: 1
},
{
  type: "mcq",
  q: "Misallocation of resources is failure in:",
  options: ["Planning/Organizing", "Public relations", "Hobbies", "Physical energy"],
  a: 0
},
{ type: "tf", q: "A successful manager combines science with personal judgment.", a: true }

];

console.log(questions.length); // ✅ 50
console.log(questions.length);
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
let shuffledQuestions = [];
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = shuffledQuestions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ✅ اعمل نسخة بدل ما تغيّر الأصل
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
document.getElementById("questionsBtn").innerText =
  `Questions (${shuffledQuestions.length})`;
  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${shuffledQuestions.length}`;
  progress.style.width = ((index + 1) / shuffledQuestions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", q.a === true);
createOption("False", q.a === false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}