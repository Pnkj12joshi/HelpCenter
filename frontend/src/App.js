import React, { useEffect, useState } from 'react';
import CardList from "./components/CardList";
import SearchBar from './components/SearchBar';
import axios from "axios";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:9001/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div>
      <div className='header'>
       <h2> Abstract | Help Center</h2>
       <div className='headersubmit'> Submit a request </div>
      </div>
      <h1>How can we help?</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardList cards={filteredCards} />

    </div>
  )
}

export default App
