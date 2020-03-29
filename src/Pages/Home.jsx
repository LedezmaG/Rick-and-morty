import React from 'react';
import Loader from '../Component/Loader';
import PageError from '../Component/PageError';
import CharacterItem from '../Component/CharacterItem';

class Home extends React.Component{

    state={
        loading: false,
        error: null,
        data: {
            results: []
        },
    }

    componentDidMount (){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        
        try {
            const GetCharactersAPI = await fetch('https://rickandmortyapi.com/api/character');
            const data = await GetCharactersAPI.json();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render(){
        
        if (this.state.loading) {
            return <Loader />
        }
    
        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }
        
        return(

            <>
                <div className="row row-cols-1 row-cols-md-4">
                    {this.state.data.results.map(character => (
                        <CharacterItem character={ character } />
                    ))}
                </div>
                <button className="btn-lg btn-block" > Loading More</button>
            </>
        );
    }

}

export default Home




