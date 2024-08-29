const Card = require('../Model/usermodels');

// Create a new card
const createCard = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all cards
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific card by title
const getCardByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCard,
  getAllCards,
  getCardByTitle,
};
