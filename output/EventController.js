AFRAME.registerComponent('markerhandler', {
    init: function(){
        const marker = document.getElementById("marker_hiro");
        //const objModel = document.getElementById("santa");
        const objText = document.getElementById("debug_text");

        if (objText != null){
            objText.setAttribute('value', "GetElement");
            //objText.textContent = "GetQuery";
        }

        //markerのクリックイベント
        marker.addEventListener('click', function(evt, target){
            //const objScale = objModel.getAttribute('scale');
            //Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.5);
            //objModel.setAttribute('scale', objScale);

            objText.setAttribute('value', "Click Event");
        });
    }
});

//# sourceMappingURL=EventController.js.map