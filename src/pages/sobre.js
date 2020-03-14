import React from 'react'
import Layout from '../layout/Layout'
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import '../stylesheets/sobre.scss';

const Acerca = () => {

    const aboutQuery = useStaticQuery(graphql`
    query {
        about: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "about" } }) {
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

    let img1Src = aboutQuery.about.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "foto-1.png";
    })
    let img1 = img1Src[0].node.childImageSharp.fluid;

    let img2Src = aboutQuery.about.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "foto-2.png";
    })
    let img2 = img2Src[0].node.childImageSharp.fluid;

    let img3Src = aboutQuery.about.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "foto-3.png";
    })
    let img3 = img3Src[0].node.childImageSharp.fluid;

    let img4Src = aboutQuery.about.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "foto-4.png";
    })
    let img4 = img4Src[0].node.childImageSharp.fluid;

    return (
        <Layout>
            <section className="sobre-top animated fadeIn">
                <h1 className="align-left">Amamos los detalles</h1>
                <p>Creamos espacios según la temática elegida. Fiestas personalizadas con carpas Tipi. Podes sumarle snacks divertidos para la noche, bandeja con alimentos para el desayuno y bolsitas mágicas para que se lleven los invitados de souvenir</p>
                <h1 className="align-right" style={{fontSize: "2.2rem"}}>La fiesta de tus sueños en casa!</h1>
            </section>
            <section className="sobre-bottom animated fadeIn">
                <div className="sobre-left">
                <Img className="img1" fluid={img1} alt={img1.originalName} />
                <Img className="img2" fluid={img2} alt={img2.originalName} />
                </div>
                <div className="sobre-right">
                <Img className="img4" fluid={img4} alt={img4.originalName} />
                <Img className="img3" fluid={img3} alt={img3.originalName} />
             
                </div>
            </section>
        </Layout>
    )
}

export default Acerca
