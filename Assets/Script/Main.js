$(window).on('load', function () {
    setTimeout(function () {

        var callback = function () {
            $('.circle-play').css({opacity:"1", cursor:"pointer"});
        };

        var x = new Vivus('my-svg',
            {
                type: 'scenario',
                duration: 20
            }, callback);


    });

});

function startFunction(){
    $('#text').fadeOut();
    $('.left-image').addClass('fade-left');
    $('.right-image').addClass('fade-right');
    $('.playlistButton').addClass('display');
    // Options for customization
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

// Initialization
    // var bs = new Brushstroke(options);
    //
    // bs.draw();
    // $('.brushStroke').css({width:"100%", height:"100%"});


    $('.control').toggleClass('pause play-pause');

    $('.audio-files p:contains("ლაქები")').addClass('active-title');
    if(audio.paused===true){
        audio.play();
        isPlaying = true;
    }
    else {
        audio.pause();
        isPlaying = false;
    }
    timing();

    setTimeout(function () {
        $('.mainId').fadeOut();
        $('#text').css({display:"none"});
        $('.Id1').addClass("active-Id");
    },1000);

    setTimeout(function () {
        $('.controll-buttons').css({display:"inline-block"});
        $('.progress').css({display:"inline-block"});
        $('.time-counter').css({opacity:"1"});
        $('.sound-controll').css({display:"inline-block"});
        $('.circle-play').css({display:"none"});

        $(function indexing() {
            for(var i =0; i<audioArr.length; i++){
                if(audioArr[i].src==audio.src){
                    currIndex = i;
                }
            }
            if(currIndex+1<10){$('.currIndex').html("0" + (currIndex+1).toString())}
            else {$('.currIndex').html(currIndex+1);}
            if(audioArr.length<10){$('.whole-number').html("0" + audioArr.length);}
            else{$('.whole-number').html(audioArr.length);}
            timing();
        });

        $('.title').addClass('subtitle');
        $('.title').html("ლაქები");
    },1500);

    setTimeout(function () {
        $('.brushStroke').css({width:"0", height:"0"});
    },3000);

}

$('.circle-play').click(function () {
    startFunction();
});

$('.about .play-first').click(function () {
    $('.player-holder').css({display:"inline-block"});
    $('#audio-title').css({display:"inline-block"});
    $('.about').css({display:"none"});
    $('.about-project ').removeClass('active-title');
    audio.src='Assets/Audio/1.mp3';
    $('.ids').removeClass('active-Id');
    $('.id1').addClass('active-Id');
    $('.currIndex').html("00");
    startFunction();
});

