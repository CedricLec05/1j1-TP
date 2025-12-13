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
let question = "";
let nbVie = 3;
let pb = 0;
let restart = false;
let peutClic = true;
let nb0a2

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
  fond3Src: "assets/images/fond3.jpeg",
};

let boutonStart = {
  x: largeurCanvas / 2 - 112,
  y: hauteurCanvas / 2 + 15,
  hauteur: 55,
  largeur: 225,
  teinte: 0,
  texte: "Démarrer",
};

let boutonRestart = {
  x: largeurCanvas / 2 + 247,
  y: largeurCanvas / 2 + 170,
  hauteur: 55,
  largeur: 150,
  teinte: 0,
  texte: "Recommencer",
};

let tableau = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 500,
};

let listeFlag = [
  {
    nom: "Canada",
    img: new Image(),
    src: "assets/images/drapeaux/canada.png",
    estPose: false,
  },
  {
    nom: "Chine",
    img: new Image(),
    src: "assets/images/drapeaux/chine.png",
    estPose: false,
  },
  {
    nom: "États unis",
    img: new Image(),
    src: "assets/images/drapeaux/é-u.png",
    estPose: false,
  },
  (espagne = {
    nom: "Espagne",
    img: new Image(),
    src: "assets/images/drapeaux/espagne.png",
    estPose: false,
  }),
  (france = {
    nom: "France",
    img: new Image(),
    src: "assets/images/drapeaux/france.png",
    estPose: false,
  }),
  (italie = {
    nom: "Italie",
    img: new Image(),
    src: "assets/images/drapeaux/italie.png",
    estPose: false,
  }),
  (japon = {
    nom: "Japon",
    img: new Image(),
    src: "assets/images/drapeaux/japon.png",
    estPose: false,
  }),
  (maroc = {
    nom: "Maroc",
    img: new Image(),
    src: "assets/images/drapeaux/maroc.png",
    estPose: false,
  }),
  (mexique = {
    nom: "Mexique",
    img: new Image(),
    src: "assets/images/drapeaux/mexique.png",
    estPose: false,
  }),
  (portugal = {
    nom: "Portugal",
    img: new Image(),
    src: "assets/images/drapeaux/portugal.png",
    estPose: false,
  }),
  (ukraine = {
    nom: "Ukraine",
    img: new Image(),
    src: "assets/images/drapeaux/ukraine.png",
    estPose: false,
  }),
  (nom = {
    nom: "Algérie",
    img: new Image(),
    src: "assets/images/drapeaux/algérie.png",
    estPose: false,
  }),
  (nom = {
    nom: "Argentine",
    img: new Image(),
    src: "assets/images/drapeaux/argentine.png",
    estPose: false,
  }),
  (nom = {
    nom: "Australie",
    img: new Image(),
    src: "assets/images/drapeaux/australie.png",
    estPose: false,
  }),
  (nom = {
    nom: "Belgique",
    img: new Image(),
    src: "assets/images/drapeaux/belgique.png",
    estPose: false,
  }),
  (nom = {
    nom: "Brésil",
    img: new Image(),
    src: "assets/images/drapeaux/brésil.png",
    estPose: false,
  }),
  (nom = {
    nom: "Inde",
    img: new Image(),
    src: "assets/images/drapeaux/inde.png",
    estPose: false,
  }),
  (nom = {
    nom: "Iran",
    img: new Image(),
    src: "assets/images/drapeaux/iran.png",
    estPose: false,
  }),
  (nom = {
    nom: "Iraq",
    img: new Image(),
    src: "assets/images/drapeaux/iraq.png",
    estPose: false,
  }),
  (nom = {
    nom: "Irlande",
    img: new Image(),
    src: "assets/images/drapeaux/irlande.png",
    estPose: false,
  }),
  (nom = {
    nom: "Islande",
    img: new Image(),
    src: "assets/images/drapeaux/islande.png",
    estPose: false,
  }),
  (nom = {
    nom: "Nouvelle-Zélande",
    img: new Image(),
    src: "assets/images/drapeaux/n-zélande.png",
    estPose: false,
  }),
  (nom = {
    nom: "Norvège",
    img: new Image(),
    src: "assets/images/drapeaux/norvège.png",
    estPose: false,
  }),
  (nom = {
    nom: "Turquie",
    img: new Image(),
    src: "assets/images/drapeaux/turquie.png",
    estPose: false,
  }),
  (nom = {
    nom: "Royaume-Uni",
    img: new Image(),
    src: "assets/images/drapeaux/u.k.png",
    estPose: false,
  }),
];

