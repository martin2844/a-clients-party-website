import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import '../stylesheets/galeria.scss';



const Galeria = () => {

   //gets window dimensions to conditionally render amount of images in carrousel
   const windowGlobal = typeof window !== 'undefined' && window
   function getWindowDimensions() {
     const { innerWidth: width, innerHeight: height } = windowGlobal;
     return {
       width,
       height
     };
   }
   
   function useWindowDimensions() {
     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
   
     useEffect(() => {
       function handleResize() {
         setWindowDimensions(getWindowDimensions());
       }
   
       windowGlobal.addEventListener('resize', handleResize);
       return () => windowGlobal.removeEventListener('resize', handleResize);
     }, []);
   
     return windowDimensions;
   }
    
    const { width } = useWindowDimensions();

    const [imageCount, setImageCount] = useState(1);

    useEffect(() => {

      if(width >= 1000) {
        setImageCount(3);
      }  else if (width >= 800 ) {
        setImageCount(2);
      } else if (width <= 759) {
        setImageCount(1);
      }
      
    
    }, [width]);

    
    const partyQuery = useStaticQuery(graphql`
    query {
        party: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "party" } }) {
           edges {
             node {
               childImageSharp {
                 fluid(quality: 100, maxWidth: 800) {
                     ...GatsbyImageSharpFluid
                     originalName
                 }
               }
               
             }
           }
         }
        }
    
    `);

    const imageMap = partyQuery.party.edges.map((image) => {
     let theFluid = image.node.childImageSharp.fluid
        return (
            <div className="image-slider-container" key={theFluid.originalName}>
                <Img className="image-slider-iteree" fluid={theFluid} alt={theFluid.originalName} />
            </div>
        )
    })


    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: imageCount,
        slidesToScroll: 1,
        
       
      };


    return (
        <Layout>
            <Helmet>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Helmet>
            <section className="galeria-top animated fadeIn">
            <p>Algunas de nuestras ambientaciones</p>
            </section>
            <div className="slider-container animated fadeIn">
            <Slider {...settings}>
                    {imageMap}
             </Slider>
             </div>
        </Layout>
    )
}

export default Galeria;
