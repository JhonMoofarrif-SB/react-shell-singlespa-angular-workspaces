export interface loginModel {
    email: string,
    password: string,
}

export interface loginResponseModel {
    cambioContrasena?: boolean,
    nombre?: string,
    numeroSocio?: number,
    miembroDesde?: string,
    token?: string
}

export interface forgotPasswordModel{
    cedula?: string,
    fechaNacimiento?: string
}

export interface registerDataModel{
    cedula?: string,
    fechaNacimiento?: string
}
