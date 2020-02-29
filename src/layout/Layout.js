import React from 'react';
import Navbar from '../components/Navbar.js';
import { graphql, useStaticQuery }  from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { useScroll } from '../components/scrollPosition';

import '../stylesheets/layout.scss';





const Layout = (props) => {

    const background = useStaticQuery(graphql`
    query {
        icons: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "images" } }) {
           edges {
             node {
               childImageSharp {
                 fluid(quality:95, maxWidth: 1800) {
                     ...GatsbyImageSharpFluid
                     originalName
                 }
               }
               
             }
           }
         }
        }
    
    `);

  
    let backgroundSrc = background.icons.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "background.jpg";
    })
    let backgroundImage = backgroundSrc[0].node.childImageSharp.fluid;


    const { scrollY } = useScroll();
    
    return (
        <React.Fragment>
              <Helmet>
                <title>Camper Party</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Ambientacion para fiestas infantiles, carpas estilo tipi"/>
                <meta name="keywords" content="ambietacion, fiestas, infantiles, tipi party, carpa, tipi, barrio cerrado, nordelta" />
                <meta name="author" content="Martina Moroni"/>
                <link rel="canonical" href="https://camperparty.com.ar/" />
                <meta name="robots" content="index, follow" />
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
          </Helmet>

          <nav role="navigation">
  <div id="menuToggle" className={scrollY >= 101 ? "pos animated slideInDown" : null}>
    {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
    <input type="checkbox" />
    
    {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
    <span></span>
    <span></span>
    <span></span>
    
    {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
    <ul id="menu">
                <Link to="/"><li>Incio</li></Link>
                <Link to="/sobre"><li>Sobre Camper Party</li></Link>
                <Link to="/servicio"><li>Servicio</li></Link>
                <Link to="/galeria"><li>Galeria</li></Link>
                <Link to="/contacto"><li>Contacto</li></Link>
    </ul>
  </div>
</nav>

            <Navbar position={scrollY}/>

         


            <BackgroundImage
          Tag="section"
          className="background"
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
          fluid={backgroundImage}
          backgroundColor={`#040e18`}
        >
            <div className="content">
            {props.children}
            </div>
            </BackgroundImage>
        </React.Fragment>
    )
}

export default Layout
