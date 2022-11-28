        const quizData = [
            {
                question: "How many hours in 90 minutes?",
                a: "1.5 hours",
                b: "1.30 hours",
                c: "1 hour",
                d: "None of these",
                correct: "a",
            },
            {
                question: "What is the remainder of 21 divided by 7?",
                a: "21",
                b: "7",
                c: "1",
                d: "None of these",
                correct: "d",
            },
            {
                question: "How many years are there in a decade?",
                a: "5",
                b: "10",
                c: "15",
                d: "25",
                correct: "b",
            },

            {
                question: " In a century how many months are there?",
                a: "12",
                b: "120",
                c: "1200",
                d: "12000",
                correct: "c",
            },

            {
                question: "Find the sum of 111 + 222 + 333?",
                a: "700",
                b: "666",
                c: "10",
                d: "100",
                correct: "b",
            }
        ];

        const quiz= document.getElementById('quiz')
        const answerEls = document.querySelectorAll('.answer')
        const questionEl = document.getElementById('question')
        const a_text = document.getElementById('a_text')
        const b_text = document.getElementById('b_text')
        const c_text = document.getElementById('c_text')
        const d_text = document.getElementById('d_text')
        const submitBtn = document.getElementById('submit')
        let currentQuiz = 0
        let score = 0
        loadQuiz()
        function loadQuiz() {
            deselectAnswers()
            const currentQuizData = quizData[currentQuiz]
            questionEl.innerText = currentQuizData.question
            a_text.innerText = currentQuizData.a
            b_text.innerText = currentQuizData.b
            c_text.innerText = currentQuizData.c
            d_text.innerText = currentQuizData.d
        }
        function deselectAnswers() {
            answerEls.forEach(answerEl => answerEl.checked = false)
        }
        function getSelected() {
            let answer
            answerEls.forEach(answerEl => {
                if(answerEl.checked) {
                    answer = answerEl.id
                }
            })
            return answer
        }
        submitBtn.addEventListener('click', () => {
            const answer = getSelected()
            if(answer) {
               if(answer === quizData[currentQuiz].correct) {
                   score++
               }
               currentQuiz++
               if(currentQuiz < quizData.length) {
                   loadQuiz()
               } else {
                   quiz.innerHTML = `
                   <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                   <button onclick="location.reload()">Reload</button>
                   `
               }
            }
        })