// Définir l'arbre décisionnel
const decisionTree = {
  question: "Quel scénario correspond le mieux à votre situation ?",
  answers: {
    "Je fais de l'archivage numérique sans SAE": {
      question: "Quel est votre objectif principal ?",
      answers: {
        "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
          result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
          additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation."
        },
        "Cadrer les relations avec les services": {
          question: "Quel aspect souhaitez-vous cadrer ?",
          answers: {
            "Cadrer le versement d'une typologie documentaire": {
              result: "Le document qu'il vous faut est le contrat de versement."
            },
            "Cadrer les versements d'un service": {
              result: "Le document qu'il vous faut est le contrat de service."
            }
          }
        }
      }
    },
    "Je fais de l'archivage numérique avec un SAE internalisé": {
      question: "Quel est votre objectif principal ?",
      answers: {
        "Conformité interne": {
          help: {
            text: "Aled je me souviens plus de la super phrase de Maud pour l'explication",
            image: "https://static.wikia.nocookie.net/the-scrappy/images/c/cb/Clippy.png/revision/latest?cb=20231027172058"  // Clippy !!!! <3
          },
          question: "Quel est votre besoin spécifique ?",
          answers: {
            "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
              result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
              additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation."
            },
            "Cadrer les relations avec les services": {
              question: "Quel aspect souhaitez-vous cadrer ?",
              answers: {
                "Cadrer le versement d'une typologie documentaire": {
                  result: "Le document qu'il vous faut est le contrat de versement."
                },
                "Cadrer les versements d'un service": {
                  result: "Le document qu'il vous faut est le contrat de service."
                }
              }
            }
          }
        },
        "Je propose un service mutualisé": {
          result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offres de service.",
          additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
        }
      }
    },
    "Je fais de l'archivage numérique avec un SAE partiellement ou totalement externalisé": {
      question: "Quel est votre objectif principal ?",
      answers: {
        "Conformité interne": {
          help: {
            text: "Aled je me souviens plus de la super phrase de Maud pour l'explication",
            image: "https://static.wikia.nocookie.net/the-scrappy/images/c/cb/Clippy.png/revision/latest?cb=20231027172058"  // Clippy !!!! <3
          },
          question: "Quel est votre besoin spécifique ?",
          answers: {
            "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
              result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
              additionalInfo: "Pour aller plus loin ou si vous avez déjà rédigé une politique d'archivage, pensez à la politique de pérennisation."
            },
            "Cadrer les relations avec les services": {
              question: "Quel aspect souhaitez-vous cadrer ?",
              answers: {
                "Cadrer le versement d'une typologie documentaire": {
                  result: "Le document qu'il vous faut est le contrat de versement."
                },
                "Cadrer les versements d'un service": {
                  result: "Le document qu'il vous faut est le contrat de service."
                }
              }
            }
          }
        },
        "Externalisation": {
          result: "Il vous faut une convention d'archivage."
        },
        "Tiers-hébergement": {
          result: "Il vous faut un cahier des charges."
        },
        "Mutualisation": {
          question: "Quelle est votre situation ?",
          answers: {
            "Je veux adhérer à un service mutualisé": {
              result: "Il vous faut une convention d'archivage."
            },
            "Je propose un service mutualisé": {
              result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offres de service.",
              additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
            }
          }
        },
        "Dépôt auprès des AD ou groupement de collectivités territoriales": {
          result: "Il vous faut une convention de dépôt."
        }
      }
    },
    "Je mets en place un SAE": {
      question: "Quel est votre besoin principal ?",
      answers: {
        "Conformité interne": {
          help: {
            text: "Aled je me souviens plus de la super phrase de Maud pour l'explication",
            image: "https://static.wikia.nocookie.net/the-scrappy/images/c/cb/Clippy.png/revision/latest?cb=20231027172058"   // Clippy !!!! <3
          },
          question: "Quel est votre besoin spécifique ?",
          answers: {
            "Légitimer l'action des archivistes auprès des interlocuteurs (DG, DSI, élus)": {
              result: "Le document qu'il vous faut est la politique d'archivage (ou politique d'archivage électronique).",
              additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation."
            },
            "Cadrer les relations avec les services": {
              question: "Quel aspect souhaitez-vous cadrer ?",
              answers: {
                "Cadrer le versement d'une typologie documentaire": {
                  result: "Le document qu'il vous faut est le contrat de versement."
                },
                "Cadrer les versements d'un service": {
                  result: "Le document qu'il vous faut est le contrat de service."
                }
              }
            }
          }
        },
        "Externalisation": {
          result: "Il vous faut une convention d'archivage."
        },
        "Tiers-hébergement": {
          result: "Il vous faut un cahier des charges."
        },
        "Mutualisation": {
          question: "Quelle est votre situation ?",
          answers: {
            "Je veux adhérer à un service mutualisé": {
              result: "Il vous faut une convention d'archivage."
            },
            "Je propose un service mutualisé": {
              result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offres de service.",
              additionalInfo: "Pour aller plus loin ou si vous avez déjà rédigé une politique d'archivage, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
            }
          }
        },
        "Certification (NF 461)": {
          result: "Il faut constituer la Documentation Générale et Technique du Système (DGTS)."
        }
      }
    }
  }
};
// Variables globales
let atRoot = true; // Variable qui vérifie si on est à la racine
let currentNode = decisionTree;
const historyStack = []; // Pile pour garder une trace des nœuds précédents

