let comida = ['empanada', 'pizza', 'yogurt'];
let aberracion = '';
let sabor = ['de polenta', 'de mortadela', 'de morcilla'];

console.log(comida.length);
for (let i = 0; i < comida.length; i++) {
  aberracion = aberracion + comida[i] + sabor[i];
  console.log(aberracion, i);
}
