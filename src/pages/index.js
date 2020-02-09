import React from 'react';
import Layout from '../layout/Layout';
import '../stylesheets/index.scss';
import { Link } from 'gatsby';

const Index = () => {
    return (
        <Layout>
            <section className="index-main-content">
                <div className="main-motto animated slideInDown">
                <h1>Pijamadas únicas</h1>
                <h1>aventura, magia y diversión</h1>
                </div>
                <div className="animated slideInUp">
                <h2>Ofrecemos carpas estilo tipi a domicilio</h2>
                <h2>Te ambientamos el lugar para celebrar de una manera única y especial</h2>
                <h2>Diseñamos espacios llenos de encanto y sorpresas</h2>
                </div>
                <Link className="index-button animated fadeInUpBig" to="/servicio">
                       Conocé nuestros servicios
                </Link>
            </section>
        </Layout>
    )
}

export default Index
