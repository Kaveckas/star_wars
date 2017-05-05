import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
    /**
     * State yra būdas React komponentuose laikyti persistent informaciją.
     * 
     * Plačiau: https://facebook.github.io/react/docs/state-and-lifecycle.html
     */
    state = {
        persons: []
    };

    componentDidMount() {
        /**
         * Fetch yra būdas bendrauti su serveriu - daryti "AJAX" skambučius.
         * 
         * Plačiau: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
         */
        fetch('http://swapi.co/api/people')
            .then((res) => res.json())
            .then(({ results }) => {
                /**
                 * State atnaujinimas. Atnaujinus state, komponentas pats atsinaujins,
                 * t.y. iškvies žemiau aprašytą render() funkciją dar kartą.
                 * 
                 * Plačiau: https://facebook.github.io/react/docs/state-and-lifecycle.html
                 */
                this.setState({
                    persons: results
                });
            })
    }

    render() {
        return (
            <div>
                <h1>Persons</h1>
                <ul>
                    {this.state.persons.length ? this.state.persons.map(({ name }) => (
                        /**
                         * Props yra būdas tam tikrą informaciją perduoti
                         * komponento "vaikams", t.y. žemiau esantiems komponentams.
                         * Šiuo atveju Person komponentas gaus name, o key yra rezervuotas propsas.
                         *
                         * Plačiau: https://facebook.github.io/react/docs/components-and-props.html
                         */
                        <Person key={name} name={name} />
                    )) : 'Loading...'}
                </ul>
            </div>
        );
    }
}

export default Persons;
