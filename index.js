// The forecast today in Kelvin
const kelvin = 293;

// Converting kelvin to celsius
const celsius = kelvin - 273;

console.log(`The temperature is ${celsius} degrees Celsius.`);

// Converting celsius to Fahrenheit and round down with .floor method

const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Converting celsius to Newton

const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`)