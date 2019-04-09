(function() {
  const myQuestions = [
    {
      question: "*Use Strict* means that you can write Javascript with more leniency.(T/F)",
      answers: {
        True: "Yes, using the Use Strict directive allows for a more merciful JS",
        False: "The Use Strict directive actually allows JS to be harsher",
      },
      correctAnswer: "False"
    },
    {
      question: "Which of the following WILL NOT work under the *Use Strict* Directive?",
      answers: {
        A: "Var test = 'Hello World!'",
        B: "test = Hello World!",
        C: "Var cannabis = Legalize",
        D: "All of the Above",
      },
      correctAnswer: "D"
    },
    {
      question: "If you want to use *Use Strict*, do you have to place it at the very top of the document?",
      answers: {
        A: "Nope! You'll be able to place it where ever you deem it necessary.",
        B: "It depends on the JS you are planning to write.",
        C: "Yes! *Use Strict* must be placed at the top to avoid any potential syntax conflicts.",
        D: "Trick question, it must be placed on the bottom of the document.",
      },
      correctAnswer: "A"
    },
    {
      question: "Anything wrong with the following?-(You are using strict mode)- function sum(L, C, L) return L+C+L",
      answers: {
        A: "Nothing, looks good to me.",
        B: "Missing an *=* sign between the function and sum.",
        C: "Cannot have duplicate values.",
      },
      correctAnswer: "C"
    },
    {
      question: "JavaScript Quiz Part 2 *Variables*",
    },
    {
      question: "Which of the following can be used as keywords to create a variable?",
      answers: {
        A: "Cosnt",
        B: "Declare",
        C: "Ver",
        D: "for",
      },
      correctAnswer: "A"
    },
    {
      question: "When naming your variables, the best way is to use ________.",
      answers: {
        A: "Under scores then the name",
        B: "Upper camel case.",
        C: "Use numbers 0-9.",
        D: "Lower camel case.",
        
      },
      correctAnswer: "D"
    },
    {
      question: "JavaScript Quiz Part 3 *Functions*"
    },
    {
      question: "To create a function you need the _________ keyword then the ___________ and lastly the __________.",
      answers: {
        A: "function, arguement, name",
        B: "name, function, arguement",
        C: "function, name, arguement",
        D: "arguement, name, function",
        
      },
      correctAnswer: "C"
    },
    {
      question: "A nested function is able to communicate to the outer arugements and variables(T/F)",
      answers: {
        True: "Nope, nested functions are only able to communicate if they share the same space.",
        False: "Yep, nested functions are able to if they are called properly.",
      },
      correctAnswer: "True"
    },
    {
      question: "JavaScript Quiz Part 4 *Data Types*", 
    },
    {
      question: "What's the difference between *Local* and *Global* Variables?",
      answers: {
        A: "Local Variables can only communicate with functions they are nested into where as Global can work with any.",
        B: "Local and Global can be used interchangeably.",
        C: "Global Variables have presidence over Local if used together.",
      },
      correctAnswer: "A"
    },
    {
      question: "What does it mean when a Function Declaration is hoisted?",
      answers: {
        A: "Doesn't matter where it is within the code, it will be processed first.",
        B: "Can be processed before it is defined in the code.",
        C: "Doesn't need a variable to function.",
      },
      correctAnswer: "A"
    },
    {
      question: "JavaScript Quiz Part 5 *DOM, JS Objects, and BOM*", 
    },
    {
      question: "Which one is INCORRECT?",
      answers: {
        A: "Element[1]",
        B: "Text[3]",
        C: "Document[9]",
        D: "DocumentType[11]"
      },
      correctAnswer: "D"
    },
    {
      question: "The D.O.M is made up of *Trees* which are made up of *Nodes* (T/F)",
      answers: {
        True: "Absolutely",
        False: "Actually, Nodes are made up of Trees"
      },
      correctAnswer: "True"
    },
    {
      question: "Which of the following is NOT one of the B.O.M Window Methods?",
      answers: {
        A: "window.open",
        B: "window.moveTo",
        C: "window.resizeTo",
        D: "window.innerHeight"
      },
      correctAnswer: "D"
    },
    {
      question: "A(n) _________ is often used if you want to make sure information comes through to the user.",
      answers: {
        A: "Confirm Box",
        B: "Alert Box",
        C: "Prompt Box",
        D: "Confirmation Alert"
      },
      correctAnswer: "B"
    },
    {
      question: "If we wanted to access the Height property of our Object, what would we use?",
      answers: {
        A: "Object.Height",
        B: "properties.Object=Height",
        C: "#ObjectHeight",
        D: "Height.(Object)"
      },
      correctAnswer: "B"
    },
    {
      question: "Properties in an object are also called ______.",
      answers: {
        A: "Name Value Pairs",
        B: "Variables",
        C: "Properties",
        D: "Values"
      },
      correctAnswer: "A"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();