let listeQuestion = [
  (flag1 = null),
  (flag2 = null),
  (flag3 = null),
  (flag4 = null),
];
let posFlag1 = {
  nom: null,
  x: largeurCanvas / 2 - 248,
  y: hauteurCanvas / 2 - 48,
  largeur: 250,
  hauteur: 150,
  estQuestion: false,
};
let posFlag2 = {
  nom: null,
  x: largeurCanvas / 2 - 1,
  y: hauteurCanvas / 2 - 48,
  largeur: 250,
  hauteur: 150,
  estQuestion: false,
};
let posFlag3 = {
  nom: null,
  x: largeurCanvas / 2 - 248,
  y: hauteurCanvas / 2 + 97,
  largeur: 250,
  hauteur: 150,
  estQuestion: false,
};
let posFlag4 = {
  nom: null,
  x: largeurCanvas / 2 - 1,
  y: hauteurCanvas / 2 + 97,
  largeur: 250,
  hauteur: 150,
  estQuestion: false,
};

let caseRéponse = {
  couleur: `white`,
  x: -1000,
  y: -1000,
  largeur: 250,
  hauteur: 150,
  estVisible: false,
  pos: 0,
};

let teinte = {
  r: 0,
  g: 0,
  b: 0,
  i: 0,
};

let musique = {
  goldenrod: new Audio("assets/musiques/goldenrod.mp3"),
  littleroot: new Audio("assets/musiques/littleroot.mp3"),
  surf: new Audio("assets/musiques/surf.mp3")
};

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
    if (nb0a2 == 0) {
      musique.goldenrod.loop = true;
      musique.goldenrod.volume = 0.4;
      musique.goldenrod.play();
    } else if (nb0a2 == 1) {
      musique.littleroot.loop = true;
      musique.littleroot.volume = 0.4;
      musique.littleroot.play();
    } else {
      musique.surf.loop = true;
      musique.surf.volume = 0.4;
      musique.surf.play();
    }

  } else if (etat == "fin") {
    afficherFin();
  } else {
    console.error("erreur");
    debugger;
  }
  checkScoreFinal();
}

function checkScoreFinal() {
  if (nbVie == -1) {
    etat = "fin";
    if (pb == 0) {
      pb = score;
    }
    return score;
  }
}

function checkRecord() {
  if (score > pb) {
    pb = score;
  }
}

function Recommencer() {
  etat = "intro";
  nbVie = 3;
  restart = true;
  resetQuestion();
}

// =================== FONCTION CLIC =======================

