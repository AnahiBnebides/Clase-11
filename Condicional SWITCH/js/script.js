const comidaDelUsuario = 'ensalada'
const bebidas = ['vino tinto', 'vino blanco', 'agua']
switch (comidaDelUsuario) {
    case "carne":
        {
            console.log(`Con ${comidaDelUsuario} la mejor opción es un ${bebidas[0]}`);
        }
        
        break;
    case "pescado":
        {
            console.log(`Con ${comidaDelUsuario} la mejor opción es un ${bebidas[1]}`);
        }
        
        break;
    case "pasta":
        {
            console.log(`Con ${comidaDelUsuario} la mejor opción es un ${bebidas[2]}`);
        }
        
        break;

    default:
        {
            console.log('No vives de ensalada Lisa');
        }

        break;
}

