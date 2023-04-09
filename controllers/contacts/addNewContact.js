const { addContact } = require('../../models');

const addNewContact = async (req, res) => {
  const newContact = await addContact({ ...req.body, owner: req.user });

  const { _id, name, email, favorite, owner } = newContact;
  const newContactForResponse = {
    _id,
    name,
    email,
    favorite,
    owner: { email: owner.email, subscription: owner.subscription },
  };

  res.status(201).json({ contact: newContactForResponse });
};

module.exports = {
  addNewContact,
};
