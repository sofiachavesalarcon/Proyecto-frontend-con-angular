export interface Deportista {
  id_deportista?: number;
  imagen: string;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido:string;
  fecha_nacimiento: Date;
  peso: number;
  altura: number;
  lateralidad: string;
  sexo: string;
  club: string;
  deporte: string;
  posicion: string;
}
