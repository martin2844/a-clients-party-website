import React from 'react'
import Layout from '../layout/Layout'
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import '../stylesheets/sobre.scss';

const Acerca = () => {
    return (
        <Layout>
            <section className="sobre-top">
                <h1 className="align-left">Amamos los detalles</h1>
                <p>Creamos espacios según la técnica elegida. Fiestas personalizadas con carpas Tipi. Podes sumarle snacks divertidos para la noche, bandeja con alimentos para el desayuno y bolsitas mágicas para que se llevenlos invitados de souvenir</p>
                <h1 className="align-right">LA FIESTA DE TUS SUEÑOS EN CASA</h1>
            </section>
        </Layout>
    )
}

export default Acerca
