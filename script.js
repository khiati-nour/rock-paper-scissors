let choice="";
let my_score = 0;
let pc_score = 0;
let num_rounds = 3;
let round = 1;

/*function addGlow(btn) {
   var btn = document.getElementById("btn");
    btn.classList.add("glow");
}*/


function check(b) {
    choice = b.value;
    b.classList.add("glow")
}

    (function() {

        document.getElementById('playAgain').style.visibility = "hidden";




        document.getElementById("play").addEventListener("click", function () {


        var pick = ["scissors", "rock", "paper"];
        var randomItem = pick[Math.floor(Math.random() * pick.length)];


          if (choice == "") {
            alert("pleas choose scissors or rock or paper ")
        } else if (choice == randomItem) {


               document.getElementById('target').innerHTML = "draw";
            document.getElementById('target').style.color = "yellow";

        } else if (choice == "rock" && randomItem == "scissors") {
            my_score+=1;
               document.getElementById('target').innerHTML =  choice+ " " + "vs" + " " + randomItem +" <br> " +" <h1>score</h1> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
              document.getElementById('target').style.color = "red";


            } else if (choice == "scissors" && randomItem == "paper") {
               my_score+=1;
               document.getElementById('target').innerHTML = choice+ " " + "vs" + " " + randomItem +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
              document.getElementById('target').style.color = "blue";



            } else if (choice == "paper" && randomItem == "rock") {
            my_score+=1;
               document.getElementById('target').innerHTML = choice+ " " + "vs" + " " + randomItem +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
              document.getElementById('target').style.color = "orange";


            } else {
            pc_score+=1;
               document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomItem +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
              document.getElementById('target').style.color = "grey";


            }
            if (round == num_rounds){
                if (my_score == pc_score){
                    alert("draw! " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }
                else if (my_score >=2){
                    alert("you win " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }else{
                    alert("you lose " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }
                document.getElementById('play').style.visibility = "hidden";
                document.getElementById('playAgain').style.visibility = "visible";
                round = 1;
                my_score = 0;
                pc_score = 0;
            }else{
                document.getElementById('play').style.visibility = "visible";
                document.getElementById('playAgain').style.visibility = "hidden";
                round+=1;
            }






        })
        document.getElementById("play100").addEventListener("click", function () {
            var r = ["scissors"];
            var s = ["paper"];
            var p = ["rock"]
            var randomr = r[Math.floor(Math.random() * r.length)];
            var randoms = s[Math.floor(Math.random() * s.length)];
            var randomp = p[Math.floor(Math.random() * p.length)];

            if (choice == "") {
                alert("pleas choose scissors or rock or paper ")
            }  else if (choice == "rock" ) {



                if ( randomr == "scissors") {
                    my_score += 1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomr +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "pink";
                }
                else if (randomr == "rock") {

                    document.getElementById('target').innerHTML = "draw";


                } else {
                    pc_score+=1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomr +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "brown";


                }


            } else if (choice == "scissors" ) {

                if ( randoms == "paper") {
                    my_score+=1;

                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randoms +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "purple";


                }
                else if (randoms == "scissors") {

                    document.getElementById('target').innerHTML = "draw";


                }

                else {
                    pc_score+=1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randoms +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "brown";

                }




            } else if (choice == "paper") {
                if (randomp == "rock") {
                    my_score += 1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomp +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "blue";

                }   else if (randomp == "paper") {

                    document.getElementById('target').innerHTML = "draw";


                }else {
                    pc_score += 1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomp +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "pink";


                }
            }
            if (round == num_rounds){
                if (my_score == pc_score){
                    alert("draw! " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }
                else if (my_score >=2){
                    alert("you win " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }else{
                    alert("you lose " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }
                document.getElementById('play').style.visibility = "hidden";
                document.getElementById('playAgain').style.visibility = "visible";
                round = 1;
                my_score = 0;
                pc_score = 0;
            }else{
                document.getElementById('play').style.visibility = "visible";
                document.getElementById('playAgain').style.visibility = "hidden";
                round+=1;
            }







        })
        document.getElementById("play75").addEventListener("click", function () {
            var r = ["scissors","scissors","scissors","scissors","scissors","scissors", "rock", "paper"];
            var s = ["paper","paper","paper","paper","paper","paper", "scissors","rock"];
            var p = ["rock","rock","rock","rock","rock","rock", "paper","scissors"]
            var randomr = r[Math.floor(Math.random() * r.length)];
            var randoms = s[Math.floor(Math.random() * s.length)];
            var randomp = p[Math.floor(Math.random() * p.length)];

            if (choice == "") {
                alert("pleas choose scissors or rock or paper ")
                 }  else if (choice == "rock" ) {



                   if ( randomr == "scissors") {
                       my_score += 1;
                       document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomr +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                       document.getElementById('target').style.color = "grey";                   }
                   else if (randomr == "rock") {

                       document.getElementById('target').innerHTML = "draw";


                   } else {
                    pc_score+=1;
                       document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomr +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                       document.getElementById('target').style.color = "red";


                }


            } else if (choice == "scissors" ) {

                if ( randoms == "paper") {
                    my_score+=1;

                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randoms +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "yellow";


                }
                else if (randoms == "scissors") {

                    document.getElementById('target').innerHTML = "draw";


                }

                else {
                    pc_score+=1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randoms +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "purple";


                }




            } else if (choice == "paper") {
                if (randomp == "rock") {
                    my_score += 1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomp +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "brown";

                }   else if (randomp == "paper") {

                    document.getElementById('target').innerHTML = "draw";


                }else {
                    pc_score += 1;
                    document.getElementById('target').innerHTML= choice+ " " + "vs" + " " + randomp +" <br> " +" <h3>score</h3> <br>user vs pc <br>  " + my_score+ ":" + pc_score;
                    document.getElementById('target').style.color = "red";


                }
            }
            if (round == num_rounds){
                if (my_score == pc_score){
                    alert("draw! " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }
                else if (my_score >=2){
                    alert("you win " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }else{
                    alert("you lose " + " score(user vs pc): " + my_score+ ":" + pc_score);
                }
                document.getElementById('play').style.visibility = "hidden";
                document.getElementById('playAgain').style.visibility = "visible";
                round = 1;
                my_score = 0;
                pc_score = 0;
            }else{
                document.getElementById('play').style.visibility = "visible";
                document.getElementById('playAgain').style.visibility = "hidden";
                round+=1;
            }







        })



        document.getElementById("playAgain").addEventListener("click", function () {
            document.getElementById('play').style.visibility = "visible";
            document.getElementById('playAgain').style.visibility = "hidden";
        })

    })();