function clicCanvas(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  if (
    etat == "intro" &&
    detecterClicObjet(curseurX, curseurY, boutonStart) == true
  ) {
    etat = "jeu";
    nb0a2 = Math.floor(Math.random() * 3);
    console.log(nb0a2);
    shuffle();
  } else if (etat == "jeu") {
    if (detecterClicObjet(curseurX, curseurY, posFlag1) == true) {
      caseRéponse.estVisible = true;
      caseRéponse.pos = 1;
      if (posFlag1.estQuestion == true) {
        score += 1;
        caseRéponse.couleur = `rgba(102,255,15,0.7)`;
      } else {
        nbVie--;
        caseRéponse.couleur = `rgba(255,55,15,0.7)`;
      }
      peutClic = false;
      setTimeout(function () {
        caseRéponse.estVisible = false;
        shuffle();
        peutClic = true;
      }, 700);
      resetQuestion();
    } else if (detecterClicObjet(curseurX, curseurY, posFlag2) == true) {
      caseRéponse.estVisible = true;
      caseRéponse.pos = 2;
      if (posFlag2.estQuestion == true) {
        score += 1;
        caseRéponse.couleur = `rgba(102,255,15,0.7)`;
      } else {
        nbVie--;
        caseRéponse.couleur = `rgba(255,55,15,0.7)`;
      }
      peutClic = false;
      setTimeout(function () {
        caseRéponse.estVisible = false;
        shuffle();
        peutClic = true;
      }, 700);
      resetQuestion();
    } else if (detecterClicObjet(curseurX, curseurY, posFlag3) == true) {
      caseRéponse.estVisible = true;
      caseRéponse.pos = 3;
      if (posFlag3.estQuestion == true) {
        score += 1;
        caseRéponse.couleur = `rgba(102,255,15,0.7)`;
      } else {
        nbVie--;
        caseRéponse.couleur = `rgba(255,55,15,0.7)`;
      }
      peutClic = false;
      setTimeout(function () {
        caseRéponse.estVisible = false;
        shuffle();
        peutClic = true;
      }, 700);
      resetQuestion();
    } else if (detecterClicObjet(curseurX, curseurY, posFlag4) == true) {
      caseRéponse.estVisible = true;
      caseRéponse.pos = 4;
      if (posFlag4.estQuestion == true) {
        score += 1;
        caseRéponse.couleur = `rgba(102,255,15,0.7)`;
      } else {
        nbVie--;
        caseRéponse.couleur = `rgba(255,55,15,0.7)`;
      }
      peutClic = false;
      setTimeout(function () {
        caseRéponse.estVisible = false;
        shuffle();
        peutClic = true;
      }, 700);
      resetQuestion();
    }
  } else if (
    etat == "fin" &&
    detecterClicObjet(curseurX, curseurY, boutonRestart)
  ) {
    Recommencer();
  }
}

//==================== MÉLANGER LES DRAPEAUX ==================

function shuffle() {
  for (let i = 0; i < listeFlag.length; i++) {
    let flag = listeFlag[i];
    flag.estPose = false;
  }
  flag1 = melangerFlags();
  flag2 = melangerFlags();
  flag3 = melangerFlags();
  flag4 = melangerFlags();
  question = choisirQuestion();
}

function resetQuestion() {
  posFlag1.estQuestion = false;
  posFlag2.estQuestion = false;
  posFlag3.estQuestion = false;
  posFlag4.estQuestion = false;
}

function melangerFlags() {
  let iRando = Math.floor(Math.random() * listeFlag.length);
  let flagRando = listeFlag[iRando];
  let nbRecherches = 0;
  while (flagRando.estPose == true && nbRecherches < 1000) {
    nbRecherches++;
    iRando = Math.floor(Math.random() * listeFlag.length);
    flagRando = listeFlag[iRando];
  }
  if (nbRecherches >= 1000) {
    console.log("Aucune combinaison possible");
  }
  flagRando.estPose = true;
  return flagRando;
}

function choisirQuestion() {
  let pays = "";
  let nb0a3 = Math.floor(Math.random() * 4);
  if (nb0a3 == 0) {
    pays = flag1.nom;
    posFlag1.estQuestion = true;
  } else if (nb0a3 == 1) {
    pays = flag2.nom;
    posFlag2.estQuestion = true;
  } else if (nb0a3 == 2) {
    pays = flag3.nom;
    posFlag3.estQuestion = true;
  } else {
    pays = flag4.nom;
    posFlag4.estQuestion = true;
  }
  return pays;
}

// ================== AFFICHER L'INTRO ========================

function afficherIntro() {
  score = 0;
  afficherFondIntro();
  afficherTitre();
  afficherDemarrer();
  afficherInfo();
}

