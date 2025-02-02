import User from '@models/User';

export function create(req, res) {
  const { body } = req;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      console.log(user);
      return res.status(201).json({ message: user });
    })
    .catch((error) => {
      console.log(error.message);
      return res.status(500).json({ message: 'Something went wrong' });
    });
}
