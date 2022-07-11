import React, {useState} from 'react';
import "./Accordion.css"
const Data = [
  {
      id: 1,
      question: "Puis-je personnaliser 1 seule pièce ?",
      answer: 'Bien sur ! Chez à vos couleurs, vous pouvez personnaliser des textiles à partir de 1 pièce.'
  },
  {
      id: 2,
      question: "Puis-je personnaliser les vêtements avec un surnom différent sur chaque produit ?",
      answer: 'Oui, il est possible de personnaliser avec des surnoms différents sur  une commande mais cela est faisable uniquement en broderie et en transferts. '
  },
  {
      id: 3,
      question: "Quel est le format à privilégier pour vous communiquer le logo ?",
      answer: 'Afin d’obtenir un résultat optimal, le format EPS ou le ficher .ai (Adobe Illustrator) sont les plus recommandés.'
  },
  {
      id: 4,
      question: "Puis-je récupérer ma commande directement à votre entrepôt ?",
      answer: "C'est tout à fait possible et c'est totalement gratuit !"
  },
  {
    id: 5,
    question: "Quel est le délai de livraison ?",
    answer: "Les délais annoncés sont à prendre en compte après la validation du BAT. 2 à 3 semaines si vous nous fournissez le support, sinon il faudra compter une semaine de plus."
  },
  {
    id: 6,
    question: "Quelle technique de marquage dois-je choisir ?",
    answer: "Tout dépend du textile/support, mais grâce à notre expertise nous pourrons vous conseiller le marquage le plus adapté en fonction du rapport qualité/prix.."
  },
  {
    id: 7,
    question: "Puis-je imprimer un logo d’une marque existante ?",
    answer: "Non, il est impossible de personnaliser des textiles avec des visuels, des logos ou des marques déposées car cela s'apparenterait à de la contrefaçon."
  },
  {
    id: 8,
    question: "Puis-je commander sur a vos couleurs si je suis un particulier ?",
    answer: "La réponse est : non, nous travaillons seulement avec des détaillants."
  },
];

function Accordion(){
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    setActiveAccordion(index)
  }

  return (
    <>
    <div className='containerfaq'>
        <div> 
            {/* <span className='accordion__title'>Foire aux questions</span> */}
            <h1>FAQ</h1>
        </div>
        <div className='accordion__faq'>
            {Data.map((item, index) => (
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                </div>
                <div>
                  {accordion === index ? (
                    <>
                    <span className="verticle">-</span> 
                    </>
                  ) : (
                    <>
                    <span className="verticle">+</span> 
                    </>
                  )}
                </div>
                <div>
                  <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                </div>  
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Accordion