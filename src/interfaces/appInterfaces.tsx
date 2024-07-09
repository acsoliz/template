
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
  categoria: Category;
  usuario: Category;
  img?: string;
}


export interface CategoriesResponse {
  total: number;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
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
  owner: string;
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


//Activities

// interface ActivityObj {
//   id: string;
//   name: string;
//   description: string;
//   id_category: string;
//   frequency: string;
// }



export interface ActivitiesResponse {
  total: number;
  activities: Activity[];
}

export interface Activity {
  name: string;
  description: string;
  id_category: string;
  frequency: string;
}


export class RegisterActivityDto {
  private constructor(

  ) { }
}
