/*
* @Author: calasaba
* @Date:   2018-09-06 14:09:55
* @Last Modified by:   calasaba
* @Last Modified time: 2018-09-06 14:37:17
*/
$(function(){
    $(".music-btn").on("click",function(e){
        var music = document.getElementById("music");
        if(music.paused){
            music.play();
            $(".music-btn .music-cc").removeClass("music-pause");
            $(".music-btn .music-cc").addClass("music-start");
        }else{
            music.pause();
            $(".music-btn .music-cc").removeClass("music-start");
            $(".music-btn .music-cc").addClass("music-pause");
        }
    })
});