import React from 'react'
export default function AirporIImage() {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.aena.es/sites/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1576857220485&ssbinary=true"
                 alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “El aeropuerto de Menorca está situado a unos 4,5 kilómetros al suroeste de la capital de la isla, Mahón. Sus instalaciones sirven con altos niveles de calidad las necesidades turísticas de la isla de Menorca, así como las de su capital, Mahón, donde se encuentra enclavado.

Es un aeropuerto de naturaleza eminentemente turística, con un importante tráfico chárter que alcanza sus máximos niveles en la época estival.

España y Reino Unido son los países que presentan un mayor tráfico de pasajeros. En el ámbito nacional Barcelona, Palma de Mallorca y Madrid son los destinos más importantes.”
                    </p>
                </blockquote>
                
            </div>
        </figure>
    )
}
