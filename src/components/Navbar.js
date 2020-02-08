import React from 'react'
import '../stylesheets/navbar.scss';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql, useStaticQuery }  from 'gatsby';



const Navbar = () => {

    const logo = useStaticQuery(graphql`
    query {
        icons: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "icons" } }) {
           edges {
             node {
               childImageSharp {
                 fixed(width: 150) {
                     ...GatsbyImageSharpFixed
                     originalName
                 }
               }
               
             }
           }
         }
        }
    
    `);

    

    let logoImageSrc = logo.icons.edges.filter((node) => {
        return node.node.childImageSharp.fixed.originalName === "logo.png";
    })
    let logoImage = logoImageSrc[0].node.childImageSharp.fixed ;

    return (
        <div>
        <section className="navbar-container">
            <div className="logo-container">
                <Img className="logo" fixed={logoImage} alt="camper party logo" />
                <h1>Camper party</h1>
                </div>
            <div className="link-container">
                <Link to="/">Incio</Link>
                <Link to="/">Sobre Camper Party</Link>
                <Link to="/">Serivicio</Link>
                <Link to="/">Galeria</Link>
                <Link to="/">Contacto</Link>
            </div>
        </section>
            
        </div>
    )
}

export default Navbar


