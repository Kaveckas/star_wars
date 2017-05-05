import React, { Component } from 'react';
import Planet from './Planet';

class Planets extends Component {
    state = {
        planets: []
    };

    componentDidMount() {
        fetch('http://swapi.co/api/planets')
            .then((res) => res.json())
            .then(({ results }) => {
                this.setState({
                    planets: results
                });
            })
    }

    render() {
        return (
            <div>
                <h1>Planets</h1>
                <ul>
                    {this.state.planets.length ? this.state.planets.map(({ name }) => (
                        <Planet key={name} name={name} />
                    )) : 'Loading...'}
                </ul>
            </div>
        );
    }
}

export default Planets;
