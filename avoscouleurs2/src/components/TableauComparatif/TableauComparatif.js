import React from 'react'
import "./TableauComparatif.css"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EuroIcon from '@mui/icons-material/Euro';
// import { yellow } from '@mui/material/colors';


const TableauTransfert = () => {
  return (
    <div className='' id="Tableau">
        <table>
            <caption>Tableau comparatif entre chaques marquages textiles</caption>
            <thead>
                <tr>
                    <th>Techniques</th>
                    <th>Durabilité</th>
                    <th>Qualité du rendu</th>
                    <th>Nombre de couleurs par motif</th>
                    <th>Intensité des couleurs</th>
                    <th>Dégradés possibles</th>
                    <th>Coût</th>
                </tr>
            </thead>          
            <tbody>
            <tr>
                    <td>Broderie</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td>1 à 12</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></td>
                    <td>non</td>
                    <td><EuroIcon /><EuroIcon /><EuroIcon /></td>
                </tr>
                <tr>
                    <td>Sérigraphie</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td>1 à 6</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></td>
                    <td>non</td>
                    <td><EuroIcon /></td>
                </tr>
                <tr>
                    <td>Sublimation</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></td>
                    <td>illimité</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td>oui</td>
                    <td><EuroIcon /><EuroIcon /><EuroIcon /><EuroIcon /></td>
                </tr>
                <tr>
                    <td>Transfert DTF</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></td>
                    <td>illimité</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td>oui</td>
                    <td><EuroIcon /><EuroIcon /></td>
                </tr>
                <tr>
                    <td>Transfert numérique</td>
                    <td><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></td>
                    <td>illimité</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></td>
                    <td>oui</td>
                    <td><EuroIcon /><EuroIcon /></td>
                </tr>
                <tr>
                    <td>Transfert sérigraphique</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></td>
                    <td>1 à 8</td>
                    <td><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></td>
                    <td>non</td>
                    <td><EuroIcon /><EuroIcon /><EuroIcon /></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableauTransfert