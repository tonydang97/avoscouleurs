import React from 'react'
import "./TableauTransfert.css"

const TableauTransfert = () => {
  return (
    <div className='' id="Tableau">
        <table>
            <caption>Tableau comparatif entre chaques méthode de transferts.</caption>
            <thead>
                <tr>
                    <th>Techniques</th>
                    <th>Tenu dans le temps</th>
                    <th>Qualité</th>
                    <th>Nombre de couleurs par motif</th>
                    <th>Intensité des couleurs</th>
                    <th>Dégradés possibles</th>
                    <th>Prix</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>Transfert numérique</td>
                    <td>faible</td>
                    <td>moyenne</td>
                    <td>illimité</td>
                    <td>moyenne</td>
                    <td>oui</td>
                    <td>€€</td>
                </tr>
                <tr>
                    <td>Transfert sérigraphique</td>
                    <td>bonne</td>
                    <td>élevée</td>
                    <td>1 à 8</td>
                    <td>élevée</td>
                    <td>oui</td>
                    <td>€€€</td>
                </tr>
                <tr>
                    <td>Transfert DTF</td>
                    <td>moyenne</td>
                    <td>bonne</td>
                    <td>illimité</td>
                    <td>bonne</td>
                    <td>oui</td>
                    <td>€€</td>
                </tr>
                <tr>
                    <td>Transfert Flex</td>
                    <td>moyenne</td>
                    <td>bonne</td>
                    <td>1 seule</td>
                    <td>bonne</td>
                    <td>non mais fluroescent oui</td>
                    <td>€€</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableauTransfert