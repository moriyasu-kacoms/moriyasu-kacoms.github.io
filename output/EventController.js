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
        //this.el.addEventListener('click', onClick_video(evt));
        this.el.addEventListener('click', function(){
            let videoPlayer = document.querySelector('#ar-video');
            videoPlayer.play();
        });

        //動画オブジェクトにイベントを設定
        //let videoPlayer = document.querySelector('#ar-video');
        //videoPlayer.addEventListener('click', onClick_video(videoPlayer));
    }
});

 //動画クリックイベント
function onClick_video(evt){
    let videoPlayer = document.querySelector('#ar-video');
    videoPlayer.play();
}

//# sourceMappingURL=EventController.js.map