import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class CharacterItem extends React.Component{
    render() {

        const p = this.props.character;

        if (this.props.character.length === 0 ) {
            return(
                <div>
                    <h3>No badges found</h3>
                </div>
            )
        }

        return (

            <div className="col mb-4">
                <div className="card h-100">
                    <img src={ p.image }  className="card-img-top" alt={p.name} />
                    <div className="card-body">
                        <h5 className="card-title"> { p.name } </h5>
                        <p className="card-text">
                            It's {p.status}<br/>
                            {p.gender}<br/>
                            {p.species}
                        </p>
                        <Link className="btn btn-secondary" to={`/character`}>See more</Link>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default CharacterItem