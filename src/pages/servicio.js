import React from 'react';
import Layout from '../layout/Layout';
import TipiPack from '../components/TipiPack';
import '../stylesheets/servicio.scss';

const Servicio = () => {


    const extraInfo = [
        {
            title: "Bandeja de desayuno",
            desc: "Incluye bandeja, vaso con tapa o botella, plato, servilleta, cupcake, jugo de naranja o chocolatada",
            price: 210
        },
        {
            title: "Souvenir para invitados",
            desc: "Es personalizado, se consultan los gustos y preferencias, y se piensan propuestas",
            price: 150
        },
        {
            title: "Snacks para la noche",
            desc: "Opción de bolsas de pochoclos, cono de snacks salados, bolsitas de golosinas",
            price: 150
        },
        {
            title: "Set de Higiene",
            desc: "Incluye pasta de dientes, cepillo de dientes y peine",
            price: 150
        },
        {
            title: "Ambientación con globos de hielo",
            desc: "Opción de elegir colores",
            price: "Consultanos precios"
        },
        {
            title: "Baul sorpresa",
            desc: "Incluye cotillon para jugar y sacarse fotos",
            price: 150
        }
    ]


    let mapExtraInfo = extraInfo.map((item) => {
        return (
            <div className="info-iteree">
            <div className="star-container">
                
            </div>
            <div className="info-container">
                 <h3>{item.title}</h3>
                 <p>{item.desc}</p>
                 <p>{typeof item.price === "string" ? item.price : ("$" + item.price + " x persona")}</p>
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
                    <div className="pack-extras-container"> 
                        <div className="pack-title">
                            <h3>A cualquiera de estos packs podes agregarle estos items aparte</h3>
                        </div>
                        {mapExtraInfo}

                    </div>
        </Layout>
    )
}

export default Servicio;
