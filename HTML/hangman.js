var words = ["aerosol","decibel","deforestation"];
function drawWord(wo, gu)
{
    var nword = ""; var ok;        
    for (var i = 0; i < wo.length; i++) {
        ok = false;
        for (var j = 0; j < gu.length; j++)
        {
            if (gu[j] == wo[i]) {
                nword = nword + wo[i].toUpperCase() + ' ';
                ok = true;
                break; 
            }
        }
        if (!ok) nword = nword + '_ ';
    }
    $('#theword').html(nword);
}

function checkWin(p)
{
    for (var i = 0; i < p.length; i++)
        if (p[i] == '_') return false;
    return true;
}

$(document).ready(function(){
    var w = words[Math.floor(Math.random() * words.length)];
    var guess = "";
    var t = 0;
    var c = document.getElementById("display");
    var ctx = c.getContext("2d");
    // ctx.font="30px Arial";
    // ctx.strokeText("Hangman",235,50);
    drawWord(w, guess);
    $('#letters a').click(function(){
        var vl = $(this).attr('value');
        if (w.indexOf(vl) != -1)
        {
            guess = guess + vl;
            $(this).hide();
            drawWord(w, guess);
            if (checkWin($('#theword').html())) {
                $('#msg').html('Well done! Reload the page to play again.');
                $('#letters').hide();
            }
        } else {
            t++;
            $(this).hide();                 
            switch(t)
            {
                case 1: {
                    ctx.moveTo(200, 300);
                    ctx.lineTo(200, 100);
                    ctx.stroke();
                } break;
                case 2: {
                    ctx.moveTo(200, 275);
                    ctx.lineTo(225, 300);
                    ctx.stroke();
                } break;
                case 3: {
                    ctx.moveTo(200, 100);
                    ctx.lineTo(325, 100);
                    ctx.stroke();
                } break;
                case 4: {
                    ctx.moveTo(200, 125);
                    ctx.lineTo(225, 100);
                    ctx.stroke();
                } break;
                case 5: {
                    ctx.moveTo(325, 100);
                    ctx.lineTo(325, 130);
                    ctx.stroke();
                } break;
                case 6: {
                    ctx.beginPath();
                    ctx.arc(325,150,20,0,2*Math.PI);
                    ctx.closePath();
                    ctx.stroke();
                } break;
                case 7: {
                    ctx.moveTo(325, 170);
                    ctx.lineTo(325, 230);
                    ctx.stroke();
                } break;
                case 8: {
                    ctx.moveTo(325, 180);
                    ctx.lineTo(300, 215);
                    ctx.stroke();
                } break;
                case 9: {
                    ctx.moveTo(325, 180);
                    ctx.lineTo(350, 215);
                    ctx.stroke();
                } break;
                case 10: {
                    ctx.moveTo(325, 230);
                    ctx.lineTo(300, 265);
                    ctx.stroke();
                } break;
                case 11: {
                    ctx.moveTo(325, 230);
                    ctx.lineTo(350, 265);
                    ctx.stroke();
                } break;
            }
               
            if (t == 11) {
                $('#msg').html('You are dead! Reload the page to play again.');
                $('#letters').hide();
                $('#theword').html(w.toUpperCase());
            }
        }
    });
});