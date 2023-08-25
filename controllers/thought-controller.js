const { Thought } = require('../models');

const thoughtController = {
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

module.exports = thoughtController;