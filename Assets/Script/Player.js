
var audio = $('.audio-player')[0];
var currIndex, audioArr, isPlaying=false, imageArr, currIMage;
var wholeLength, currMin, currSec, durrMin, durrSec , titles, soundcircles;
audioArr = $('.audio-player source');
imageArr = $('.ids');
titles = $('.titles');
soundcircles = $('.levels');
audio.volume = 0.66;
var navigation = [];
// var aText = new Array(
//     "პირობითი ტექსტი ამონარიდი სტატიიდან ილუსტაციების გასაფორმებლად\n"
// );
// var iSpeed = 100; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 20; // start scrolling up at this many lines
//
// var iTextPos = 0; // initialise text position
// var sContents = ''; // initialise contents variable
// var iRow; // initialise current row


$('.seek').value = 0;
$('.sound').value = 0;

function playList() {
    var quantity = audioArr.length;
    // var name, lastSlash, extension;
    for (let i=0; i< quantity; i++){
        // name = audioArr[i].src;
        // lastSlash = name.indexOf("Audio/")+"Audio/".length;
        // extension = name.indexOf(".mp3");
        // name = name.substring(lastSlash, extension);
        // for(var j =0; j<name.length; j++) {
        //     name = name.replace("%20", " ");
        // }
        if(i+1>=10){
            $('.audio-files ul').append("<li class='for-nav'><p data-src='"+audioArr[i].src+"'>"+$(audioArr[i]).attr("data-name")+" <span>"+([i+1])+"</span></p></li>");
        }
        else {
            $('.audio-files ul').append("<li class='for-nav'><p data-src='"+audioArr[i].src+"'>"+$(audioArr[i]).attr("data-name")+" <span>0"+([i+1])+"</span></p></li>");
        }
    }
}


playList();
navigation = $('.audio-files ul li.for-nav p');
$(navigation[0]).addClass("active-title");


$('.about-project').click(function () {
    $('.audio-files ul li.for-nav p').removeClass('active-title');
    $(this).addClass("active-title");
    audio.pause();
    $('.control').addClass('pause');
    $('.ids').removeClass('active-Id');
    $('.player-holder').css({display:"none"});
    $('#audio-title').css({display:"none"});
    $('.about').css({display:"block"});
    audio.currentTime = 0;
    $('.control').removeClass('pause');
    $('.control').addClass('play-pause');
    $('.currIndex').html("00");
    $('.audio-files').fadeToggle();
    $('.playlistButton').toggleClass('active');
});

// function parseTitles(){
//     var quant1= navigation.length;
//     var name, symbol;
//     for(let i = 0; i<quant1; i++){
//         name = $(navigation[i]).html();
//         symbol = name.indexOf("<");
//     }
// }

$('.playlistButton').click(function () {
    $('.audio-files').fadeToggle();
    $(this).toggleClass('active');
});

$('.audio-files ul li.for-nav p').click(function () {
    $('.audio-files').fadeToggle();
    $('.playlistButton').toggleClass('active');

    $('.control').removeClass('play-pause');
    $('.control').addClass('pause');

    $('.player-holder').css({display:"inline-block"});
    $('#audio-title').css({display:"inline-block"});
    $('.about').css({display:"none"});

    $('.audio-files p').removeClass('active-title');
    $(this).addClass('active-title');
    for(var i = 0; i<audioArr.length; i++){
        $(imageArr[i]).removeClass("active-Id");
        if((audioArr[i].src).includes($(this).attr("data-src"))){
            audio.src=audioArr[i].src;
            if(isPlaying==true){
                audio.play();
            }
            currIndex=i;
            if(currIndex + 1<10){$('.currIndex').html(0+ (currIndex + 1).toString());}
            else{$('.currIndex').html(currIndex + 1);}
        }
    }
    $(imageArr[currIndex]).addClass("active-Id");
    var currTitle = $(this).text().substr(0,$(this).text().length-2);
    setTimeout(function () {
        $('.title').html(currTitle)
    },1500);

    setTimeout(function () {
        // $('.brushStroke').css({width:"0", height:"0"});
    },3000);

});


