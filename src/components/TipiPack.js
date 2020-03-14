import React from 'react';


import '../stylesheets/tipipack.scss';





const TipiPack = ({packType}) => {

let info = {};

switch (packType) {
    case "basic":
        info = {
            title: "Camper Basic",
            inc: ["Carpa Tipi (dos niños por carpa)", "Colchonetas", "Almohadas para dormir", 
            "Almohadones temáticos decorativos", "Frazadas polar soft", "Guirnaldas Decorativas de tela y led", "Decoración con temática a elegir", 
            "Mobiliario (mesa + alfombras)", "Invitación digital para mandar via whatsapp" ],
            price: 750,
            color: "salmon"
        }
        break;
        case "magic":
        info = {
            title: "Camper Magic",
            inc: ["Camper Basic +", "Marco de selfie personalizado", "Props para sacarse fotos",
            "Antifaces temáticos", "Pizarra para puerta de entrada" ],
            price: 950,
            color: "green"
        }
        break;
        case "premium":
            info = {
                title: "Camper Premium",
                inc: ["Camper Basic +", "Camper Magic + " , "Baúl sorpresa de cotillón", "Bandeja de desayuno",
                 "Souvenir para cada invitado"],
                price: 1450,
                color: "pink"
            }
            break;
        default:
        break;
}

    return (
        <div className="pack-container">
            <div className="pack-inner-container">
            <div className={`pack-title-container ${info.color}bg`}>
                <h2>{info.title}</h2>
                </div>
                <div className={`pack-list-container ${info.color}`}>
                
                    {info.inc.map((e) => {
                        return <span key={e}>{e}</span>
                    })}
                <span>${info.price} x Carpa Tipi</span>
               
                </div>
                </div> 
        </div>
    )
}

export default TipiPack
