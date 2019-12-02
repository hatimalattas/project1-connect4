var activePlayer = 0;

var column1Index = 0;
var column2Index = 4;
var column3Index = 8;
var column4Index = 12;

$(document).ready(function()
{

    $("#column1").click(function()
    {
    if(activePlayer === 0 && $("#" + column1Index).hasClass("red") === false && $("#" + column1Index).hasClass("yellow") === false && column1Index < 4 === true) 
        {
        $("#" + column1Index).addClass("red");
        activePlayer++;
        column1Index++;
        console.log(activePlayer);
        checkWin();
        }
            
        else if(activePlayer === 1 && $("#" + column1Index).hasClass("red") === false && $("#" + column1Index).hasClass("yellow") === false && column1Index < 4 === true)
        {
        $("#" + column1Index).addClass("yellow");
        activePlayer--;
        column1Index++;
        console.log(activePlayer);
        checkWin();
        }
    });
    
    $("#column2").click(function()
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
    });
    
    $("#column3").click(function()
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
    });
    
    $("#column4").click(function()
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
    });
    
    function checkWin() 
    {
        if ($("#0").hasClass("red") === true && $("#1").hasClass("red") === true && $("#2").hasClass("red") === true && $("#3").hasClass("red") === true || $("#4").hasClass("red") === true && $("#5").hasClass("red") === true && $("#6").hasClass("red") === true && $("#7").hasClass("red") === true || $("#8").hasClass("red") === true && $("#9").hasClass("red") === true && $("#10").hasClass("red") === true && $("#11").hasClass("red") === true || $("#12").hasClass("red") === true && $("#13").hasClass("red") === true && $("#14").hasClass("red") === true && $("#15").hasClass("red") === true) {
            alert ("red player won!");
        }
        else if ($("#0").hasClass("yellow") === true && $("#1").hasClass("yellow") === true && $("#2").hasClass("yellow") === true && $("#3").hasClass("yellow") === true || $("#4").hasClass("yellow") === true && $("#5").hasClass("yellow") === true && $("#6").hasClass("yellow") === true && $("#7").hasClass("yellow") === true || $("#8").hasClass("yellow") === true && $("#9").hasClass("yellow") === true && $("#10").hasClass("yellow") === true && $("#11").hasClass("yellow") === true || $("#12").hasClass("yellow") === true && $("#13").hasClass("yellow") === true && $("#14").hasClass("yellow") === true && $("#15").hasClass("yellow") === true) {
            alert ("yellow player won!");
        }
    }
    
    });


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