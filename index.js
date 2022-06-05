const setaRight = document.getElementById("setaRight");
const setaLeft = document.getElementById("setaLeft");

const artigos = document.getElementsByClassName("artigo")

const videos = document.getElementsByClassName("pause");

let flag_Artigo = 0;

function pauseVideo(){
    for(i = 0; i < videos.length; i++){
        videos[0].pause();
    }
}

function exibirArtigos(){
    if(flag_Artigo < (artigos.length)){
        for(i = 0; i <= (artigos.length -1); i++){
            artigos[i].style.display= "none";
        };
        artigos[flag_Artigo].style.display="block";
    }
    

}

function incrementando_Flag_Artigo(){
    if(flag_Artigo <= (artigos.length - 1)){
        flag_Artigo++;
    };
};

function decrementando_Flag_Artigo(){
    if(flag_Artigo > 0){
        flag_Artigo--;
    }
};

setaRight.addEventListener("click", function (){
    incrementando_Flag_Artigo();
    exibirArtigos();
    pauseVideo();
});

setaLeft.addEventListener("click", function (){
    decrementando_Flag_Artigo();
    exibirArtigos()
    pauseVideo();
});

exibirArtigos();
decrementando_Flag_Artigo();