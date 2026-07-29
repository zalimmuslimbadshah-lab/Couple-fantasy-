const images = {
    mf: [
        "mf1.png",
        "mf2.png",
        "mf3.png",
        "mf4.png",
        "mf5.png",
        "mf6.png",
        "mf7.png",
        "mf8.png",
        "mf9.png"
    ],

    mfm: [
        "mfm1.png",
        "mfm2.png",
        "mfm3.png",
        "mfm4.png",
        "mfm5.png",
        "mfm6.png",
        "mfm7.png",
        "mfm8.png",
        "mfm9.png"
    ],

    fmf: [
        "fmf1.png",
        "fmf2.png",
        "fmf3.png",
        "fmf4.png",
        "fmf5.png",
        "fmf6.png",
        "fmf7.png",
        "fmf8.png",
        "fmf9.png"
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
