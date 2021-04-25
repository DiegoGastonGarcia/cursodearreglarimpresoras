const users = require('../user/users.json');

const perdonTrento = (users) => {
  let cuantosTrentos = 0;
  let listaSinTrentos = users.f((user) => {
    if (user.firstName === 'Trento' && user.lastName === 'Lit') {
      cuantosTrentos++;
      if (cuantosTrentos >= 1) {
        user = {};
      }
    }
  });
};
perdonTrento(users);
console.log(users);
debugger;
