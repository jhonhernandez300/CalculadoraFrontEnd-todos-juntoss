export interface Colaborador {
    numeroDeIndentificacion: number,
    nombres: string,
    apellidos: string, 
    direccion: string,
    email: string,
    telefono: string,
    salario: number,
    fk_Area: number,    
    fechaDeIngreso: Date,
    sexo: string,
    codigoInterno: number
}