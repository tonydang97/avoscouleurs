import React from "react";
import styled from "styled-components";

const MentionData = [
  {
    title: "1. Présentation de notre site web",
    desc: "Conformément à la loi n° 2004-2005 du 21 juin 2004 pour la confiance dans l'économie numérique, notre site web créé par Dang Tony, propriétaire du site www.avoscouleurs.com, met à disposition du public les informations concernant notre entreprise. Eventuellement modifiables, nous vous invitons donc à consulter nos mentions légales le plus souvent possible, de manière à en prendre connaissance fréquemment.Le site www.avoscouleurs.com appartient à Dang Tony. Personne physique ou morale, Dang Tony est responsable de la publication, dont l'adresse e-mail est la suivante : dang.tonypro@gmail.com. Le site www.avoscouleurs.com est hébergé par Heroku, dont le siège social est localisé à 650 7th St, San Francisco, CA, 94103, United States”. Pour contacter heroku, rendez-vous sur leur site: https://www.heroku.com/contact ou joignez les au +1 (866) 278-1349",
  },
  {
    title: "2.Conditions générales d'utilisation du site et des services",
    desc: "En utilisant notre site web www.avoscouleurs.com, vous acceptez pleinement et entièrement les conditions générales d'utilisation précisées dans nos mentions légales. Accessible à tout type de visiteurs, il est important de préciser toutefois qu'une interruption pour maintenance du site web peut-être décidée par Dang Tony. Les dates et heures d'interruptions seront néanmoins précisées à l'avance aux utilisateurs. Le site www.avoscouleurs.com appartient à Franck Galaup - SARL au capital social de 7 622€ - SIRET: 39020283600032, dont le siège social est situé à l'adresse suivante 5 RUE JACQUES GUIGNARD   - 31820, PIBRAC. Personne physique ou morale, Dang Tony est responsable de la publication, dont l'adresse e-mail est la suivante : dang.tonypro@gmail.com. Le site www.avoscouleurs.com est hébergé par Heroku, dont le siège social est localisé à 650 7th St, San Francisco, CA, 94103, United States”. Pour contacter heroku, rendez-vous sur leur site: https://www.heroku.com/contact ou joignez les au +1 (866) 278-1349",
  },
  {
    title: "3. Les services proposés par A vos couleurs",
    desc: "En accord avec sa politique de communication, le site www.avoscouleurs.com a pour vocation d'informer les utilisateurs sur les services proposés par Franck Gaulaup, qui s'efforce alors de fournir des informations précises sur son activité. Cependant, des inexactitudes ou des omissions peuvent exister : la société ne pourra en aucun cas être tenue pour responsable pour toute erreur présente sur le site www.avoscouleurs.com.",
  },
  {
    title: "4. Limitations contractuelles",
    desc: "Les informations retranscrites sur notre site web www.avoscouleurs.com font l'objet de démarches qualitatives, en vue de nous assurer de leur fiabilité. Cependant, nous ne pourrons encourir de responsabilités en cas d'inexactitudes techniques lors de nos explications. Si vous constatez une erreur concernant des informations que nous auront pu omettre, n'hésitez pas à nous le signaler par mail à contact@avoscouleurs.com. Les liens reliés directement ou indirectement à notre site web www.avoscouleurs.com ne sont pas sous le contrôle de notre société. Par conséquent, nous ne pouvons nous assurer de l'exactitude des informations présentes sur ces autres sites internet. Utilisant la technologie JavaScript, le site www.avoscouleurs.com ne pourra être tenu pour responsable en cas de dommages matériels liés à son utilisation. Par ailleurs, toute autre type de conséquence liée à l'exploitation du site www.avoscouleurs.com qu'elle soit direct ou indirect (bug, incompatibilité, virus, perte de marché, etc.).",
  },
  {
    title: "5. Propriété intellectuelle et contenu du site internet",
    desc: "Le contenu rédactionnel du site web www.avoscouleurs.com appartient exclusivement à Dang Tony. Toute violation des droits d'auteur est sanctionnée par l'article L.335-2 du Code de la Propriété Intellectuelle, avec une peine encourue de 2 ans d'emprisonnement et de 150 000 € d'amende. La société se réserve également le droit de supprimer tout contenu contraire aux valeurs de l'entreprise ou à la législation applicable en France.",
  },
  {
    title: "6. Liens Hypertextes et cookies",
    desc: "Le site www.avoscouleurs.com contient un certain nombre de liens hypertextes vers d'autres sites (partenaires, informations, réseaux sociaux...) mis en place avec l'autorisation du propriétaire du site. Cependant, le propriétaire du site n'a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites. L'utilisateur est informé que lors de ses visites sur le site www.avoscouleurs.com, un ou des cookies sont susceptible de s'installer automatiquement sur son ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation. Le paramètrage du logiciel de navigation permet d'informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l'adresse suivante : www.cnil.fr Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies : Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok. Sous Netscape : onglet édition / préférences. Cliquez sur Avancées et choisissez Désactiver les cookies. Validez sur Ok.",
  },
  {
    title: "7. Droit applicable et lois concernées",
    desc: "Soumis au droit français, le site web www.avoscouleurs.com est encadré par la loi n° 2004-2005 du 21 juin 2004 pour la confiance dans l'économie numérique, l'article L.335-2 du Code de la Propriété Intellectuelle et la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004.",
  },
];

const Mention = () => {
  return (
    <Container>
      <Title>
        <h1 id="titre">Mention légales</h1>
      </Title>
      {MentionData.map((item, index) => {
        return (
          <Content key={index}>
            <Subtitle>{item.title}</Subtitle>
            <Description>{item.desc}</Description>
            <br />
          </Content>
        );
      })}
    </Container>
  );
};

export default Mention;

const Container = styled.div`
  width: 100%;
  padding: 3rem;
  text-align: justify;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;
const Content = styled.div``;
const Subtitle = styled.div`
  font-weight: bold;
`;
const Description = styled.div``;
