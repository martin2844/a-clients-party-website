import React from 'react';


import '../stylesheets/tipipack.scss';





const TipiPack = ({packType}) => {

let info = {};

switch (packType) {
    case "basic":
        info = {
            title: "Camper Basic",
            inc: ["Carpa Tipi (dos niños por carpa)", "Colchonetas + fundas", "Almohadas + Fundas", 
            "Almohadones decorativos", "Mantas y Alfombras", "Antifaces",  "Guirnaldas Decorativas" ],
            price: 750,
            color: "salmon"
        }
        break;
        case "magic":
        info = {
            title: "Camper Magic",
            inc: ["Camper Basic +", "Guirnaldas de luces led", "Decoración con temática a elegir", "Props para sacarse fotos",
            "Antifaces personalizados" ],
            price: 890,
            color: "green"
        }
        break;
        case "premium":
            info = {
                title: "Camper Premium",
                inc: ["Camper Magic +", "Invitación digital para mandar por Whatsapp", "Marco de selfie personalizado",
                 "Pizarra para puerta de entrada"],
                price: 1390,
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