function timing() {
    wholeLength = audio.duration;
    durrMin = Math.floor(wholeLength / 60);
    durrSec = Math.floor(wholeLength - durrMin * 60);

    if(durrMin<10){durrMin = "0" + durrMin}
    if(durrSec<10){durrSec = "0" + durrSec}

    $('.duration-time').html(durrMin + ":" + durrSec);
    if($('.duration-time').html()==="NaN:NaN"){
        $('.duration-time').html("00:00");
    }
};

function currTiming() {
    currMin = Math.floor(audio.currentTime / 60);
    currSec = Math.floor(audio.currentTime - currMin * 60);
    if(currMin < 10){currMin = "0" + currMin}
    if(currSec < 10){currSec = "0" + currSec}

    $('.current-time').html(currMin + ":" + currSec);
}

// $('.control').click(function () {
//     $('.play-button .rightSpan').toggleClass("playerButtonRight");
//     $('.play-button .leftSpan').toggleClass("playerButtonLeft");
//
// });
// $('.control').on('click', function() {
//     $(this).toggleClass('pause play-pause');
//
// });


function  nextMusic() {

    $('.title').css({opacity:"0"});
    // var options = {
    //     duration: 1,
    //     queue: true,
    //     color: "#e5dedc",
    //     size: 40,
    //     inkAmount: 6,
    //     root: '.brushStroke',
    //     end: function () {
    //         bs.erase();
    //     }
    // };
    //
    //
    // var bs = new Brushstroke(options);
    //
    // bs.draw();
    // $('.brushStroke').css({width:"100%", height:"100%"});

    setTimeout(function () {
        $('#text').css({display:"none"});
        currIndex ++;
        $('.ids').removeClass("active-Id");

        if(currIndex==-1){
            $(imageArr[9]).addClass("active-Id");
        }
        if(currIndex==10){
            $(imageArr[0]).addClass("active-Id");
        }
    },1000);


    setTimeout(function () {
        // currIndex ++;
        if(currIndex >audioArr.length){
            currIndex = 0;
        }

        $('.title').html($(titles[currIndex]).html());
        for(let i=0; i<titles.length; i++){
            $('.audio-files p').removeClass('active-title');
        }
        $(navigation[currIndex]).addClass('active-title');
        $(imageArr[currIndex]).addClass("active-Id");
        audio.src = audioArr[currIndex].src;

        if(isPlaying == true){
            audio.play();
        }
        else{
            audio.pause();
        }
        if (currIndex + 1 <10){$('.currIndex').html("0" + (currIndex + 1).toString());}
        else {$('.currIndex').html(currIndex + 1);}

    },1000);


    setTimeout(function () {
        // $('.brushStroke').css({width:"0", height:"0"});
        $('.title').css({opacity:"1"});
    },1001);
}

function prevMusic() {

    $('.title').css({opacity:"0"});

    // var options = {
    //     duration: 1,
    //     queue: true,
    //     color: "#e5dedc",
    //     size: 40,
    //     inkAmount: 4,
    //     root: '.brushStroke',
    //     end: function () {
    //         bs.erase();
    //     }
    // };


    // var bs = new Brushstroke(options);

    // bs.draw();
    // $('.brushStroke').css({width:"100%", height:"100%"});

    setTimeout(function () {
        $('#text').css({display:"none"});
        currIndex --;
        $('.ids').removeClass("active-Id");
    },1000);

    setTimeout(function () {
        // currIndex --;
        if(currIndex  < 0){
            currIndex = audioArr.length-1;
        }
        audio.src = audioArr[currIndex].src;
        if(isPlaying == true){
            audio.play();
        }
        else{
            audio.pause();
        }
        $('.title').html($(titles[currIndex]).html());
        for(let i=0; i<titles.length; i++){
            $('.audio-files p').removeClass('active-title');
        }
        $(navigation[currIndex]).addClass('active-title');
        $(imageArr[currIndex]).addClass("active-Id");
        if (currIndex + 1<10){$('.currIndex').html("0" + (currIndex + 1).toString());}
        else{$('.currIndex').html(currIndex + 1);}
    },1000);

    setTimeout(function () {
        // $('.brushStroke').css({width:"0", height:"0"});
        $('.title').css({opacity:"1"});
    },1001);

}

$(function changeAudio() {
   $('.next-arrow').click(function () {
        nextMusic();
   });

   $('.prev-arrow').click(function () {
       prevMusic();
   })
});

$('.audio-files p').click(function () {

});

