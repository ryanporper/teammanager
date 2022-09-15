const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '{PATH} is required.'],
      minlength: [2, '{PATH} must be at least {MINLENGTH} characters.'],
    },  
    pos: {
        type: String,
        required: [false],
      },   
  },
  { timestamps: true } 
);

const Team = mongoose.model('Team', TeamSchema);

module.exports = { Team: Team };