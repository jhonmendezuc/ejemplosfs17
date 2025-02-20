class Usuario {
  constructor(correo, contrasena) {
    this.correo = correo;
    this.contrasena = contrasena;
  }

  saludar() {
    console.log(`Hola, soy un usuario con el correo ${this.correo}`);
  }

  validarCorreo(correo) {
    if (correo === this.correo) {
      console.log("Correo correcto");
    }
  }

  validarContrasena(contrasena) {
    if (contrasena === this.contrasena) {
      console.log("Contraseña correcta");
    }
  }
}

export default Usuario;
