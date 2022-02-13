//J'appelle mes id dans l'HTML
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
//Je sélectionne toutes mes img dans ma div caroussel
let img = document.querySelectorAll(".caroussel img");

//Je crée une fonction qui me permet de changer d'image en appuyant à droite ou à gauche
function changeImg(isLeft){
    //J'appelle mes class activ dans ma class caroussel //previousElementSibling = prendre l'élément précédent //nextElementSibling = prendre l'élément suivant
    let prev = document.querySelector(".caroussel").querySelector(".active").previousElementSibling;
    let next = document.querySelector(".caroussel").querySelector(".active").nextElementSibling;
    let active = document.querySelector(".caroussel").querySelector(".active");

    //Si mon paramètre est vrai alors:
    if(isLeft === true){
        //j'appelle ma première img dans une variable
        let firstImg = img[0];
        //Je supprime toutes les class qu'il y a sur mon img principal
        firstImg.remove();
        //J'appelle mon id qui se trouve dans une class et la range dans une variable
        let btn = document.querySelector(".caroussel").querySelector("#rightBtn");
        //J'insère, dans ma class caroussel, la variable firstImg JUSTE AVANT la variable btn
        document.querySelector(".caroussel").insertBefore(firstImg, btn);

        //J'enlève imgChild à ma variable prev
        prev.classList.remove("imgChild");

        //J'enlève la class active à ma variable active ET je lui ajoute la class imgChild
        active.classList.remove("active");
        active.classList.add("imgChild");

        //J'ajoute la class active à ma variable next
        next.classList.add("active");
        //J'ajoute la class imgChild à l'élément suivant de ma variable next
        next.nextElementSibling.classList.add("imgChild");
    }else {
        //Je mets dans ma variable le nombre d'img que j'ai -1 
        let lastImg = img[img.length-1];
        //Je supprime toutes les class qu'il y a sur mon img princippal
        lastImg.remove();
        //Je demande d'insérer ma variable lastImg juste avant mon id leftBtn
        document.querySelector(".caroussel").querySelector("#leftBtn").insertAdjacentElement("afterend", lastImg);

        //Enlever la class imgChild à la variable next
        next.classList.remove("imgChild");

        //Enlever la class active et ajouter la class imgChild à la variable active
        active.classList.remove("active");
        active.classList.add("imgChild");

        //Ajouter la class activ à la variable prev
        prev.classList.add("active");
        //Ajouter la class imgChild  à l'élément qui précède ma variable prev
        prev.previousElementSibling.classList.add("imgChild");
    }
    //Je rappelle ma variable à la fin car je lui ai donné une nouvelle valeur plus haut
    img = document.querySelectorAll(".caroussel img");

}
 //Quand je clique sur le bouton gauche ça m'appelle la focntion et lui met le paramètre faux
leftBtn.addEventListener("click", () => {
    changeImg(false);
});
//Quand je clique sur le bouton droit ça m'appelle la fonction et lui met le paramètre vrai
rightBtn.addEventListener("click", () => {
    changeImg(true);
});