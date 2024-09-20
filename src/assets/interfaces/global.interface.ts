export interface Expositor {
    Nombre: string,
    Universidad: string,
    Universidad2?: string,
}

export interface Speakers {
    Name: string,
    Affiliation: string
}

export interface Organizador {
    Nombre: string,
    Universidad: string,
}

export interface Profesor {
    Nombre: string,
    Correo: string,
    Universidad: string,
    Research: string,
}

export interface Estudiantes {
    Nombre: string,
    Puesto: string,
    AreaInteres: string
}

export interface Secretarias {
    Nombre: string,
    Categoria: string
}

export interface Committee {
    Nombre: string,
    Carrera: string,
    Email: string
}

export interface Cientific {
    Nombre: string,
    Carrera: string,
    Descripcion: string
}