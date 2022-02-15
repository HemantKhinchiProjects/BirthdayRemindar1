import React from 'react';
import './style.css';
import data from './data';

export default function App() {
  return (
    <main>
      <section className="container">
        <h3>birthdays today</h3>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}
