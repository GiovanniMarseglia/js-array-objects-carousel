const immagini = [
    {
    url : "marvel-s-spider-man-remastered-pc-gioco-steam-cover.jpg",
    titolo : "Marvel's Spiderman Miles Morale",
    descrizione : "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man",
    },
    {
    url : "ratchet-clank-rift-apart-pc-gioco-steam-europe-cover.jpg",
    titolo : "Ratchet & Clank",
    descrizione : "Relive the daring origins of the duo in a deep story full of twists, with lots of additional action and new bosses to defeat",
    },
    {
    url : "marvel-s-guardians-of-the-galaxy-pc-gioco-steam-cover.jpg",
    titolo : "Marvel's Guardians of The Galaxy",
    descrizione : "LEAD THE GUARDIANS OF THE GALAXY Take on the role of Star-Lord and fight with bold style beyond all limits",
    },
    {
    url : "stray.jpeg",
    titolo : "Stray",
    descrizione : "Alone, lost and far from his family, a stray cat must unravel an ancient mystery to escape a long-forgotten city.",
    },
    {
    url : "marvel-s-avengers-pc-gioco-steam-cover.jpg",
    titolo : "Marvel's Avengers",
    descrizione : "In a future where superheroes are outlawed, a young Kamala Khan must reunite the Avengers to stop AIM",
    },    

]

let first = document.getElementsByTagName("img")[0]
let click = 0
let su = document.getElementById("fup")
let giu = document.getElementById("fdown")


let startHTML = document.getElementsByTagName("button")[0]
let stopHTML = document.getElementsByTagName("button")[1]
let invertHTML = document.getElementsByTagName("button")[2]
let int, int2


// scorrere il carosello

startHTML.addEventListener("click", function(){
    clearInterval(int2)
    int = setInterval(avanti,3000)
})


invertHTML.addEventListener("click", function(){
    clearInterval(int)
    int2 = setInterval(indietro, 3000);

})



stopHTML.addEventListener("click", function(){

    clearInterval(int)
    clearInterval(int2)
})





// creazione descrizione in html
function info(i){
    document.getElementsByTagName("h2")[0].innerHTML = immagini[i].titolo
    document.getElementsByTagName("p")[0].innerHTML = immagini[i].descrizione
}





function avanti(){
    click++
    
    if(click<immagini.length){
        document.getElementsByTagName("img")[click].setAttribute("class", `noactive`)
        document.getElementsByTagName("img")[click+1].setAttribute("class", `active`)
    
    first.setAttribute("src", `./img/${immagini[click].url}`)
    info(click)
    }else{
        document.getElementsByTagName("img")[click].setAttribute("class", `noactive`)
        click=0
        first.setAttribute("src", `./img/${immagini[click].url}`)
        
        document.getElementsByTagName("img")[click+1].setAttribute("class", `active`)
        info(click)
    }
}



function indietro(){
        click--

        if(click<0){
            click=4
            document.getElementsByTagName("img")[1].setAttribute("class", `noactive`)
            document.getElementsByTagName("img")[click+1].setAttribute("class", `active`)
                first.setAttribute("src", `./img/${immagini[click].url}`)
                
                info(click)
            
            }else{
                
            first.setAttribute("src", `./img/${immagini[click].url}`)
           
            document.getElementsByTagName("img")[click+2].setAttribute("class", `noactive`)
            document.getElementsByTagName("img")[click+1].setAttribute("class", `active`)
            info(click)
                
            }

}





// all avvio della pagina crea gli elementi necessari con le immagini ed imposta la prima immagine di default

window.addEventListener("load", function(){
    first.setAttribute("src", `./img/${immagini[0].url}`)
    info(0)

    const div2HTML = document.getElementById("miniature");

    for(let i=0; i<immagini.length;i++){

        let divHTML = document.createElement("div")
        let imgHTML = document.createElement("img")
        imgHTML.setAttribute("src", `./img/${immagini[i].url}`)
        div2HTML.append(divHTML)
        divHTML.append(imgHTML)
        imgHTML.setAttribute("class", `noactive`)

    }


    document.getElementsByTagName("img")[1].setAttribute("class", `active`)



    // event listener per far scorrere le immagini

    giu.addEventListener("click", avanti)

    su.addEventListener("click", indietro)
});







