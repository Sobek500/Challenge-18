const { User } = require('../models');

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

module.exports = userController;