function afficherFondIntro() {
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
}
function afficherTitre() {
  teinte.i++;

  if (teinte.i >= 360) {
    teinte.i = 0;
  }

  //====OMBRE-TEXTE
  contexte.fillStyle = "black";
  contexte.font = "70px SuperPixel";
  contexte.fillText("VEXIQUIZ", largeurCanvas / 2 + 5, hauteurCanvas / 2 - 15);
  //====TEXTE
  contexte.fillStyle = `hsl(${teinte.i}, 50%, 50%)`;
  contexte.font = "70px SuperPixel";
  contexte.fillText("VEXIQUIZ", largeurCanvas / 2, hauteurCanvas / 2 - 20);
}

function afficherDemarrer() {
  //====OMBRE-BOUTON
  contexte.fillStyle = `rgba(68, 255, 152, 1)`;
  contexte.fillRect(
    boutonStart.x - 2,
    boutonStart.y + 3,
    boutonStart.largeur + 4,
    boutonStart.hauteur + 2
  );
  contexte.fillStyle = `rgba(5, ${teinte.g}, 0, 0.7)`;
  teinte.g += 6;
  if (teinte.g > 460) {
    teinte.g = 0;
  }
  contexte.fillRect(
    boutonStart.x - 2,
    boutonStart.y + 3,
    boutonStart.largeur + 4,
    boutonStart.hauteur + 2
  );

  //====BOUTON
  contexte.fillStyle = `rgba(5, 230, 46, 1)`;
  contexte.fillRect(
    boutonStart.x,
    boutonStart.y,
    boutonStart.largeur,
    boutonStart.hauteur
  );

  contexte.fillStyle = "black";
  contexte.textAlign = "center";
  contexte.font = "22px SuperPixel";
  contexte.fillText(
    boutonStart.texte,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 52
  );
  contexte.fillStyle = "white";
  contexte.textAlign = "center";
  contexte.font = "22px SuperPixel";
  contexte.fillText(
    boutonStart.texte,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 50
  );
}

function afficherInfo() {
  contexte.fillStyle = `rgba(58, 46, 46, 0.75)`;
  contexte.fillRect(largeurCanvas / 2 - 225, hauteurCanvas / 2 + 85, 450, 110);
  contexte.fillStyle = `rgba(0, 0, 0, 1)`;
  contexte.strokeRect(
    largeurCanvas / 2 - 225,
    hauteurCanvas / 2 + 85,
    450,
    110
  );
  contexte.fillStyle = `white`;
  contexte.font = "24px trebuchet";
  contexte.fillText(
    `Cliquez sur le bon drapeau pour augmenter votre score!`,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 125,
    440
  );
  contexte.fillText(
    `(Attention vous avez 3 vies...)`,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 170,
    250
  );
}

//======================== AFFICHER LE JEU =====================

function afficherJeu() {
  afficherUI();
  afficherTableau();
  afficherQuestion();
  checkScoreFinal();
  afficherCaseReponse();
}

function afficherUI() {
  fond.image.src = fond.fond3Src;
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
  //OMBRE BACKGROUND SCORE
  contexte.fillStyle = "black";
  contexte.fillRect(628, 18, 250, 100);

  //BACKGROUND SCORE
  contexte.fillStyle = `hsl(${teinte.i}, 50%, 50%)`;
  teinte.i++;
  contexte.fillRect(625, 15, 250, 100);
  if (teinte.i >= 360) {
    teinte.i = 0;
  }
  // BACKGROUND TEXTE SCORE
  contexte.fillStyle = `rgba(47, 255, 0, 1)`;
  contexte.font = " 26px Pixel2";
  contexte.fillText(`Scores : ${score}`, 750, 52);
  // TEXTE SCORE
  contexte.fillStyle = "aliceblue";
  contexte.font = " 25px Pixel2";
  contexte.fillText(`Scores : ${score}`, 750, 50);

  //BACKGROUND TEXTE RECORD
  contexte.fillStyle = `rgba(217, 0, 0, 1)`;
  contexte.font = "22px Pixel2";
  contexte.fillText(`meilleur : ${pb}`, 752, 97);
  // TEXTE RECORD
  contexte.fillStyle = "Aliceblue";
  contexte.font = "21px Pixel2";
  contexte.fillText(`meilleur : ${pb}`, 752, 95);

  // OMBRE BACKGROUND VIE
  contexte.fillStyle = "black";
  contexte.fillRect(28, 18, 180, 80);

  //BACKGROUND VIE
  contexte.fillStyle = `Crimson`;
  boutonRestart.teinte.i++;
  contexte.fillRect(25, 15, 180, 80);

  //BACKGROUND TEXTE VIE
  contexte.fillStyle = `rgba(0, 30, 255, 1)`;
  contexte.font = "28px Pixel2";
  contexte.fillText(`Vie : ${nbVie}`, 115, 67);

  //TEXTE VIE
  contexte.fillStyle = `rgba(236, 242, 255, 1)`;
  contexte.font = "27px Pixel2";
  contexte.fillText(`Vie : ${nbVie}`, 115, 65);
}

