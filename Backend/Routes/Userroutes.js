const express = require('express');
const {
  createCard,
  getAllCards,
  getCardByTitle,
} = require('../Controller/cardcontroller');

const router = express.Router();

router.get('/pin',(req,res)=>{
    res.end(" Server is started");
})
router.post('/cards', createCard); //for Create Card.
router.get('/cards', getAllCards); // Get all Card.
router.get('/cards/:title', getCardByTitle); // get cards by title.

module.exports = router;
