import React from 'react';
import ErrorMsj from '../Assets/img/Rick-Spaceship.png'

function PageError() {
    return(
        <div className="text-center">
            <img src={ErrorMsj} alt="Loader Rick" />
            <h4>
                {this.props.error}
            </h4>
        </div>
    );
}

export default PageError