import React from 'react';
import Layout from '../layout/Layout';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import '../stylesheets/contact.scss';

const Contacto = () => {

    const calendarQuery = useStaticQuery(graphql`
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
    
    let calendarSrc = calendarQuery.icons.edges.filter((node) => {
        return node.node.childImageSharp.fluid.originalName === "calendario.png";
    })
    let calendarIcon = calendarSrc[0].node.childImageSharp.fluid;
    

    return (
        <Layout>

            <section className="contact-top">
            <div className="contact-heading">
            <p>TItle lorem ipsum</p>
            </div>
            <div className="contact-top-right">
            <Img className="contact-calendar" fluid={calendarIcon} alt={calendarIcon.originalName}/>
            <p className="contact-popup-grey">Pedi un presupuesto y reservá la fecha <br/> ¡ULTIMAS FECHAS DISPONIBLES!</p>
            </div>
            </section>
            <section className="contact-bottom">

            </section>
            Contacto de
        </Layout>
    )
}

export default Contacto;
