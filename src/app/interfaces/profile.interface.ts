export interface Profile {
  id: number;
  imgUrl: string;
  firstname: string;
  lastname: string;
  series: string;
  description?: string;
  gender?: Gender | 'Male' | 'Female'
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}
