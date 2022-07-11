import React from 'react'
import "./SectionFAQ.css"


const SectionFAQ = () => {
  return (
    <section className='sectionfaq'>
        <div className='containerfaq'>
            <div className='accordion-item' id="question1">
                <a className='accordion-link' href="#question1">
                Puis-je personnaliser 1 seule pièce ?
                <i className='plus'><ion-icon name="add-outline"></ion-icon></i>
                <i className='moins'><ion-icon name="remove-outline"></ion-icon></i>
                </a>
                <div className='answer'>
                <p>Bien sur ! Chez à vos couleurs, vous pouvez personnaliser des textiles à partir de 1 pièce.</p>
                </div>
            </div> 

            <div className='accordion-item' id="question2">
                <a className='accordion-link' href="#question2">
                Puis-je personnaliser les vêtements avec un surnom différent sur chaque produit ?
                <i className='plus'><ion-icon name="add-outline"></ion-icon></i>
                <i className='moins'><ion-icon name="remove-outline"></ion-icon></i>
                </a>
                <div className='answer'>
                <p>Oui, il est possible de personnaliser avec des surnoms différents sur  une commande mais cela est faisable uniquement en broderie et en transferts.</p> 
                </div>
            </div> 

            <div className='accordion-item' id="question3">
                <a className='accordion-link' href="#question3">
                Quel est le format à privilégier pour vous communiquer le logo ?
                <i className='plus'><ion-icon name="add-outline"></ion-icon></i>
                <i className='moins'><ion-icon name="remove-outline"></ion-icon></i>
                </a>
                <div className='answer'>
                <p>Afin d’obtenir un résultat optimal, le format EPS ou le ficher .ai (Adobe Illustrator) sont les plus recommandés.</p>
                </div>
            </div> 

            <div className='accordion-item' id="question4">
                <a className='accordion-link' href="#question4">
                    Puis-je récupérer ma commande directement à votre entrepôt ?
                    <i className='plus'><ion-icon name="add-outline"></ion-icon></i>
                    <i className='moins'><ion-icon name="remove-outline"></ion-icon></i>
                </a>
                <div className='answer'>
                    <p>C'est tout à fait possible et c'est totalement gratuit !</p>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default SectionFAQ