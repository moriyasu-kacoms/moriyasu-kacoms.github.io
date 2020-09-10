AFRAME.registerComponent('objClick2', {
    init: function(){
        const marker = document.querySelector("#marker_hiro");
        const objModel = document.querySelector("#santa");

        marker.addEvemtListener('click', function(evt){
            const objScale = objModel.getAttribute('scale');
            objScale.x += 1;
            objScale.y += 1;
            objScale.z += 1;
            objModel.setAttribute('scale', objScale);
        });
    }
});
//# sourceMappingURL=EventController.js.map