const users = require('../user/users.json');

let listaFiltrada = [];
const filtro = (users) => {
  users.forEach((user) => {
    listaFiltrada = users.filter((usuario) => {
      if (
        user.firstName === usuario.firstName &&
        user.lastName === usuario.lastName
      ) {
        return false;
      } else return true;
    });
  });
};
filtro(users);
console.log(listaFiltrada);
debugger;
