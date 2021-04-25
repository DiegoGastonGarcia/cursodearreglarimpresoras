const users = require('../user/users.json');
//debugger;
//console.log(users);

const user = {
  id: null,
  firstName: 'Roberto',
  lastName: 'Pettinato',
  age: 9,
  region: {
    country: 'Argentina',
    city: 'Santiago del Estero',
  },
  isModerator: false,
  isEditor: false,
  security: {
    password: 'Miprimaen4',
    securityQuestion: ['Te gusta tu prima', 'Ma vale'],
  },
  userToken: null,
};

const newUser = (users, user) => {
  let numeroDeUsers = users.length;
  user.id = ++numeroDeUsers;
  users.push(user);
};
newUser(users, user);
console.log(users);
debugger;
