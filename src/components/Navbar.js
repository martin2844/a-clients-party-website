import React, { useState, useEffect } from 'react'
import '../stylesheets/navbar.scss';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';







const Navbar = ({position}) => {

    const logo = useStaticQuery(graphql`
    query {
        icons: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "icons" } }) {
           edges {
             node {
               childImageSharp {
                 fluid(maxWidth: 150) {
                     ...GatsbyImageSharpFluid
                     originalName
                 }
               }
               
             }
           }
         }
        }
    
    `);
    
    
    
   
    
    const [navBarClass, setNavBarClass] = useState('navbar-container');

    useEffect(() => {
        
        position >= 101 ? setNavBarClass("navbar-container short animated slideInDown") : setNavBarClass("navbar-container");


    }, [position])

    let logoImageSrc = logo.icons.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "logo.png";
    })
    let logoImage = logoImageSrc[0].node.childImageSharp.fluid ;


    return (
        <div>
        <section className={`${navBarClass}`}>
            <Link to="/">
            <div className="logo-container">
                <Img className="logo" fluid={logoImage} alt="camper party logo" />
                <h1>Camper party</h1>
                </div>
            </Link>
            <div className="link-container">
                <Link to="/">Incio</Link>
                <Link to="/acerca">Sobre Camper Party</Link>
                <Link to="/servicio">Serivicio</Link>
                <Link to="/galeria">Galeria</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </section>
            
        </div>
    )
}

export default Navbar