function afficherTableau() {
  contexte.fillStyle = "black";
  contexte.fillRect(largeurCanvas / 2 - 245, hauteurCanvas / 2 - 45, 500, 300);
  contexte.fillStyle = "white";
  contexte.fillRect(largeurCanvas / 2 - 250, hauteurCanvas / 2 - 50, 500, 300);
}

function afficherQuestion() {
  if (flag1.nom != null) {
    flag1.img.src = flag1.src;
    contexte.drawImage(
      flag1.img,
      posFlag1.x,
      posFlag1.y,
      posFlag1.largeur,
      posFlag1.hauteur
    );
  }
  if (flag2.nom != null) {
    flag2.img.src = flag2.src;
    contexte.drawImage(
      flag2.img,
      posFlag2.x,
      posFlag2.y,
      posFlag2.largeur,
      posFlag2.hauteur
    );
  }
  if (flag3.nom != null) {
    flag3.img.src = flag3.src;
    contexte.drawImage(
      flag3.img,
      posFlag3.x,
      posFlag3.y,
      posFlag3.largeur,
      posFlag3.hauteur
    );
  }
  if (flag4.nom != null) {
    flag4.img.src = flag4.src;
    contexte.drawImage(
      flag4.img,
      posFlag4.x,
      posFlag4.y,
      posFlag4.largeur,
      posFlag4.hauteur
    );
  }

  //OMBRE QUESTION
  contexte.fillStyle = "Black";
  contexte.font = "40px Superpixel";
  contexte.fillText(
    `Trouvez : ${question}`,
    largeurCanvas / 2 + 3,
    hauteurCanvas / 2 - 72,
    500,
    100
  );
  //QUESTION
  contexte.fillStyle = "Aliceblue";
  contexte.font = "40px Superpixel";
  contexte.fillText(
    `Trouvez : ${question}`,
    largeurCanvas / 2,
    hauteurCanvas / 2 - 75,
    500,
    100
  );
}

//AFFICHER SI LA REPONSE EST BONNE OU MAUVAISE
function afficherCaseReponse() {
  if (caseRéponse.estVisible == true) {
    contexte.fillStyle = caseRéponse.couleur;
    if (caseRéponse.pos == 1) {
      contexte.fillRect(
        posFlag1.x,
        posFlag1.y,
        caseRéponse.largeur,
        caseRéponse.hauteur
      );
    } else if (caseRéponse.pos == 2) {
      contexte.fillRect(
        posFlag2.x,
        posFlag2.y,
        caseRéponse.largeur,
        caseRéponse.hauteur
      );
    } else if (caseRéponse.pos == 3) {
      contexte.fillRect(
        posFlag3.x,
        posFlag3.y,
        caseRéponse.largeur,
        caseRéponse.hauteur
      );
    } else {
      contexte.fillRect(
        posFlag4.x,
        posFlag4.y,
        caseRéponse.largeur,
        caseRéponse.hauteur
      );
    }
  }
}

// ===================== AFFICHER LA FIN =====================

