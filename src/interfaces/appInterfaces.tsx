
export interface LoginData {
  correo: string;
  password: string;
}
export interface RegisterData {
  correo: string;
  password: string;
  nombre: string;
}

export interface LoginResponse {
  usuario: Usuario;
  token: string;
}

export interface Usuario {
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
  img?: string;
}

// Products


export interface ProductsResponse {
  total: number;
  productos: Producto[];
}

export interface Producto {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Categoria;
  usuario: Categoria;
  img?: string;
}


export interface CategoriesResponse {
  total: number;
  categorias: Categoria[];
}

export interface Categoria {
  _id: string;
  nombre: string;
  usuario?: CreadoPor;
}

export interface CreadoPor {
  _id: string;
  nombre: string;
}


//Goals


export interface GoalsResponse {
  total: number;
  goals: Goal[];
}

export interface Goal {
  id: string;
  title: string,
  description: string,
  type: string,
  difficulty: number,
  status: string,
  dates?: {
    // Agrega el objeto de fechas
    createdAt?: Date;
    updatedAt?: Date;
    completionDate?: Date;
  }
}


export class RegisterGoalDto {
  private constructor(

  ) { }
}

export interface CreadoPor {
  _id: string;
  nombre: string;
}
