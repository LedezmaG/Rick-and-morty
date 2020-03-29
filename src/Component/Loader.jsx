import React from 'react';
import portal from '../Assets/img/portal.png'

function Loader() {
    return(
        <div className="text-center">
            <img src={portal} alt="Loader Rick" className="w-25"/>
            <h3>
            Loadin...
            </h3>
        </div>
    );
}

export default Loader