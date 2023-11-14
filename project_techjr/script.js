
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;    
    
    let l1 = document.getElementById("r1");

    
    
}

function countReturn1(){
    count = 1;
}

function countReturn2(){
    count = 2;
}

function countReturn3(){
    count = 3;
}

function countReturn4(){
    count = 4;
}
