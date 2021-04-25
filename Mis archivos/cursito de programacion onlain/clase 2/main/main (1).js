// Todas las funciones actuan de alguna forma con users
const users = require('../user/users.json');
console.log(users);
debugger;

// Una funcion que reciba un objeto de tipo User y lo agregue al arreglo original.
const createUser = () => {
  // TODO: code goes here
};

// Una funcion que elimine usuarios repetidos
const deleteRepeatedUsers = () => {
  // TODO: code goes here
};

// Cuantos moderadores y editores existen. Devolver lista de tipo [{moderators: 2}, {editors: 5}]
const countModeratorsAndEditors = () => {
  // TODO: code goes here
};

// Cambiar pregunta de seguridad y respuesta de un usuario especifico
const changeSecurityQuestionByUser = () => {
  // TODO: code goes here
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
const getAllUsersAdults = () => {
  // TODO: code goes here
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

const validarPasswords = () => {
  // TODO: code goes here
};

// Ordenar los usuarios por edad.
const sortUsersByAge = () => {
  // TODO: code goes here
};
