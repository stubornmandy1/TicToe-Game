var move = 1;
var play = true;
$('table tr td').click(function(){
    if( $(this).text()== "" && play){
        if((move%2)==1){
            $(this).append("X");
            $(this).css('color','#61802e');
        } else {
            $(this).append('O');
            $(this).css('color', '#1184aa')      
        }
        move++;
        
        if (findWinner() != -1 && findWinner()!= ""){
            
            if(findWinner()=="X"){
                $('body').append('<div class="winner"><span>Winnner X</span></div>');
                $('body').append('<button onclick="location.reload()"> Restart </button');
                $('.winner').css('background-color','#61802e');
                $('button').css('color','#aabb88');
            } else if (findWinner()=="O"){
                $('body').append('<div class="winner"><span>Winnner O</span></div>');
                $('body').append('<button onclick="location.reload()"> Restart </button');
                $('.winner').css('background-color','#1184aa');
                $('button').css('color','#aabb88');
            }
        
    }
    }
    
});
  $('table tr td').click(function(){
    if (findWinner() != "" && findWinner() != "X" && findWinner() == -1){
            
            $('body').append('<div class="draw"><span>Game Draw</span></div>');
            $('body').append('<button onclick="location.reload()"> Restart </button');
            $('.draw').css('background-color','#1184aa');
            $('button').css('color','#aabb88');
        }

      });



function findWinner(){
    td1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    td2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    td3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    td4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    td5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    td6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    td7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    td8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    td9 = $('table tr:nth-child(3) td:nth-child(3)').text();
//checking all rows
if ((td1 == td2) && (td2 == td3)){
    return td3;
}else if ((td4 == td5) && (td5 == td6)){
    return td6;
}else if ((td7 == td8) && (td8 == td9)){
    return td9;
}
// columnns
else if ((td1 == td4) && (td4 == td7)){
    return td7;
}else if ((td2 == td5) && (td5 == td8)){
    return td8;
}else if ((td3 == td6) && (td6 == td9)){
    return td9;
}
//diagonals
else if ((td1 == td5) && (td5 == td9)){
    return td9;
}else if ((td3 == td5) && (td5 == td7)){
    return td7;
}
//draw
return -1;
}


/*$('body').append('<div class="draw"><span>Game Draw</span></div>');
$('body').append('<button onclick="location.reload()"> Restart </button');
$('.draw').css('background-color','#1184aa');
$('button').css('color','#aabb88');*/