AFRAME.registerComponent('objClick2', {
    init: function(){
        const marker = document.querySelector("#marker_hiro");
        const objModel = document.getElementById("santa");
        const objText = document.getElementById("debug_text");

        if (objText != null){
            objText.textContent = "GetQuery";
        }

        marker.addEvemtListener('click', function(evt, target){
            const objScale = objModel.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.5);
            objModel.setAttribute('scale', objScale);
        });
    }
});

//# sourceMappingURL=EventController.js.map