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
            result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offre de service.",
            additionalInfo: "Pour aller plus loin, pensez à la politique de pérennisation et la déclaration des pratiques d'archivage."
          }
        }
      },
      "Je fais de l'archivage numérique avec un SAE partiellement ou totalement externalisé": {
        question: "Quel est votre objectif principal ?",
        answers: {
          "Conformité interne": {
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
                result: "Il vous faut la politique d'archivage (ou politique d'archivage électronique) ainsi qu'une offre de service.",
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
          "Définir la politique d'archivage électronique": {
            result: "Le document qu'il vous faut est la politique d'archivage électronique."
          },
          "Accompagner la mise en œuvre du SAE": {
            result: "Le document qu'il vous faut est le plan de mise en œuvre du SAE."
          }
        }
      },
      "Certification (NF 461)": {
        result: "Il faut constituer la Documentation Générale et Technique du Système (DGTS)."
      }
    }
  };
  
  // Variables globales
  let currentNode = decisionTree;
  
  // Afficher la question ou le résultat
  function showQuestion() {
    const container = document.getElementById('question-container');
    container.innerHTML = ''; // Effacer l'ancien contenu
  
    if (currentNode.question) {
      // Afficher la question
      const questionElement = document.createElement('p');
      questionElement.textContent = currentNode.question;
      container.appendChild(questionElement);
  
      // Afficher les réponses
      for (const answer in currentNode.answers) {
        const button = document.createElement('button');
        button.className = "btn";
        button.textContent = answer;
        button.onclick = () => handleAnswer(answer);
        container.appendChild(button);
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
  
      // Bloc du bouton de redémarrage (sans fond de couleur)
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
      currentNode = currentNode.answers[answer]; // Naviguer dans l'arbre
      showQuestion(); // Afficher la question suivante ou le résultat
    }
  }
  
  // Recommencer le questionnaire
  function restart() {
    currentNode = decisionTree; // Revenir au début de l'arbre
    showQuestion(); // Redémarrer la logique du questionnaire
  }
  
  // Initialiser le questionnaire au chargement de la page
  document.addEventListener('DOMContentLoaded', function() {
    showQuestion();
  });
  