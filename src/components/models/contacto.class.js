export class Contacto {
    name = "";
    apellido = "";
    email ="";
    conectado = true;



    constructor (name, apellido, email, conectado)
    {
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.state = {
            conectado: true
        }
    }

    disconect = () => {
      this.setState((prevState) => (
        {
            conectado: false,
        }

      ))
        

    }
}