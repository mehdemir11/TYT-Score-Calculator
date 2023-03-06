// correct answer  = 4 point
//  40 math,40 literature,20 history,20 science = 480point  //! A STUDENT MAY HAVE MAX 480 POINT FROM TYT EXAM
//  high school score * 0.6 //! A STUDENT MAY HAVE MAX 60 POINT FROM HIGHSCHOOL
//  GOVERNMENT = + 60 //! GOVERNMENT GIVES MAX 60 POINT WITH EXTREME PROJECT FOR GIFTED STUDENTS
// ! ONE STUDENT MAY HAVE ONLY 600 POINT. NOT MORE.
let literaturCorrect,
  literaturWrong = 0;
let mathCorrect,
  mathWrong = 0;
let historyCorrect,
  historyWrong = 0;
let scienceCorrect,
  scienceWrong = 0;
let results = 0;
let highschoolScore = 0;
let osymProject = 0;
let newLine = "\r\n";
let welcome =
  "Welcome to the Point Calculator for Turkish Colleges" +
  newLine +
  "1 - Calculate" +
  newLine +
  "2 - Safe Quit";

//   alert(welcome)
let value = prompt(welcome);
switch (value) {
  case "1":
    literaturCorrect = Number(
      prompt("How many correct answer do you have on Literature?")
    );
    literaturWrong = Number(
      prompt("How many wrong answer do you have on Literature?")
    );

    mathCorrect = Number(
      prompt("How many correct answer do you have on Math?")
    );
    mathWrong = Number(prompt("How many wrong answer do you have on Math?"));

    historyCorrect = Number(
      prompt("How many correct answer do you have on History?")
    );
    historyWrong = Number(
      prompt("How many wrong answer do you have on History?")
    );

    scienceCorrect = Number(
      prompt("How many correct answer do you have on Science?")
    );
    scienceWrong = Number(
      prompt("How many wrong answer do you have on Science?")
    );
    highschoolScore = Number(prompt("How about your highschool score?"));
    osymProject = Number(
      prompt(
        "How about OSYM Project?" +
          newLine +
          "If you did not a project please enter 0"
      )
    );
    let amountOfCorrect =
      literaturCorrect + mathCorrect + historyCorrect + scienceCorrect;
    let amountOfWrong =
      literaturWrong - mathWrong - historyWrong - scienceWrong;
    let examScore = (amountOfCorrect - amountOfWrong / 4) * 4;
    results = examScore + highschoolScore * 0.6 + osymProject * 0.6;
    alert("Your TYT Score is : " + results);
    break;
  case "2":
    break;
  default:
    alert("Please enter a valid value.");
    break;
    return;
}