audio.ontimeupdate =function () {
    var percentage = ( audio.currentTime / audio.duration ) * 100;
    $(".progress span").css("width", percentage+"%");
   // var percentage = (audio.currentTime / audio.duration * 100);
    if(audio.ended){
        nextMusic();
    }
   // $('.seek').val(percentage);
   timing();
   currTiming();
};

$('.seek').change(function () {
    // audio.currentTime += 10;
    // audio.currentTime = audio.duration * (parseInt(this.value)/100);
    // console.log(audio.duration * (this.value/100));
});


$(function () {
   var volumeController = 0;
   var lastVolume = audio.volume;
   $('.muteSound').click(function () {
        if(volumeController == 0) {
            audio.volume = 0;
            $('.sound').value = 0;
            volumeController = 1;
            $('.muteSound .soundLine').css({height:"55px"});
            $('.levels .inside-circle').css({border:"2px solid #727375"});
        }
        else{
            audio.volume = lastVolume;
            $('.sound').value = lastVolume;
            volumeController = 0;
            $('.muteSound .soundLine').css({height:"0"});
        }
   });

   $('.levels').click(function () {
       $('.muteSound .soundLine').css({height:"0"});
      if($(this).hasClass("level1")) {
          audio.volume = 0.33;
          lastVolume = 0.33;
          volumeController = 0;
          $(this).children('.inside-circle').css({border: "2px solid #333333"});
          $('.level2 .inside-circle').css({border: "2px solid #727375"});
          $('.level3 .inside-circle').css({border: "2px solid #727375"});

      }
      else if($(this).hasClass("level2")){
          audio.volume=0.66;
          lastVolume=0.66;
          volumeController=0;
          $(this).children('.inside-circle').css({border: "2px solid #333333"});
          $('.level1 .inside-circle').css({border: "2px solid #333333"});
          $('.level3 .inside-circle').css({border: "2px solid #727375"});
      }
      else if($(this).hasClass("level3")){
          audio.volume=1;
          lastVolume=1;
          volumeController=0;
          $('.level1 .inside-circle').css({border: "2px solid #333333"});
          $('.level2 .inside-circle').css({border: "2px solid #333333"});
          $('.level3 .inside-circle').css({border: "2px solid #333333"});
      }
   });


   // $('.sound').change(function () {
   //      audio.volume = this.value;
   //      lastVolume = this.value;
   //      volumeController = 0;
   // });
   $('.muteSound').mouseover(function () {
      $('.sound').css({opacity:"1", width:"90px"});
   });
});

$(document).click(function (event) {
    if(!$(event.target).is(".sound")){
        $('.sound').css({opacity:"0", width:"0"})
    }
    else{
        return;
    }
   // $('.sound').css({opacity:"0", width:"0"});
});
//
//
// audio.ontimeupdate = function(){

// };
//
$(".progress").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $(".progress").width();
    var percentage = ( left / totalWidth );
    var audioTime = audio.duration * percentage;
    audio.currentTime = audioTime;
});

//
// function typewriter()
// {
//     sContents =  ' ';
//     iRow = Math.max(0, iIndex-iScrollAt);
//     var destination = $('.curved-text textPath');
//
//     while ( iRow < iIndex ) {
//         sContents += aText[iRow++] + '<br />';
//     }
//     destination.html( sContents + aText[iIndex].substring(0, iTextPos) + " ");
//     if ( iTextPos++ == iArrLength ) {
//         iTextPos = 0;
//         iIndex++;
//         if ( iIndex != aText.length ) {
//             iArrLength = aText[iIndex].length;
//             setTimeout("typewriter()", 500);
//         }
//     } else {
//         setTimeout("typewriter()", iSpeed);
//     }
// }
//
//
// typewriter();
//
//
//
// $(".progress").click(function(e){
//     console.log(audio.currentTime);
//     var timing = e.pageX-$(this).offset().left; //current width of progress
//     var duration = audio.duration;	//total duration
//     var currentTime = (duration * timing) / $(".progress").width();
//     console.log(currentTime);
//     var percent = (currentTime * 100)/duration;
//     console.log(percent);
//     //console.log(timing+"  "+currentTime+" " + percent+" "+duration);
//     audio.currentTime = 15;
//     console.log(audio.currentTime);
// });
