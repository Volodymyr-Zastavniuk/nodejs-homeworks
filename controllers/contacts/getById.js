const getById = async (req, res, next) => {
  const { id, name, email, favorite, owner } = req.contact;
  const contactForResponse = {
    id,
    name,
    email,
    favorite,
    owner: { email: owner.email, subscription: owner.subscription },
  };
  res.status(200).json({ contact: contactForResponse });
};

module.exports = {
  getById,
};
