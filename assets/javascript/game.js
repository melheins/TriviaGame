$(document).ready(function () {

    /* INITIAL LOAD SETUP*/

    //Hide sections on initial load
    $(".score").hide();
    $(".timer").hide();

    /* GLOBAL VARIABLES */

    //Creates variable to hold the time limit amount
    var counter;
    // Creates variable to hold number of correct answers
    var correctAnswers = 0;
    // Creates variable to hold number of wrong answers
    var incorrectAnswers = 0;
    // Creates variable to hold number of un-answered questions
    var unansweredQuestions = 0;

    // Creates variable to hold questions
    var questions = [
        // question 1 - Expanse
        {
            "id": 0,
            "image_loc": "assets/images/1.jpg",
            "description": "A police detective in the asteroid belt, the first officer of an interplanetary ice freighter and an earth-bound United Nations executive slowly discover a vast conspiracy that threatens the Earth's rebellious colony on the asteroid belt.",
            "choices": ["Expanse", "Dark Matter", "Continuum"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 2 - BSG
        {
            "id": 1,
            "image_loc": "assets/images/2.jpg",
            "description": "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of an aged military vessel protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 3 - Andromeda
        {
            "id": 2,
            "image_loc": "assets/images/3.jpg",
            "description": "Captain Hunt and the crew of the Starship Andromeda set out on a mission to rebuild the Systems Commonwealth 300 years after its fall.",
            "choices": ["Stargate SG-1", "Andromeda", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 4 - Continuum
        {
            "id": 3,
            "image_loc": "assets/images/4.jpg",
            "description": "A detective from the year 2077 finds herself trapped in present day Vancouver and searching for ruthless criminals from the future.",
            "choices": ["Stargate SG-1", "Continuum", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 5 - Dark Matter
        {
            "id": 4,
            "image_loc": "assets/images/5.jpg",
            "description": "Six people wake up on a deserted spaceship. They can't remember who they are or what they're doing there. They set off to find answers.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 2,
            "status": ''
        },
        // question 6 - Farscape
        {
            "id": 5,
            "image_loc": "assets/images/6.jpg",
            "description": "Thrown into a distant part of the universe, an Earth astronaut finds himself part of a fugitive alien starship crew.",
            "choices": ["Farscape", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 7 - Killjoys
        {
            "id": 6,
            "image_loc": "assets/images/7.jpg",
            "description": "In the Quad, a planetary system on the brink of a bloody interplanetary class war, a fun loving trio of bounty hunters attempt to remain impartial as they chase deadly warrants.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Killjoys"],
            //location of answer in choices array
            "answer": 2,
            "status": ''
        },
        // question 8 - SG-1
        {
            "id": 7,
            "image_loc": "assets/images/8.jpg",
            "description": "A secret military team, SG-1, is formed to explore the recently discovered Stargates.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 9 - Defiance
        {
            "id": 8,
            "image_loc": "assets/images/9.jpg",
            "description": "In the year 2046, it's a new Earth - with new rules. Over thirty years after various alien races arrived on Earth, the landscape is completely altered, terraformed nearly beyond recognition.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Defiance"],
            //location of answer in choices array
            "answer": 2,
            "status": ''
        },
        // question 10 - 12 Monkeys
        {
            "id": 9,
            "image_loc": "assets/images/10.jpg",
            "description": "Follows the journey of a time traveler from the post-apocalyptic future who appears in present day on a mission to locate and eradicate the source of a deadly plague that will nearly destroy the human race.",
            "choices": ["12 Monkeys", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 11 - Alphas
        {
            "id": 10,
            "image_loc": "assets/images/11.jpg",
            "description": "Dr. Lee Rosen leads a team of \"Alphas\", (human beings with enhanced abilities) who investigate the death of a witness in a court case. They soon uncover more than they had bargained for.",
            "choices": ["Stargate SG-1", "Alphas", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 12 - Haven
        {
            "id": 11,
            "image_loc": "assets/images/12.jpg",
            "description": "Everyone in the coastal town of Haven, Maine has a dormant curse or \"trouble\" that could trigger at any time for any reason. FBI agent Audrey Parker, the sheriff and the town's black sheep must deal with the troubles' deadly effects.",
            "choices": ["Haven", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 13 - Lost Girl
        {
            "id": 12,
            "image_loc": "assets/images/13.jpg",
            "description": "A charismatic woman learns she is a succubus, a supernatural being who feeds off the sexual energy of humans. While trying to find out more about her past, she faces a choice between the light and the dark side of an underworld group of other supernatural beings known as Faes.",
            "choices": ["Lost Girl", "Haven", "Dark Matter"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 14 - Helix
        {
            "id": 13,
            "image_loc": "assets/images/14.jpg",
            "description": "A team of scientists are thrust into a potentially life-or-death situation when they arrive in the Arctic to secretly investigate what could be an outbreak of a strange disease in a secluded international research facility.",
            "choices": ["Stargate SG-1", "Helix", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 15 - Sanctuary
        {
            "id": 14,
            "image_loc": "assets/images/15.jpg",
            "description": "Stem cells, gene therapy, transplants, and cloning have changed the definition of \"humanity\" in the modern world, but the darker side contains monsters that only few are brave enough to face, because the future lies in their hands.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Sanctuary"],
            //location of answer in choices array
            "answer": 2,
            "status": ''
        },
        // question 16 - Being Human
        {
            "id": 15,
            "image_loc": "assets/images/16.jpg",
            "description": "A team of scientists are thrust into a potentially life-or-death situation when they arrive in the Arctic to secretly investigate what could be an outbreak of a strange disease in a secluded international research facility.",
            "choices": ["Stargate SG-1", "Being Human", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 17 - Eureka
        {
            "id": 16,
            "image_loc": "assets/images/17.jpg",
            "description": "A U.S. Marshall becomes the sheriff of a remote cozy little Northwestern town of Eureka where the best minds in the US have secretly been tucked away to build futuristic inventions for the government which often go disastrously wrong.",
            "choices": ["Eureka", "Battlestar Galactica", "Dark Matter"],
            //location of answer in choices array
            "answer": 0,
            "status": ''
        },
        // question 18 - Dominion
        {
            "id": 17,
            "image_loc": "assets/images/18.jpg",
            "description": "Follows the perilous journey of a rebellious young soldier who discovers he's the unlikely savior of humanity.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Dominion"],
            //location of answer in choices array
            "answer": 2,
            "status": ''
        },
        // question 19 - Stargate Atlantis
        {
            "id": 18,
            "image_loc": "assets/images/19.jpg",
            "description": "An international team of scientists and military personnel discover a Stargate network in the Pegasus Galaxy and come face-to-face with a new, powerful enemy, The Wraith.",
            "choices": ["Stargate SG-1", "Battlestar Galactica", "Stargate Atlantis"],
            //location of answer in choices array
            "answer": 2,
            "status": ''
        },
        // question 20 - The Magicians
        {
            "id": 19,
            "image_loc": "assets/images/20.jpg",
            "description": "After being recruited to a secretive academy, a group of students discover that the magic they read about as children is very real-and more dangerous than they ever imagined.",
            "choices": ["Stargate SG-1", "The Magicians", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        },
        // question 21 - Warehouse 13
        {
            "id": 20,
            "image_loc": "assets/images/21.jpg",
            "description": "A pair of U.S Secret Service agents are whisked away to a covert location in South Dakota that houses supernatural objects that the Regents, an Authority above and outside any government, have collected over the centuries. Their new assignment: retrieve lost objects called Artifacts.",
            "choices": ["Stargate SG-1", "Warehouse 13", "Dark Matter"],
            //location of answer in choices array
            "answer": 1,
            "status": ''
        }
    ];

    /* FUNCTIONS */

    // Function to check if element is empty
    function isEmpty(el) {
        return !$.trim(el.html())
    }

    // Function to empty all the game populated sections
    function clearGameDivs() {
        $('#question-area').empty();

    }

    // Function to hide a specific element or section
    function hideItem(tag) {
        $(tag).addClass('hidden');
    }

    // Function to un-hide a specific element or section
    function unhideItem(tag) {
        $(tag).removeClass('hidden');
    }

    var qCount = 0;

    // Function to create characters for Character Select
    function questionCreation() {

        // Create an showChar
        var showImage = $("<img>");

        // Add css image classes to image
        showImage.addClass("show-image img-rounded img-responsive");

        // Each showChar will be given a src link to the current questions's image
        showImage.attr("src", questions[qCount].image_loc);

        var questionOuterDiv = $("<div>");
        questionOuterDiv.addClass("panel panel-default");


        var questionHeaderText = "<div class='panel-heading bg-black'><h3 class='panel-title'>Show " + (qCount + 1) + "</h3></div>";

        var questionAnswerList = $("<ul>");
        questionAnswerList.addClass("list-group answer-list").attr("questnum", qCount);
        questionAnswerList.attr('id', 'answer-area');

        for (var a = 0; a < questions[qCount].choices.length; a++) {
            var newChoice = $("<li>");
            newChoice.addClass("list-group-item answer").attr("indexnum", a).text(questions[qCount].choices[a]);
            questionAnswerList.append(newChoice);
        }
        var questionInnerBlock = $("<div>");
        questionInnerBlock.addClass("question-block");

        var questionDescription = "<p class='question-text'>" + questions[qCount].description + "</p>";
        questionInnerBlock.append(showImage, questionDescription, "<h4 class='question-title'>Select Answer Below</h4>", questionAnswerList);

        var questionInnerDiv = $("<div>");
        questionInnerDiv.addClass("question-box panel-body");
        questionInnerDiv.append(questionInnerBlock);

        questionOuterDiv.append(questionHeaderText, questionInnerDiv);

        $(".questions").append(questionOuterDiv);


        console.log("question creation");
        $("#question-area").on("click", ".answer", answerSelect);


    }

    // Function that resets the game back to the starting point
    function reset() {

        //Set time to 30 seconds
        counter = 30;

        //
        qCount = 0;

        // Remove previous game data
        clearGameDivs();

        // Create Characters for Character Select
        questionCreation();

        //Start Timer
        timerWrapper();

        //Hide score section
        $(".score").hide();
        $(".timer").show();
        $(".questions").show();
    }


    /* TIMER STUFF*/

    function timerWrapper() {
        $(".timer-box").html(timeConverter(counter));

        clock = setInterval(countDown, 1000);

        function countDown() {
            if (counter === 0) {
                clearInterval(clock);
                console.log("timeout");
                $('#question-area').off('click');

                document.querySelector('.correctCnt').innerHTML = correctAnswers;
                document.querySelector('.incorrectCnt').innerHTML = incorrectAnswers;
                document.querySelector('.unansweredCnt').innerHTML = unansweredQuestions;
                unansweredQuestions++;

                var questionId = $('.answer-list').attr("questnum");
                var correctAnswerId = questions[questionId].answer;
                $('.answer[indexnum=' + correctAnswerId + ']').addClass('list-group-item-success').append("<span class='badge'>Correct Answer</span>");

                setTimeout(nextQuestion, 4000);
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer-box").html(timeConverter(counter));
        }

        function timeConverter(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        }
    }

    function nextQuestion() {
        clearInterval(clock);
        // Generate next question, or end game.
        if (qCount < (questions.length - 1)) {
            console.log("continue");
            $('#question-area').empty();
            qCount++;
            questionCreation();
            counter = 30;
            timerWrapper();
        } else {
            console.log("end");
            $(".questions").hide();
            $(".score").show();
            $(".timer").hide();
            document.querySelector('.correctCnt').innerHTML = correctAnswers;
            document.querySelector('.incorrectCnt').innerHTML = incorrectAnswers;
            document.querySelector('.unansweredCnt').innerHTML = unansweredQuestions;
        }
    }

    /* ON CLICK EVENTS */


    function answerSelect() {

        $('#question-area').off('click');

        console.log("------answer selection-----");

        var answerId = $(this).attr("indexnum");
        answerId = parseInt(answerId);

        var questionId = $(this).parent().attr("questnum");

        var correctAnswerId = questions[questionId].answer;

        if (answerId === correctAnswerId) {
            console.log("correct answer");
            $(this).addClass("list-group-item-success").append("<span class='badge'>&#10004;</span>");
            correctAnswers++;
            //document.querySelector('.question-text').innerHTML = "CORRECT";
        } else {
            console.log("wrong answer");
            $(this).addClass("list-group-item-danger").append("<span class='badge'>&#10008;</span>");
            incorrectAnswers++;
            //document.querySelector('.question-text').innerHTML = "WRONG";
            // Highlight Correct Answer
            $('.answer[indexnum=' + correctAnswerId + ']').addClass('list-group-item-success').append("<span class='badge'>Correct Answer</span>");
        }

        setTimeout(nextQuestion, 9000);
        //nextQuestion();

    }


    // On Restart Game Button Click
    $(".btn-restartGame").click(function () {
        $("#start-game").hide();
        reset();
    });


});
