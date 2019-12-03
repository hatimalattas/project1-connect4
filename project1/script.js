var activePlayer, column1Index, column2Index, column3Index, column4Index;


// 3 7 11 15
// 2 6 10 14
// 1 5  9 13
// 0 4  8 12

$(document).ready(function()
{
    newGame();
    console.log(activePlayer);

    $("#column1").click(function()
    {
        column1();
    });
    
    $("#column2").click(function()
    {
        column2();
    });
    
    $("#column3").click(function()
    {
        column3();   
    });
    
    $("#column4").click(function()
    {
        column4();
    });

    $("button").click(function()
    {
        newGame();
    });

    

    function column1 () 
    {
        if(activePlayer === 0 && $("#" + column1Index).hasClass("red") === false && $("#" + column1Index).hasClass("yellow") === false && column1Index < 4 === true) 
        {
        $("#" + column1Index).addClass("red");
        activePlayer++;
        column1Index++;
        console.log(activePlayer);
        checkWin();
        }
            
        else if (activePlayer === 1 && $("#" + column1Index).hasClass("red") === false && $("#" + column1Index).hasClass("yellow") === false && column1Index < 4 === true)
        {
        $("#" + column1Index).addClass("yellow");
        activePlayer--;
        column1Index++;
        console.log(activePlayer);
        checkWin();
        }
    }

    function column2 ()
    {
        if (activePlayer === 0 && $(column2Index).hasClass("red") === false && $(column2Index).hasClass("yellow") === false && column2Index < 8 === true) 
        {
        $("#" + column2Index).addClass("red");
        activePlayer++;
        column2Index++;
        console.log(activePlayer);
        checkWin();
        }
            
        else if(activePlayer === 1 && $(column2Index).hasClass("red") === false && $(column2Index).hasClass("yellow") === false && column2Index < 8 === true)
        {
        $("#" + column2Index).addClass("yellow");
        activePlayer--;
        column2Index++;
        console.log(activePlayer);
        checkWin();
        }
    }

    function column3 ()
    {
        if(activePlayer === 0 && $(column3Index).hasClass("red") === false && $(column3Index).hasClass("yellow") === false && column3Index < 12 === true) 
        {
        $("#" + column3Index).addClass("red");
        activePlayer++;
        column3Index++;
        console.log(activePlayer);
        checkWin();
        }
            
        else if(activePlayer === 1 && $(column3Index).hasClass("red") === false && $(column3Index).hasClass("yellow") === false && column3Index < 12 === true)
        {
        $("#" + column3Index).addClass("yellow");
        activePlayer--;
        column3Index++;
        console.log(activePlayer);
        checkWin();
        }
    };

    function column4()
    {
        if (activePlayer === 0 && $(column4Index).hasClass("red") === false && $(column4Index).hasClass("yellow") === false && column4Index < 16 === true) 
        {
        $("#" + column4Index).addClass("red");
        activePlayer++;
        column4Index++;
        console.log(activePlayer);
        checkWin();
        }
            
        else if (activePlayer === 1 && $(column4Index).hasClass("red") === false && $(column4Index).hasClass("yellow") === false && column4Index < 16 === true)
        {
        $("#" + column4Index).addClass("yellow");
        activePlayer--;
        column4Index++;
        console.log(activePlayer);
        checkWin();
        }
    }

    function checkWin() 
    {
        //red wins
        if ($("#0").hasClass("red") === true && $("#1").hasClass("red") === true && $("#2").hasClass("red") === true && $("#3").hasClass("red") === true || $("#4").hasClass("red") === true && $("#5").hasClass("red") === true && $("#6").hasClass("red") === true && $("#7").hasClass("red") === true || $("#8").hasClass("red") === true && $("#9").hasClass("red") === true && $("#10").hasClass("red") === true && $("#11").hasClass("red") === true || $("#12").hasClass("red") === true && $("#13").hasClass("red") === true && $("#14").hasClass("red") === true && $("#15").hasClass("red") === true || $("#0").hasClass("red") === true && $("#4").hasClass("red") === true && $("#8").hasClass("red") === true && $("#12").hasClass("red") === true || $("#1").hasClass("red") === true && $("#5").hasClass("red") === true && $("#9").hasClass("red") === true && $("#13").hasClass("red") === true || $("#2").hasClass("red") === true && $("#6").hasClass("red") === true && $("#10").hasClass("red") === true && $("#14").hasClass("red") === true || $("#3").hasClass("red") === true && $("#7").hasClass("red") === true && $("#11").hasClass("red") === true && $("#15").hasClass("red") === true || $("#0").hasClass("red") === true && $("#5").hasClass("red") === true && $("#10").hasClass("red") === true && $("#15").hasClass("red") === true || $("#3").hasClass("red") === true && $("#6").hasClass("red") === true && $("#9").hasClass("red") === true && $("#12").hasClass("red") === true) 
        {
            alert ("red player won!");
            newGame();
        }
        //yellow wins
        else if ($("#0").hasClass("yellow") === true && $("#1").hasClass("yellow") === true && $("#2").hasClass("yellow") === true && $("#3").hasClass("yellow") === true || $("#4").hasClass("yellow") === true && $("#5").hasClass("yellow") === true && $("#6").hasClass("yellow") === true && $("#7").hasClass("yellow") === true || $("#8").hasClass("yellow") === true && $("#9").hasClass("yellow") === true && $("#10").hasClass("yellow") === true && $("#11").hasClass("yellow") === true || $("#12").hasClass("yellow") === true && $("#13").hasClass("yellow") === true && $("#14").hasClass("yellow") === true && $("#15").hasClass("yellow") === true || $("#0").hasClass("yellow") === true && $("#4").hasClass("yellow") === true && $("#8").hasClass("yellow") === true && $("#12").hasClass("yellow") === true || $("#1").hasClass("yellow") === true && $("#5").hasClass("yellow") === true && $("#9").hasClass("yellow") === true && $("#13").hasClass("yellow") === true || $("#2").hasClass("yellow") === true && $("#6").hasClass("yellow") === true && $("#10").hasClass("yellow") === true && $("#14").hasClass("yellow") === true || $("#3").hasClass("yellow") === true && $("#7").hasClass("yellow") === true && $("#11").hasClass("yellow") === true && $("#15").hasClass("yellow") === true || $("#0").hasClass("yellow") === true && $("#4").hasClass("yellow") === true && $("#8").hasClass("yellow") === true && $("#12").hasClass("yellow") === true || $("#1").hasClass("yellow") === true && $("#5").hasClass("yellow") === true && $("#9").hasClass("yellow") === true && $("#13").hasClass("yellow") === true || $("#2").hasClass("yellow") === true && $("#6").hasClass("yellow") === true && $("#10").hasClass("yellow") === true && $("#14").hasClass("yellow") === true || $("#3").hasClass("yellow") === true && $("#7").hasClass("yellow") === true && $("#11").hasClass("yellow") === true && $("#15").hasClass("yellow") === true || $("#0").hasClass("yellow") === true && $("#5").hasClass("yellow") === true && $("#10").hasClass("yellow") === true && $("#15").hasClass("yellow") === true || $("#3").hasClass("yellow") === true && $("#6").hasClass("yellow") === true && $("#9").hasClass("yellow") === true && $("#12").hasClass("yellow") === true) 
        {
            alert ("yellow player won!");
            newGame();
        }
        // //tie (not working)
        // else if ($("#0").hasClass("red") === true || $("#0").hasClass("yellow") === true && $("#1").hasClass("red") === true || $("#1").hasClass("yellow") === true && $("#2").hasClass("red") === true || $("#2").hasClass("yellow") === true && $("#3").hasClass("red") === true || $("#3").hasClass("yellow") === true || $("#4").hasClass("red") === true || $("#4").hasClass("yellow") === true && $("#5").hasClass("red") === true || $("#5").hasClass("yellow") === true && $("#6").hasClass("red") === true || $("#6").hasClass("yellow") === true && $("#7").hasClass("red") === true || $("#7").hasClass("yellow") === true || $("#8").hasClass("red") === true || $("#8").hasClass("yellow") === true && $("#9").hasClass("red") === true || $("#9").hasClass("yellow") === true && $("#10").hasClass("red") === true || $("#10").hasClass("yellow") === true && $("#11").hasClass("red") === true || $("#11").hasClass("yellow") === true || $("#12").hasClass("red") === true || $("#12").hasClass("yellow") === true && $("#13").hasClass("red") === true || $("#13").hasClass("yellow") === true && $("#14").hasClass("red") === true || $("#14").hasClass("yellow") === true && $("#15").hasClass("red") === true || $("#15").hasClass("yellow") === true) 
        // {
        //     alert("it's a tie")
        //     newGame();
        // }
    }


    function newGame () 
    {
        console.log("newgame is functioning") 
        activePlayer = 0;
        console.log(activePlayer);
        column1Index = 0;
        column2Index = 4;
        column3Index = 8;
        column4Index = 12;
        dots = 0;

    for (var i = 0; i < 16; i++) 
        {
            $("#" + i).removeClass("red");
            $("#" + i).removeClass("yellow");
        }
    }
});

    // function checkWin() 
    // {
    //     let win;
    //     for (var i = 0; i <= 3; i++) 
    //     {
            
    //         if ($("#" + i).hasClass("red")) 
    //         {
    //             win = true;
    //         } else {
    //             win = false;
    //         }
    //     }

    //     if(win == true) {
    //         alert('win');
    //     }

// $(".dot").mouseover(function()
// {
//     if (activePlayer === 0 && $(this).hasClass("redHover") === false && $(this).hasClass("yellowHover") === false)
//     {
//     $(this).addClass("redHover");
//     }
//     else if (activePlayer === 1 && $(this).hasClass("redHover") === false && $(this).hasClass("yellowHover") === false)
//     {
//     $(this).addClass("yellowHover");
//     }
// });

// $(".dot").mouseout(function()
// {
//     if (activePlayer === 0)
//     {
//     $(this).removeClass("redHover");
//     }
//     else if (activePlayer === 1) 
//     {
//     $(this).removeClass("yellowHover");
//     }
// });

// $(".dot").click(function()
// {
// if(activePlayer === 0 && $(this).hasClass("red") === false && $(this).hasClass("yellow") === false) 
//     {
//     $(this).addClass("red");
//     activePlayer++;
//     console.log(activePlayer);
//     }
        
//     else if(activePlayer === 1 && $(this).hasClass("red") === false && $(this).hasClass("yellow") === false)
//     {
//     $(this).addClass("yellow");
//     activePlayer--;
//     console.log(activePlayer);
//     }
// });