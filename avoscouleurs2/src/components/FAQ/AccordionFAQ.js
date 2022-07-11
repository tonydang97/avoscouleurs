import React from 'react'
import "./AccordionFAQ.css"

const AccordionFAQ = () => {
  return (
    <div className='wrapper'>
        <div className='accordion'>

            {Data.map((item, i) => {
                <div className='item'>
                    <div className='title'>
                        <h2>{item.quesion}</h2>
                    </div>
                    <div className='content'>{item.content}</div>
                </div>
            })}
        
        </div>
    </div>
  )
}

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
];

export default AccordionFAQ