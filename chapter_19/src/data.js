const users = [
  { name: "Brandon", premium: true },
  { name: "Kaylee", premium: true },
  { name: "Christian", premium: false },
  { name: "Brian", premium: false },
  { name: "Ethan", premium: true }
];

const getPremUsers = users => {
  return users.filter(user => user.premium);
};

export { getPremUsers, users as default };
