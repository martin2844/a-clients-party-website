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
    
    let bubbleSrc = calendarQuery.icons.edges.filter((node) => {
      return node.node.childImageSharp.fluid.originalName ===  "contact-bubble.png";
    })

    let bubbleIcon = bubbleSrc[0].node.childImageSharp.fluid;

    let messageSrc = calendarQuery.icons.edges.filter((node) => {
      return node.node.childImageSharp.fluid.originalName ===  "message-icon.png";
    })

    let messageIcon = messageSrc[0].node.childImageSharp.fluid;

    return (
        <Layout>

            <section className="contact-top animated fadeIn">
            <div className="contact-heading">
            <p>Para cualquier aclaración o consulta sobre nuestros servicios, por favor completa el siguiente formulario
              y nos pondremos en contacto a la mayor brevedad posible.
            </p>
            </div>
            <div className="contact-top-right">
            <Img className="contact-calendar" fluid={calendarIcon} alt={calendarIcon.originalName}/>
            <p className="contact-popup-grey">Pedí un presupuesto y reservá la fecha <br/> ¡CONSULTÁ FECHAS DISPONIBLES!</p>
            </div>
            </section>
            <section className="contact-bottom animated fadeIn">
              <div className="contact-form">
              <form name="contact" method="POST" data-netlify="true" action="/success">
                    <input type="hidden" name="form-name" value="contact"/>
                    <div className="group">
                    <input type="text" name="nombre" placeholder='Nombre*' required />                  
                    <input type="email" name="email" placeholder='Email*' required />
                    <input type="text" name="telefono" placeholder='Telefono' />
                    </div>
                    <textarea type='text' name='mensaje' placeholder='Mensaje'required/>
                    <button type='submit'>ENVIAR</button>
                    </form>


              </div>
              <div className="contact-info">
                   <div className="phone-div">
                       <Img className="contact-img" fluid={bubbleIcon} alt={bubbleIcon.originalName}/>
                       <div>
                            <h3>Telefono/Whatsapp</h3>
                            <p>1536588510</p>
                            <p>1561829836</p>
                       </div>

                   </div>
                   <div className="mail-div">
                   <Img className="contact-img-mail" fluid={messageIcon} alt={messageIcon.originalName}/>
                       <div>
                            <h3>Email</h3>
                            <p>camperparty.arg@gmail.com</p>
                       </div>

                  </div>

              </div>
            </section>
           
        </Layout>
    )
}

export default Contacto;
