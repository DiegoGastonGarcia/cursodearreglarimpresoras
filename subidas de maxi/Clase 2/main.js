// Todas las funciones actuan de alguna forma con users
const users = require('./users.json');

// Una funcion que reciba un objeto de tipo User y lo agregue al arreglo original.
const createUser = (users, newUser) => {
  return [...users, newUser];
};

// Una funcion que elimine usuarios repetidos
const deleteRepeatedUsers = (users) => {
  // el primer for, funcione como un pilar. Donde la variable i, va a hacer referencia al elemento que estamos comparando con los demas
  // let updatedUsers = users;
  // if (users[j].firstName === users[i].firstName && users[j].lastname && password && i != j) {
  //   [1, 2, 4, 5, 7, 8]
  // }
};

// Cuantos moderadores y editores existen. Devolver lista de tipo {moderators: 2, editors: 5}
const countModeratorsAndEditors = (users) => {
  let moderators;
  let editors;
  users.forEach((e) => {
    if (e.isModerator) {
      moderators++;
    }
    if (e.isEditor) {
      editors++;
    }
  });

  return { moderators, editors };
};

// Cambiar pregunta de seguridad y respuesta de un usuario especifico
const changeSecurityQuestionByUser = (users, userId, securityQuestion, securityAnswer) => {
  let mappedUsers = users.map((e, idx, array) => {
    if (e.userId === userId) {
      return {
        ...e,
        security: {
          ...e.security,
          securityQuestion: [securityQuestion, securityAnswer],
        },
      };
    }
    return e;
  });
};

const explicarMap = () => {
  let arr = [
    { algo: 1, algo2: 'hola' },
    { algo: 5, algo2: 'chau' },
  ];

  let mappedList = arr.map((e, idx, array) => {
    if (idx === 0) {
      return {
        ...e,
        algo3: 'hola',
      };
    } else {
      return {
        ...e,
        algo3: 'no me mires',
      };
    }
  });
};

// Crear los userTokens de todos los usuarios, una combinacion unica de usuario+password que tenga el forma de USER@password (respetar minuscula y mayusculas)
// Investigar funciones "toLowerCase" "toUpperCase"
const createUsersTokens = () => {
  // TODO: code goes here
};

// Hacer de alguien un moderador
const makeUserAModerator = () => {
  // TODO: code goes here
};

// Hacer de alguien un editor
const makeUserAnEditor = () => {
  // TODO: code goes here
};

// Cambiar la password de un usuario especifico, recibe id por argumento
const changeUserPassword = () => {
  // TODO: code goes here
};

// Filtrar los usuarios que son mayores de edad
const getAllUsersAdults = (users) => {
  // TODO: code goes here
  let adultsUsers = users.filter((e) => {
    return e.age >= 18;
  });
};

const filterFunction = () => {
  // filter es una funcion que trabaja sobre un array.
  let numbers = [6, 7, 78, 89, 9, 34, 324, 32];

  // let functionQueVamosAUsar =
  let newNumbers = numbers.filter((e) => {
    return e > 5;
  });
};

// Devolver una lista de tipo [{country: Argentina, quantity: 2}...] que ordene todos los paises presente y devuelva la cantidad de usuarios de ese pais
const getAllSameCountryUsers = () => {
  // TODO: code goes here
};

// Devolver la edad promedio de todos los usuarios
const averageAgeOfUsers = () => {
  // TODO: code goes here
};

// OPCIONALES - MAS COMPLEJOS - Requieren leer documentacion aparte

// Devolver una lista de tipo [{userId: 1, isPasswordCorrect: true}...] que devuelva si la contraseña de todos los usuarios respeta una contraseña con al menos un numero y una letra
// Leer acerca de funcion "typeof" y conversores de String a Number.

const todo = () => {
  // TODO: code goes here
};

// Ordenar los usuarios por edad.
const sortUsersByAge = () => {
  // TODO: code goes here
};
