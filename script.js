var activePlayer, columns, turnPlayer; 

$(document).ready(function()
{
    newGame();
    // activePlayer(); 
    
    $("#column1").click(function()
    {
        if(activePlayer === 0 && $("#" + columnIndex[0]).hasClass("red") === false && $("#" + columnIndex[0]).hasClass("yellow") === false && columnIndex[0] < 4 === true) 
        {
        $("#" + columnIndex[0]).addClass("red");
        activePlayer++;
        columnIndex[0]++;
        $(".active2").text("Active")
        $(".active1").text("")   
        }
            else if (activePlayer === 1)
        {
        $("#" + columnIndex[0]).addClass("yellow");
        activePlayer--;
        columnIndex[0]++;
        $(".active1").text("Active")
        $(".active2").text("")
        }
        checkWin();
        
    });
    
    $("#column2").click(function()
    {
        if (activePlayer === 0 && $(columnIndex[1]).hasClass("red") === false && $(columnIndex[1]).hasClass("yellow") === false && columnIndex[1] < 8 === true) 
        {
        $("#" + columnIndex[1]).addClass("red");
        activePlayer++;
        columnIndex[1]++;
        $(".active2").text("Active")
        $(".active1").text("")   
        }
            else if(activePlayer === 1)
        {
        $("#" + columnIndex[1]).addClass("yellow");
        activePlayer--;
        columnIndex[1]++;
        $(".active1").text("Active")
        $(".active2").text("")

        }
        checkWin();
   
    });
    
    $("#column3").click(function()
    {
        if(activePlayer === 0 && $(columnIndex[2]).hasClass("red") === false && $(columnIndex[2]).hasClass("yellow") === false && columnIndex[2] < 12 === true) 
        {
        $("#" + columnIndex[2]).addClass("red");
        activePlayer++;
        columnIndex[2]++;
        $(".active2").text("Active")
        $(".active1").text("")   
        }
            
        else if(activePlayer === 1) 
        {
        $("#" + columnIndex[2]).addClass("yellow");
        activePlayer--;
        columnIndex[2]++;
        $(".active1").text("Active")
        $(".active2").text("")
        }
        checkWin();
   
    });
    
    $("#column4").click(function()
    {
        if (activePlayer === 0 && $(columnIndex[3]).hasClass("red") === false && $(columnIndex[3]).hasClass("yellow") === false && columnIndex[3] < 16 === true) 
        {
        $("#" + columnIndex[3]).addClass("red");
        activePlayer++;
        columnIndex[3]++;
        $(".active2").text("Active")
        $(".active1").text("")   
        }
           
        else if (activePlayer === 1)
        {
        $("#" + columnIndex[3]).addClass("yellow");
        activePlayer--;
        columnIndex[3]++;
        $(".active1").text("Active")
        $(".active2").text("")
        }
        checkWin();
       
    });

        $(".columns").mouseover(function()
    {
        if (activePlayer === 0 && $(this).hasClass("redHover") === false && $(this).hasClass("yellowHover") === false)
        {
        $(this).addClass("redHover");
        }
        else if (activePlayer === 1)
        {
        $(this).addClass("yellowHover");
        }
    });

    $(".columns").mouseout(function()
    {
        if (activePlayer === 0)
        {
        $(this).removeClass("redHover");
        $(this).removeClass("yellowHover");
        }
        else if (activePlayer === 1) 
        {
        $(this).removeClass("yellowHover");
        $(this).removeClass("redHover");
        }
    });
    

    $("button").click(function()
    {
        newGame();
    });



    
    function checkWin() 
    {
        for (var i = 1; i < 12; i++) 
        {
        if($(".r" + i).not(".red").length === 0) {
            $(".active1").text("WINNER!")
            $(".active2").text("")
            setTimeout(newGame, 3000);
            // newGame();
        }
        else if($(".r" + i).not(".yellow").length === 0)
        {
            $(".active1").text("")
            $(".active2").text("WINNER!")
            setTimeout(newGame, 3000);
            // newGame();
        }
        else if($(".r" + i).not(".red").length === 8 && $(".r" + i).not(".yellow").length === 8) 
        {
            $(".active1").text("TIE!")
            $(".active2").text("TIE!")
            setTimeout(newGame, 3000);
            // newGame();
        }

        }
    }

    function newGame () 
    {
        activePlayer = 0;
        columnIndex = [0, 4, 8, 12];
        scores = [0, 0];
        turnPlayer = 0;
        $(".active1").text("Active")
        $(".active2").text("")

    for (var i = 0; i < 16; i++) 
        {
        $("#" + i).removeClass("red");
        $("#" + i).removeClass("yellow");
        }
    }

});