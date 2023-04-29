function maingame() {
    

    let userScore =0;
    let compScore =0;
    let movesleft =10;
    const userimg = document.getElementById("userpic")
    const compimg = document.getElementById("comppic")
    const mainarea = document.getElementById("main");
    const move_count = document.getElementById("moves");
    const userscorespan = document.getElementById("userscore");
    const compscorespan = document.getElementById("compscore");
    const result_div= document.querySelector(".result > h2");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");
    const gameover = document.getElementById("gameover");
    const finalresult = document.getElementById("end");
    const winner = document.getElementById("end");
    const restart = document.getElementById("btn")
    const cw =document.getElementById("cw")
    const uw =document.getElementById("uw")

    function getcompchoice() {
        const choices=['r','p','s'];
        const randomno = Math.floor(Math.random()*3);
        return choices[randomno];
    } 
    function convertToWord(letter){
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        if (letter === "s") return "Scissors";   
    }



    function game(userchoice) {
        const compchoice = getcompchoice();
        switch (userchoice) {
            case "r":
                userimg.src="images/urock.png"
                break;
            case "p":
                userimg.src="images/upaper.png"
                break;
            case "s":
                userimg.src="images/uscissor.png"
                break;
            }
        switch (compchoice) {
            case "r":
                compimg.src="images/crock.png"
                break;
            case "p":
                compimg.src="images/cpaper.png"
                break;
            case "s":
                compimg.src="images/cscissor.png"
                break;;
        }
        switch (userchoice + compchoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userchoice,compchoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userchoice,compchoice);    
            break;
            case "rr":
            case "pp":
            case "ss":
                draw(userchoice,compchoice);
                break;
        }
    }
    function win(userchoice, compchoice) {
        userScore++;
        movesleft-=1;
        const effect = document.getElementById(userchoice);
        userscorespan.innerHTML = userScore;
        compscorespan.innerHTML = compScore;
        result_div.innerHTML = convertToWord(userchoice) + " beats " + convertToWord(compchoice) + ". You win! "
        effect.classList.add('green-glow');
        setTimeout(() => effect.classList.remove('green-glow'), 400);
        move_count.innerHTML = movesleft;
        checkifwon()
        cw.innerHTML = ""
        uw.innerHTML = "(w)"
    
    }
    function lose(userchoice,compchoice) {
        compScore++
        movesleft-=1;
        const effect = document.getElementById(userchoice);
        userscorespan.innerHTML = userScore;
        compscorespan.innerHTML = compScore;
        result_div.innerHTML = convertToWord(userchoice) + " beats " + convertToWord(compchoice) + ". You lose! "
        effect.classList.add('red-glow');
        setTimeout(() => effect.classList.remove('red-glow'), 400);
        move_count.innerHTML = movesleft;
        checkifwon()
        cw.innerHTML = "(w)"
        uw.innerHTML = ""
    }
    function draw(userchoice,compchoice) {
        const effect = document.getElementById(userchoice);
        movesleft-=1;
        userscorespan.innerHTML = userScore;
        compscorespan.innerHTML = compScore;
        result_div.innerHTML = "Both choose " + convertToWord(userchoice) + ". Its a Draw"
        effect.classList.add('grey-glow');
        setTimeout(() => effect.classList.remove('grey-glow'), 400);
        move_count.innerHTML = movesleft;
        checkifwon()
        cw.innerHTML = ""
        uw.innerHTML = ""
    }
    function checkifwon() {
        if (movesleft === 0) {
            mainarea.style.display = 'none';
            gameover.style.display = 'block';
            finalresult.style.display = 'block';
            document.getElementById("btn").style.display = 'block';
            if (userScore > compScore) {
                winner.innerHTML = "You have won!";}
            if (userScore < compScore) {
                winner.innerHTML = "Computer has won!";}
            if (userScore === compScore) {
                winner.innerHTML = "Its a draw!";}    ``
            rock_div.style.pointerEvents = 'none';
            paper_div.style.pointerEvents = 'none';
            scissors_div.style.pointerEvents = 'none';
            
            
            restart.addEventListener('click',() => {
                window.location.reload();})
        
            }
           
    }

    function main() {
        rock_div.addEventListener('click', function() {
            game("r")
           
    }
        )

        paper_div.addEventListener('click', function() {
            game("p");
        })

        scissors_div.addEventListener('click', function() {
            game("s");
        })
    }
    main();



}



maingame()