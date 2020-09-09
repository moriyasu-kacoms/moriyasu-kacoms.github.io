
    document.getElementById("santa").onclick = function(){
        let santaModel = document.getElementById("santa");
        if (santaModel != null){
           santaModel.setAttribute("position", "0 0 100");
           santaModel.setAttribute("rotation", "-90 0 90");
       }
    }