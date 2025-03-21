export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  registrationDate: string; 
  profileImage: string;    
  status: 'Active' | 'Inactive'; 
}