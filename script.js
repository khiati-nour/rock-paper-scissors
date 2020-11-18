let choice="";

function doSomething(b){
    choice = b.value;

        

};
(function() {




   /* document.getElementById("rock").onclick = function () {
        alert("button was clicked");
    };
    document.getElementById("scissors").onclick = function () {
        alert("button was clicked");
    };
    document.getElementById("paper").onclick = function () {
        alert("button was clicked");
    };*/

   /* var reply_click = function()
    {
        alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    }
    document.getElementById('rock').onclick = reply_click;
    document.getElementById('scissors').onclick = reply_click;
    document.getElementById('paper').onclick = reply_click;*/
    document.getElementById('playAgain').style.visibility = "hidden";


    document.getElementById("play").addEventListener("click", function () {

        document.getElementById('play').style.visibility = "hidden";
        var score = 0;
        var pick = ["scissors", "rock","paper"];
        var randomItem = pick[Math.floor(Math.random()*pick.length)];


if (choice == "")
{
    alert("pleas choose ")
}
else
    if (choice==randomItem){

        alert("draw")
    }
    else


            if (choice == "rock" && randomItem == "scissors") {
                                score = 1 + score;
                alert("rock win" + " " + choice + "=" + " " + randomItem + " " + score)

            } else if (choice == "scissors" && randomItem == "paper") {
                alert("you win" + " " + choice + " " + "=" + " " + randomItem + " " + score)

            } else if (choice == "paper" && randomItem == "rock") {
                score = 1 + score;
                alert("you win" + " " + choice + " " + "=" + " " + randomItem + " " + score)
                score = 1 + score;

            } else {
                alert("you lose" + " " + choice + " " + "=" + " " + randomItem + " " + score)
                score = 1 + score;

            }
        document.getElementById('playAgain').style.visibility = "visible";

    })
        document.getElementById("playAgain").addEventListener("click", function () {
            document.getElementById('play').style.visibility = "visible";
            document.getElementById('playAgain').style.visibility = "hidden";

        })



})();
