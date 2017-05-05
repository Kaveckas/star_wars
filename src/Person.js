import React from 'react';

/**
 * Egzistuoja du būdai sukurti React komponentą -
 * galima rašyti klasę arba funkciją. Rašyti klasę būtina tik tada,
 * kai komponentas turi būti stateful, t.y. jam būtina naudoti state.
 * Kitu atveju galima rašyti stateless komponentą - funkciją.
 * 
 * Plačiau: https://facebook.github.io/react/docs/components-and-props.html
 */

/**
 * Person komponentas pasiekia propsus - tam tikrą informaciją, kurią jam perdavė
 * Persons komponentas. (Persons.js, 48 eilutė)
 * 
 * Plačiau: https://facebook.github.io/react/docs/components-and-props.html
 */
const Person = (props) => (
    <li>{props.name}</li>
);

export default Person;
