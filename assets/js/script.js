//==================================VARIABLES============================================
let canvasHTML = document.querySelector("canvas");
let contexte = canvasHTML.getContext("2d");

let hauteurCanvas = canvasHTML.height;
let largeurCanvas = canvasHTML.width;

let minuterie = 0;
let score = 0;
let curseurX;
let curseurY;
let etat = "intro";
//===================================OBJETS================================================
let fond = {
  x: 0,
  y: 0,
  hauteur: hauteurCanvas,
  largeur: largeurCanvas,
  vitesse: 1,
  image: new Image(),
  fond1Src: "assets/images/fond1.jpg",
  fond2Src: "assets/images/fond2.jpg",
};

let boutonStart = {
  x: largeurCanvas / 2 - 112,
  y: hauteurCanvas / 2 + 15,
  hauteur: 55,
  largeur: 225,
  teinte: 0,
  texte: "DÉMARRER",
};

let tableau = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 500,
};

let listeFlag = [];

//==================================FONCTIONS============================================
function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  canvasHTML.addEventListener("click", clicCanvas);
}

function boucleJeu() {
  if (etat == "intro") {
    afficherIntro();
  } else if (etat == "jeu") {
    afficherJeu();
  } else if (etat == "fin") {
    afficherFin();
  } else {
    console.error("erreur");
  }
}

function clicCanvas(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  if (
    etat == "intro" &&
    detecterClicObjet(curseurX, curseurY, boutonStart) == true
  ) {
    etat = "jeu";
    console.log("TOUTOUNE");
  }
}

function afficherIntro() {
  fond.image.src = fond.fond1Src;
  fond.y += fond.vitesse;
  if (fond.y > hauteurCanvas) {
    fond.y = 0;
  }
  contexte.drawImage(fond.image, fond.x, fond.y, fond.largeur, fond.hauteur);
  contexte.drawImage(
    fond.image,
    fond.x,
    fond.y - hauteurCanvas,
    largeurCanvas,
    hauteurCanvas
  );
  boutonStart.teinte++;

  if (boutonStart.teinte >= 360) {
    boutonStart.teinte = 0;
  }

  //====OMBRE-TEXTE
  contexte.fillStyle = "black";
  contexte.font = "70px SuperPixel";
  contexte.fillText("VEXIQUIZ", largeurCanvas / 2 + 5, hauteurCanvas / 2 - 15);
  //====TEXTE
  contexte.fillStyle = `hsl(${boutonStart.teinte}, 50%, 50%)`;
  contexte.font = "70px SuperPixel";
  contexte.fillText("VEXIQUIZ", largeurCanvas / 2, hauteurCanvas / 2 - 20);

  //====OMBRE-BOUTON
  contexte.fillStyle = "black";
  contexte.fillRect(
    boutonStart.x + 5,
    boutonStart.y + 5,
    boutonStart.largeur,
    boutonStart.hauteur
  );
  //====BOUTON
  contexte.fillStyle = `hsl(${boutonStart.teinte}, 50%, 50%)`;
  contexte.fillRect(
    boutonStart.x,
    boutonStart.y,
    boutonStart.largeur,
    boutonStart.hauteur
  );

  contexte.fillStyle = "white";
  contexte.textAlign = "center";
  contexte.font = "30px SuperPixel";
  contexte.fillText(
    boutonStart.texte,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 55
  );
}

function afficherJeu() {
  fond.image.src = fond.fond2Src;
  fond.y += fond.vitesse;
  if (fond.y > hauteurCanvas) {
    fond.y = 0;
  }
  contexte.drawImage(fond.image, fond.x, fond.y, fond.largeur, fond.hauteur);
  contexte.drawImage(
    fond.image,
    fond.x,
    fond.y - hauteurCanvas,
    largeurCanvas,
    hauteurCanvas
  );
}

function afficherFin() {}

function detecterClicObjet(curseurX, curseurY, objet) {
  if (
    curseurX >= objet.x &&
    curseurX <= objet.x + objet.largeur &&
    curseurY >= objet.y &&
    curseurY <= objet.y + objet.hauteur
  ) {
    return true;
  }
  return false;
}

window.addEventListener("load", initialiser);