function afficherFin() {
  afficherGameOver();
  afficherScore();
  afficherRestart();
}

function afficherGameOver() {
  //BACKGROUND
  checkRecord();
  contexte.fillStyle = "black";
  contexte.fillRect(0, 0, largeurCanvas, hauteurCanvas);
  //FOND GAMEOVER
  contexte.fillStyle = `hsl(${teinte.i}, 50%, 50%)`;
  teinte.i++;
  contexte.font = "60px Superpixel";
  contexte.fillText(
    "Partie terminée!",
    largeurCanvas / 2,
    hauteurCanvas / 2 - 50
  );
  //TEXTE GAMEOVER
  contexte.fillStyle = "aliceblue";
  contexte.font = "58px Superpixel";
  contexte.fillText(
    "Partie terminée!",
    largeurCanvas / 2,
    hauteurCanvas / 2 - 53
  );
}

function afficherScore() {
  //BACKGROUND OMBRE SCORE
  contexte.fillStyle = `rgba(${teinte.r},${teinte.g}, 10, 1)`;
  teinte.r += 10;
  teinte.g += 1;
  if (teinte.r > 460) {
    teinte.r = 0;
    teinte.g = 0;
  }
  contexte.fillRect(largeurCanvas / 2 - 128, hauteurCanvas / 2 + 31, 255, 105);

  //BACKGROUND SCORE
  contexte.fillStyle = `rgba(234, 182, 26, 1)`;
  contexte.fillRect(largeurCanvas / 2 - 125, hauteurCanvas / 2 + 33, 250, 100);
  // OMBRE SCORE FINAL
  contexte.fillStyle = "black";
  contexte.font = "28px Pixel2";
  contexte.fillText(
    `Score : ${score}`,
    largeurCanvas / 2 + 3,
    hauteurCanvas / 2 + 78
  );
  //SCORE FINAL
  contexte.fillStyle = "aliceblue";
  contexte.font = "28px Pixel2";
  contexte.fillText(
    `Score : ${score}`,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 75
  );
  // OMBRE PERSONAL BEST
  contexte.fillStyle = "black";
  contexte.fillText(
    `Record : ${pb}`,
    largeurCanvas / 2 + 3,
    hauteurCanvas / 2 + 103
  );
  //PERSONAL BEST
  contexte.fillStyle = `aliceblue`;
  contexte.fillText(
    `Record : ${pb}`,
    largeurCanvas / 2,
    hauteurCanvas / 2 + 100
  );
}

function afficherRestart() {
  //OMBRE RESTART
  contexte.fillStyle = `rgba(5, ${teinte.g}, 0, 1)`;
  teinte.g += 6;
  if (teinte.g > 460) {
    teinte.g = 0;
  }
  contexte.fillRect(
    boutonRestart.x - 2,
    boutonRestart.y + 1,
    boutonRestart.largeur + 5,
    boutonRestart.hauteur + 3
  );

  contexte.fillStyle = "rgba(5, 230, 46, 1)";
  contexte.fillRect(
    boutonRestart.x,
    boutonRestart.y,
    boutonRestart.largeur,
    boutonRestart.hauteur
  );

  contexte.fillStyle = "black";
  contexte.font = "15px pixel2";
  contexte.fillText(
    "Recommencer",
    largeurCanvas / 2 + 322,
    boutonRestart.y + 33
  );

  contexte.fillStyle = "aliceblue";
  contexte.font = "15px pixel2";
  contexte.fillText(
    "Recommencer",
    largeurCanvas / 2 + 322,
    boutonRestart.y + 30
  );
}

// ================== DETECTER LE CLIC =====================

function detecterClicObjet(curseurX, curseurY, objet) {
  if (
    curseurX >= objet.x &&
    curseurX <= objet.x + objet.largeur &&
    curseurY >= objet.y &&
    curseurY <= objet.y + objet.hauteur &&
    peutClic == true
  ) {
    return true;
  }
  return false;
}

window.addEventListener("load", initialiser);
