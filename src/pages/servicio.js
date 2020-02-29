import React from 'react';
import Layout from '../layout/Layout';
import TipiPack from '../components/TipiPack';
import '../stylesheets/servicio.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Servicio = () => {

    const star = useStaticQuery(graphql`
    query {
        icons: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "icons" } }) {
           edges {
             node {
               childImageSharp {
                 fluid(quality: 100, maxWidth: 200) {
                     ...GatsbyImageSharpFluid
                     originalName
                 }
               }
               
             }
           }
         }
        }
    
    `);
    
    let starImageSrc = star.icons.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "star.png";
    })
    let starImage = starImageSrc[0].node.childImageSharp.fluid;

    


    const extraInfo = [
        {
            title: "Bandeja de desayuno",
            desc: "Incluye bandeja, vaso con tapa, plato, servilleta, cupcake, jugo de naranja o chocolatada",
            price: 210,
            color: "green"
        },
        {
            title: "Souvenir para invitados",
            desc: "Es personalizado, se consultan los gustos y preferencias, y se piensan propuestas",
            price: 150,
            color: "salmon"
        },
        {
            title: "Snacks para la noche",
            desc: "Opción de bolsas de pochoclos, cono de snacks salados, bolsitas de golosinas",
            price: 150,
            color: "pink"
        },
        {
            title: "Set de Higiene",
            desc: "Incluye pasta de dientes, cepillo de dientes y peine",
            price: 150,
            color: "green"
        },
        {
            title: "Ambientación con globos de hielo",
            desc: "Opción de elegir colores",
            price: "Consultanos precios",
            color: "green"
        },
        {
            title: "Baul sorpresa",
            desc: "Incluye cotillon para jugar y sacarse fotos",
            price: "$500",
            color: "salmon"
        }
    ]


    let mapExtraInfo = extraInfo.map((item) => {
        return (
            <div key={item.title} className="info-iteree">
                 <div className="star-container">
                     <Img className="star" fluid={starImage} />
                 </div>
                 <div className="info-container">
                      <h3 className={`title-${item.color}`}>{item.title}</h3>
                         <p>({item.desc})</p>
                     <div className="pack-price">{typeof item.price === "string" ? item.price : ("$" + item.price + " x persona")}</div>
                 </div>
            </div>
        )
    })


    return (
        <Layout>
            
                <h1 className="service-title animated fadeIn" >Packs</h1>
                    <div className="pack-iteration animated fadeIn">
                        <TipiPack packType="basic" />
                        <TipiPack packType="magic" />
                        <TipiPack packType="premium" />
                    </div>
                    <div className="center-wrap">
                    <div className="pack-extras-container"> 
                        <div className="pack-title">
                            <h3>A cualquiera de estos packs podes agregarle estos items aparte</h3>
                        </div>
                        {mapExtraInfo}

                    </div>
                    </div>
        </Layout>
    )
}

export default Servicio;
