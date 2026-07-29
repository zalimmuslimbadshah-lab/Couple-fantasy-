const images = {
    mf: [
        "images/mf1.png",
        "images/mf2.png",
        "images/mf3.png",
        "images/mf4.png",
        "images/mf5.png",
        "images/mf6.png",
        "images/mf7.png",
        "images/mf8.png",
        "images/mf9.png"
    ],

    mfm: [
        "images/mfm1.png",
        "images/mfm2.png",
        "images/mfm3.png",
        "images/mfm4.png",
        "images/mfm5.png",
        "images/mfm6.png",
        "images/mfm7.png",
        "images/mfm8.png",
        "images/mfm9.png"
    ],

    fmf: [
        "images/fmf1.png",
        "images/fmf2.png",
        "images/fmf3.png",
        "images/fmf4.png",
        "images/fmf5.png",
        "images/fmf6.png",
        "images/fmf7.png",
        "images/fmf8.png",
        "images/fmf9.png"
    ]
};

function showCategory(type) {

    const area = document.getElementById("scratchArea");
    area.innerHTML = "";

    images[type].forEach(src => {

        const card = document.createElement("div");
        card.className = "scratch-card";

        const img = document.createElement("img");
        img.src = src;

        const canvas = document.createElement("canvas");
        canvas.width = 120;
        canvas.height = 120;

        card.appendChild(img);
        card.appendChild(canvas);
        area.appendChild(card);

        makeScratch(canvas);

    });

}

function makeScratch(canvas){

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#B0B0B0";
    ctx.beginPath();
    ctx.arc(60,60,60,0,Math.PI*2);
    ctx.fill();

    ctx.globalCompositeOperation = "destination-out";

    let drawing = false;

    function scratch(e){

        if(!drawing) return;

        const rect = canvas.getBoundingClientRect();

        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

        ctx.beginPath();
        ctx.arc(x,y,15,0,Math.PI*2);
        ctx.fill();
    }

    canvas.addEventListener("mousedown",()=>drawing=true);
    canvas.addEventListener("mouseup",()=>drawing=false);
    canvas.addEventListener("mousemove",scratch);

    canvas.addEventListener("touchstart",()=>drawing=true);
    canvas.addEventListener("touchend",()=>drawing=false);
    canvas.addEventListener("touchmove",(e)=>{
        e.preventDefault();
        scratch(e);
    });

}