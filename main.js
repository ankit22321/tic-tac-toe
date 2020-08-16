$(() => startGame());

let turn;
let count;
const winComb =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
startGame = () => {
    turn = "x";
    count=0;
    $(".board").addClass(turn);
    $(".cell").unbind( "click", handleCellClick );
    $(".cell").one('click',handleCellClick);
    $(".restart").click(restart);
    $(".closeModal").click(close);
    $("#restart").css("display","none");
    console.log(`Welcome TO Tic Tac Toe.....`);
}
handleCellClick = e => {
    console.log("cell clicked...");
    count++;
    $(e.target).addClass(turn);
    if(checkForWin()){
        matchOver("win");
    }
    else{
        if(count===9) matchOver("draw");
        else{
            turn = turn ==="x"?"o":"x";
         $(".board").removeClass("x o").addClass(turn);
        }
        
    }  
}
checkForWin = () => {
    let win;
    winComb.some(function(comb){
        win = true;
        comb.map(function(x){
            if(!$(".cell:nth-child("+(x+1)+")").hasClass(turn)){
                win = false
            }
        })
        if(win === true) 
            return true;    
    });
    if(win === true)
        return true;
    else
        return false;
}
matchOver = (status) => {
        $(".board").removeClass(turn);
    if(status === "win"){
        console.log("winner....");
        $(".modal-title").html(`Congratulations.......`);
        $(".winMessage").html(`'${turn.toUpperCase()}' Wins!!!`);
        $('#myModal').modal('show'); 
    }
    else{
        console.log("Match Drawn....");
        $(".modal-title").html(`Match Drawn.......`);
        $(".winMessage").html(`No Winner....!!!`);
        $('#myModal').modal('show'); 
    }
}
restart = () => {
    $(".x").removeClass("x");
    $(".o").removeClass("o");
    startGame();
}
close = () => {
    $("#restart").css("display","block");
}