var pathObj = {
    "text": {
        "strokepath": [
            {
                "path": "  M187,138.1c-1.4-3-2.3-6.4-4.2-9c-2.4-3.4-5.9-4.9-9.8-1.7c-3.6,3-3.2,6.6-0.8,9.8c1.8,2.5,4.3,4.5,6.5,6.7",
                "duration": 600
            },
            {
                "path": "  M142.5,139.7c-0.7-2.4-4.7-4.5-1.6-7.3c3.2-2.9,5.2,0.5,7.4,2.4c0.7,0.6,1.1,1.1,0.8,1.7l-4.1-5c1.3-3.5,2.5-9.1,7.3-4  c5.3,5.7,10,12.1,14.4,18.7c2.3,3.5,1.6,5.3-1,7.6c-2.8,2.5-5.4,2.4-8.3,0c-6.6-5.5-5.8-10.5,2.5-14.9",
                "duration": 600
            },
            {
                "path": "  M139.1,177.7c-3.2,0.6-5.9-1.3-8.1-2.7c-2.7-1.8-5.8-4-4.5-8.9c1.6-5.8,5.5-2.6,8.4-3.3l3.3,2.5c-4.6-4.2-3.7-8.9,1-11.3  c3.8-1.9,7.2,0.7,9.2,5.4c1,2.4,1,4.5,1.4,6.7",
                "duration": 600
            },
            {
                "path": "  M127.6,187.6c-1.6-3.3-2.9-6.8-5.9-9c-2.7-2-5.7-3-9.1-0.2c-3.6,3.1-2.7,6.1-0.7,9.1c1.9,2.9,5.1,4.4,8.2,5.8",
                "duration": 600
            },
            {
                "path": "  M116.9,216.5c-10-0.3-15.2,3.4-17.3,12.4v-5c-3.2-1.7-6.7-0.2-9.9-0.9c-4.7-1-8.9-3.4-9.7-8.2c-0.9-5.6,4.8-5,8.1-6.6l5,4.1  c-7.2-7.4-6.9-9.5,1.7-12.4l5,4.1c-5.3-2.9-6.3-6.5-1.6-10.7c4.9-4.4,7.4-0.1,9.8,3.3c1.1,1.5,1.7,3.3,2.5,4.9",
                "duration": 600
            },
            {
                "path": "  M59.9,239.7c0.1,3.9,3.1,5.6,5.8,7.4c3,2.1,6.3,1.1,8.1-1c1.9-2.2,2.3-5.6-0.6-8.1c-1.9-1.6-3.8-3.3-5.8-5c-4.3-0.3-7,1.7-8.3,5.8  l7.4-6.6c0.1-4.9,1.8-8.4,7.4-7.4c5.3,1,7.3,5.8,5.8,12.3l2.5-3.3c2.6-0.2,4.5,1.4,6.6,2.5c3.3,1.7,4.4,5.2,3.2,8.1  c-1.6,3.9-4.3,7.7-9.7,5",
                "duration": 600
            },
            {
                "path": "  M62.3,259.5c-0.8-1.7-1.4-3.5-2.5-4.9c-3.1-3.7-7.3-6.6-11.3-2.4c-3.5,3.6-2.6,7.9,2.3,10.6l-4.1-3.3c-3.5,1.4-7.9,2.2-7.4,7.4  c0.5,4.8,4.8,5.8,8.3,7.3c1.6,0.7,3.8,0.1,5.7,0.1",
                "duration": 600
            },
            {
                "path": "  M26.8,276.8c2,4.6,6,2,9.1,2.4c4.3,0.5,6.3,3.1,7.4,6.7c0.9,3.1-1.2,4.9-3.3,6.6c-2.7,2.1-5.1,0.4-7.4-0.8  c-7.6-4-14.3-9.7-22.3-13.2",
                "duration": 600
            },
            {
                "path": "  M19.4,298.3c-5.7,6-4.3,12.1,3.3,13.9c2.8,0.7,6.7,1.2,8.1-2.4c0.9-2.2,0.9-5.6-1.5-7.3c-6.7-4.6-13.6-9.1-20.7-13.2  c-2.7-1.5-4.9,1.1-6.5,3.2c-2.6,3.7-0.1,6,2.4,8.2",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 1920,
            "height": 1080
        }
    }
};

$('.fb-share-button').click(function () {
   console.log(1);
});

$('.fb-share-button').mouseover(function () {
    $('.share-text p').css({opacity:"1"});
});

$('.fb-share-button').mouseout(function () {
    $('.share-text p').css({opacity:"0"});
});


// $('#text').lazylinepainter({
//     'svgData' : pathObj,
//     'strokeWidth' : 4,
//     'strokeColor' : '#344B76',
//     'speedMultiplier' : 1/2,
//     'height':"10%",
//     'width':"80%"
// }).lazylinepainter('paint');


$('.control').on('mousedown', function() {
    $(this).toggleClass('pause play-pause');
    if(audio.paused===true){
        audio.play();
        isPlaying = true;
    }
    else {
        audio.pause();
        isPlaying = false;
    }
    timing();

});

$(document).on('keyup', function(e) {
    if (e.which == 32) {
        $('.control').toggleClass('pause play-pause');
    }
});


// $('.fb_iframe_widget').mouseout(function () {
//     $('.fb-share-button').css({opacity:"0!important"});
// });


