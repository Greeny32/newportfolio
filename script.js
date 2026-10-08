const btn_left = document.getElementById("left").addEventListener("click", left);
const btn_right = document.getElementById("right").addEventListener("click", right);

const skill_image = document.getElementById("skill");

const skills = ["python", "html"];
var pointer = 0;

function left() {
    // lower pointer or reverse to other side
    if (pointer==0){
        pointer = skills.length-1;
    }
    else {
        pointer -= 1;
    }

    skill_image.src = "images/"+skills[pointer]+".png";
}

function right() {
    // lower pointer or reverse to other side
    if (pointer==skills.length-1){
        pointer = 0;
    }
    else {
        pointer += 1;
    }

    skill_image.src = "images/"+skills[pointer]+".png";
}