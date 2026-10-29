const outerDiv = document.getElementById("outer-div");
const innerDiv = document.getElementById("inner-div");

let mode = "light";

outerDiv.addEventListener("click", function () {

    if (mode === "light") {

        // Light → Dark
        document.body.style.backgroundColor = "black";

        // Left → Right
        innerDiv.style.marginLeft = "180px";

        mode = "dark";

    } else {

        // Dark → Light
        document.body.style.backgroundColor = "white";

        // Right → Left
        innerDiv.style.marginLeft = "0px";

        mode = "light";
    }

});