// Afficher la question ou le résultat
function showQuestion() {
  const container = document.getElementById('question-container');
  container.innerHTML = ''; // Effacer l'ancien contenu

  // Supprimer le bouton "Retour en arrière" si on est à la racine ou sur un résultat
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.remove();
  }

  // Ajouter la question
  if (currentNode.question) {
    atRoot = false; // On n'est plus à la racine après la première question

    const questionElement = document.createElement('p');
    questionElement.textContent = currentNode.question;
    container.appendChild(questionElement);

    // Ajouter les réponses sous forme de boutons
    for (const answer in currentNode.answers) {
      const button = document.createElement('button');
      button.className = "btn";
      button.textContent = answer;

      // Ajouter une bulle d'aide pour "Conformité interne"
      if (currentNode.answers[answer].help) {
        const helpIcon = document.createElement('span');
        helpIcon.className = "help-icon";
        helpIcon.textContent = "?";  // Point d'interrogation pour la bulle d'aide

        button.appendChild(helpIcon);

        helpIcon.onmouseover = () => {
          const tooltip = document.createElement('div');
          tooltip.className = "tooltip";
          tooltip.innerHTML = `<img src="${currentNode.answers[answer].help.image}" alt="Bulle d'aide" class="tooltip-image">
                               <span>${currentNode.answers[answer].help.text}</span>`;
          helpIcon.appendChild(tooltip);

          helpIcon.onmouseout = () => {
            tooltip.remove();
          };
        };
      }

      button.onclick = () => handleAnswer(answer);
      container.appendChild(button);
    }

    // Ajouter le bouton "Retour en arrière" uniquement si nécessaire
    if (historyStack.length > 0 && !document.querySelector('.back-button')) {
      const backButton = document.createElement('button');
      backButton.className = "btn back-button";
      backButton.textContent = "Retour en arrière";
      backButton.onclick = goBackInTree;
      container.parentNode.appendChild(backButton); // Ajouter le bouton sous le conteneur
    }

  } else if (currentNode.result) {
    console.log('Affichage du résultat :', currentNode.result);  // Debugging : afficher le résultat dans la console

    // Afficher le résultat principal
    const resultElement = document.createElement('p');
    resultElement.textContent = currentNode.result;  // Affichage du résultat principal
    const resultBlock = document.createElement('div');
    resultBlock.className = "result-block";
    resultBlock.appendChild(resultElement);
    container.appendChild(resultBlock);

    // Vérifier et afficher additionalInfo si présent
    if (currentNode.additionalInfo) {  // Utilisation de currentNode.additionalInfo
      const additionalInfoElement = document.createElement('div');
      additionalInfoElement.className = "additional-info"; // Classe pour styliser
      additionalInfoElement.textContent = currentNode.additionalInfo;  // Affichage du texte
      container.appendChild(additionalInfoElement);
    }

    // Bloc informatif (optionnel)
    const informativeBlock = document.createElement('div');
    informativeBlock.className = "informative-block";

    const linkText = document.createElement('p');
    linkText.textContent = "Vous pouvez également consulter les documents ci-dessous pour plus d'informations :";
    informativeBlock.appendChild(linkText);

    // Liens vers des ressources
    const linksContainer = document.createElement('div');
    linksContainer.className = "links-container";

    const link1 = document.createElement('a');
    link1.className = "link-btn";
    link1.href = "https://docs.google.com/document/d/1j5suZ54-yw8_VmiKoHzNxbZYgjeki2_1FFFXxX5QY24/edit?usp=sharing"; // Lien vers le glossaire
    link1.target = "_blank"; // Ouvre le lien dans un nouvel onglet
    link1.textContent = "Glossaire";
    linksContainer.appendChild(link1);

    const link2 = document.createElement('a');
    link2.className = "link-btn";
    link2.href = "https://docs.google.com/presentation/d/1bVa5n5kuxuRBJNUmPpvjqsr6gWNrIJrJ/edit?usp=sharing&ouid=108611846323455107841&rtpof=true&sd=true"; // Lien vers la cartographie
    link2.target = "_blank"; // Ouvre le lien dans un nouvel onglet
    link2.textContent = "Cartographie";
    linksContainer.appendChild(link2);

    informativeBlock.appendChild(linksContainer);
    container.appendChild(informativeBlock);

    // Ajouter le bouton "Recommencer le questionnaire" uniquement au niveau du résultat
    const restartButton = document.createElement('button');
    restartButton.className = "btn";
    restartButton.textContent = "Recommencer le questionnaire";
    restartButton.onclick = restart;

    const restartBlock = document.createElement('div');
    restartBlock.className = "restart-block";
    restartBlock.appendChild(restartButton);
    container.appendChild(restartBlock);
  }
}

