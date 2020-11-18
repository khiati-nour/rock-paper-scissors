(function() {
    document.getElementById("submit").addEventListener("click", function () {


        let learners = Math.floor(Math.random() * (22 - 1)) + 1;
        console.log(learners);
        let x = document.getElementById('guess').value



       if  (x == learners){
            alert("Awesome! You number " + " " + x + " " + " was correct. You can be named many things, hungry not being one of them.")}
       else if (x == (learners - 1)) {
            alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?")
        }
       else {
            alert("Bummer... You guessed" + " " + x + "and the secret number was" + " " + learners + ".")
        }


    })

})()