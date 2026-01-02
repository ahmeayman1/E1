const questions = [

/* ================= PART 1 : MCQ (1–20) ================= */

{
  type: "mcq",
  q: "Management is the process of achieving organizational goals through the use of resources ________.",
  options: ["Quickly", "Effectively and efficiently", "Cheaply", "Randomly"],
  a: 1
},
{
  type: "mcq",
  q: "Which level of management is responsible for long-term decisions and strategic plans?",
  options: ["First-line management", "Middle management", "Top management", "Operational management"],
  a: 2
},
{
  type: "mcq",
  q: "The Management Process consists of which sequence of functions?",
  options: [
    "Planning, Organizing, Staffing, Directing, Controlling",
    "Planning, Directing, Staffing, Organizing, Controlling",
    "Controlling, Planning, Staffing, Directing, Organizing",
    "Staffing, Planning, Organizing, Controlling, Directing"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Efficiency in management refers to:",
  options: [
    "Achieving the goals regardless of cost",
    "Relationship between inputs and outputs (doing things right)",
    "Making the most profit",
    "Hiring the most employees"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Effectiveness is defined as:",
  options: [
    "Reducing the number of staff",
    "Achieving the intended goals (doing the right things)",
    "Saving money only",
    "Spending all resources"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which management skill involves the ability to work well with other people?",
  options: ["Technical skills", "Conceptual skills", "Human skills", "Diagnostic skills"],
  a: 2
},
{
  type: "mcq",
  q: "Technical skills are most important for which level of management?",
  options: ["Top-level managers", "Middle-level managers", "First-line managers", "CEOs"],
  a: 2
},
{
  type: "mcq",
  q: "The ability to see the organization as a whole is known as:",
  options: ["Human skill", "Technical skill", "Conceptual skill", "Operational skill"],
  a: 2
},
{
  type: "mcq",
  q: "Who is considered the Father of Scientific Management?",
  options: ["Henri Fayol", "Frederick Taylor", "Max Weber", "Abraham Maslow"],
  a: 1
},
{
  type: "mcq",
  q: "The principle of Unity of Command means:",
  options: [
    "All employees work together",
    "Each subordinate receives orders from one superior",
    "Managers have many bosses",
    "Decisions are made by a group"
  ],
  a: 1
},
{
  type: "mcq",
  q: "According to Henri Fayol, there are how many principles of management?",
  options: ["5", "10", "14", "20"],
  a: 2
},
{
  type: "mcq",
  q: "Middle-level managers are primarily responsible for:",
  options: [
    "Creating the hospital vision",
    "Implementing policies and coordinating supervisors",
    "Direct patient care only",
    "Managing national budgets"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Administration is often associated with:",
  options: [
    "Lower-level tasks",
    "Policy-making and determinative functions",
    "Daily technical work",
    "Staffing only"
  ],
  a: 1
},
{
  type: "mcq",
  q: "The Scalar Chain principle refers to:",
  options: [
    "Type of equipment",
    "Formal line of authority from top to bottom",
    "Salary scale",
    "Shift rotation"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Esprit de Corps promotes:",
  options: [
    "Individual competition",
    "Team spirit and harmony",
    "Strict punishment",
    "High costs"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which manager role includes disturbance handler and resource allocator?",
  options: ["Interpersonal", "Informational", "Decisional", "Technical"],
  a: 2
},
{
  type: "mcq",
  q: "Management is considered ________.",
  options: ["Only an Art", "Only a Science", "Both an Art and a Science", "Neither"],
  a: 2
},
{
  type: "mcq",
  q: "Span of Control refers to:",
  options: [
    "Meeting duration",
    "Number of subordinates supervised",
    "Hospital size",
    "Unit budget"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which function involves measuring performance and corrective action?",
  options: ["Planning", "Organizing", "Controlling", "Staffing"],
  a: 2
},
{
  type: "mcq",
  q: "Which managerial skill increases in importance at top management?",
  options: ["Technical", "Conceptual", "Manual", "Routine"],
  a: 1
},

/* ================= PART 2 : TRUE / FALSE (21–40) ================= */

{ type: "tf", q: "Management is a universal process.", a: true },
{ type: "tf", q: "Efficiency means doing the right things.", a: false },
{ type: "tf", q: "Top management spends more time directing than planning.", a: false },
{ type: "tf", q: "Human skills are equally important at all levels.", a: true },
{ type: "tf", q: "Conceptual skills involve specialized technical tools.", a: false },
{ type: "tf", q: "Administration focuses on thinking; management focuses on execution.", a: false },
{ type: "tf", q: "Division of work leads to specialization.", a: true },
{ type: "tf", q: "Unity of direction means one head and one plan.", a: true },
{ type: "tf", q: "Managers are responsible only for their own work.", a: false },
{ type: "tf", q: "Resources are inputs to the management process.", a: true },
{ type: "tf", q: "Discipline is not a Fayol principle.", a: false },
{ type: "tf", q: "First-line managers are supervisors or head nurses.", a: true },
{ type: "tf", q: "Management failure may occur due to poor planning.", a: true },
{ type: "tf", q: "Equity means kindness and justice.", a: true },
{ type: "tf", q: "Informational roles include monitor and spokesperson.", a: true },
{ type: "tf", q: "Technical skills decrease as managers move higher.", a: true },
{ type: "tf", q: "Authority and responsibility should be balanced.", a: true },
{ type: "tf", q: "Scientific management focuses on one best way.", a: true },
{ type: "tf", q: "Initiative encourages subordinates to carry out plans.", a: true },
{ type: "tf", q: "Management is only needed in large hospitals.", a: false },

/* ================= PART 3 : CRITICAL THINKING (41–50) ================= */

{
  type: "mcq",
  q: "Designing a 10-year hospital strategy uses which skill?",
  options: ["Technical", "Human", "Conceptual", "Diagnostic"],
  a: 2
},
{
  type: "mcq",
  q: "A head nurse weak in conflict resolution lacks:",
  options: ["Technical", "Human", "Conceptual", "Physical"],
  a: 1
},
{
  type: "mcq",
  q: "Conflicting orders from two superiors violate:",
  options: ["Division of work", "Unity of command", "Scalar chain", "Order"],
  a: 1
},
{ type: "tf", q: "Effective but inefficient means goals achieved with waste.", a: true },
{
  type: "mcq",
  q: "Management is continuous because:",
  options: [
    "It never stops while the organization exists",
    "It happens at night",
    "It is only planning",
    "It is done by one person"
  ],
  a: 0
},
{
  type: "mcq",
  q: "Ignoring information resources leads to:",
  options: ["Higher efficiency", "Management failure", "Successful planning", "Better staffing"],
  a: 1
},
{
  type: "mcq",
  q: "Centralization refers to concentration of:",
  options: ["Work", "Decision-making authority", "Staffing", "Physical resources"],
  a: 1
},
{ type: "tf", q: "Leader role is informational.", a: false },
{
  type: "mcq",
  q: "Comparing planned vs actual budget is:",
  options: ["Organizing", "Controlling", "Staffing", "Planning"],
  a: 1
},
{
  type: "mcq",
  q: "Right people and materials in right place refers to:",
  options: ["Equity", "Order", "Stability", "Discipline"],
  a: 1
}

];

console.log(questions.length); // ✅ 50

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
