export interface UserModel{
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  company: CompanyModel;
}

export interface CompanyModel{
  companyId: number;
  companyName: string;
  companyLocation: string;
}
