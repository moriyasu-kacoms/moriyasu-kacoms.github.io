AFRAME.registerComponent('markerhandler', {
    init: function(){
        let el = this.el;
        const marker = document.getElementById("marker_hiro");
        const objText = document.getElementById("debug_text");

        if (objText != null){
            objText.setAttribute('value', "GetElement");
        }
    }
});

//
AFRAME.registerComponent('clickLithner',{
    init: function(){
        //
        let videoPlayer = document.querySelector('#ar-video');
        this.el.addEventListener('click', onClick_video(videoPlayer));

        //動画オブジェクトにイベントを設定
        //let videoPlayer = document.querySelector('#ar-video');
        //videoPlayer.addEventListener('click', onClick_video(videoPlayer));
    }
});

 //動画クリックイベント
function onClick_video(videoPlayer){
    videoPlayer.play();
}

//# sourceMappingURL=EventController.js.map