// Gérer la réponse choisie
function handleAnswer(answer) {
  console.log('Réponse choisie :', answer); // Debugging : afficher la réponse choisie
  if (currentNode.answers && currentNode.answers[answer]) {
    historyStack.push(currentNode); // Sauvegarder le nœud actuel dans l'historique
    currentNode = currentNode.answers[answer]; // Naviguer dans l'arbre
    showQuestion(); // Mettre à jour l'affichage
  } else {
    console.log('Aucune réponse trouvée pour cette option.');
  }
}

// Retour en arrière dans l'arbre de décision
function goBackInTree() {
  const previousNode = historyStack.pop(); // Récupérer le dernier nœud
  if (previousNode) {
    currentNode = previousNode; // Revenir au nœud précédent
    showQuestion(); // Mettre à jour l'affichage
  }
}

// Recommencer le questionnaire
function restart() {
  currentNode = decisionTree; // Revenir à la racine de l'arbre
  historyStack.length = 0; // Réinitialiser l'historique
  atRoot = true; // Réinitialiser l'état de la racine
  startQuestionnaire(); // Revenir à la première question
}

// Démarrer le questionnaire
function startQuestionnaire() {
  document.getElementById('main-container').style.display = 'none';
  document.getElementById('question-container').style.display = 'block';
  showQuestion();
}
// Fonction pour compter le nombre total de questions dans la branche
function countQuestions(node) {
  let count = 0;
  if (node.question) {
    count += 1; // Si c'est une question, on l'ajoute au compteur
  }
  if (node.answers) {
    for (const answer in node.answers) {
      count += countQuestions(node.answers[answer]); // Comptabilise les questions dans les sous-nœuds
    }
  }
  return count;
}
