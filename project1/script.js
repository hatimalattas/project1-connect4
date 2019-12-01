var activePlayer = 0;
var column1 = [];
var column2 = [];
var column3 = [];
var column4 = [];

$(document).ready(function(){

// $(".dot").mouseover(function(){
//     if (activePlayer === 0) {
//     $(".dot").addClass("redHover");
//     }
//     else if(activePlayer === 1) {
//         if($(this).hasClass("redHover") === true) {
//             console.log("Do nothing");
//         }
//         else{
//         $(this).addClass("yellowHover");
//     }
// }
// });

// $(".dot").mouseout(function(){
//         if (activePlayer === 0) {
//         $(this).removeClass("redHover");
//         }
//         else if (activePlayer === 1) {
//         $(this).removeClass("yellowHover");
//         }
// });


$(".dot").click(function(){

        if ($(this).hasClass("red") === true || $(this).hasClass("yellow") === true) {
            alert("Invalid selection");
        }

        else if(activePlayer === 0) {
        $(this).addClass("red");
        activePlayer++;
        console.log(activePlayer);
        }
        
        else if(activePlayer === 1) {
        $(this).addClass("yellow");
        activePlayer--;
        console.log(activePlayer);
        }
        });
});

console.log((document.querySelectorAll("#column1")[0]));