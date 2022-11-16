//Validacion de usuario teniendo 3 intentos para el username y 3 para el password.


const createPersona = (username, password) => {
    return {
        username,
        password,
    }
}
const persona1 = createPersona('gabitodev', 'secreto');
const persona2 = createPersona('carolgar', '12345');
const persona3 = createPersona('cp31', 'hola');
const persona4 = createPersona('franram', '061093');
const personas = [persona1, persona2, persona3, persona4];



//variables:

let intentosU = 3;
let intentosC = 3;
let username='';
let password='';

let userExist = {};



while (intentosU > 0 && username !== userExist?.username) {
    username = prompt('Ingrese usuario:');
    userExist = personas.find(persona => persona.username === username);
    intentosU--;
    if (userExist) {
        while (intentosC > 0 && password !== userExist?.password) {
            password = prompt('Ingrese el password:');
            intentosC--;
            if (password !== userExist.password) {
                alert('Password incorrecto.');
                alert(`Te quedan ${intentosC} intentos.`);
            }

        }

    } else {
        alert('Nombre de usuario incorrecto.');
        alert(`Te quedan ${intentosU} intentos`);
    }
}

if (username === userExist?.username && password === userExist?.password) {
    alert('Entraste a Banesco.');
} else {
    alert('Cuenta bloqueada. No te quedan mas intentos.')
}