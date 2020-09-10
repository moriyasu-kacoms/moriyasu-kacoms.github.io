AFRAME.registerComponent('objClick2', {
    init: function(){
        const marker = document.querySelector("#marker_hiro");
        const objModel = document.querySelector("#santa");
        const objText = document.querySelector("#debug_text");

        if (objText != null){
            objText.textContent = "GetQuery";
        }

        marker.addEvemtListener('click', function(evt, target){
            const objScale = objModel.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
            objModel.setAttribute('scale', objScale);
        });
    }
});
//# sourceMappingURL=EventController.js.map