AFRAME.registerComponent('markerhandler', {
    init: function(){
        const marker = document.getElementById("marker_hiro");
        const objText = document.getElementById("debug_text");

        if (objText != null){
            objText.setAttribute('value', "GetElement");
        }
    }
});

//動画クリックイベント
function onClick_video(){
    var videoPlayer = document.querySelector('#ar-video');
    videoPlayer.play();
}

//# sourceMappingURL=EventController.js.map