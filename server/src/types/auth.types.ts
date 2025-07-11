
export interface SignupDTO {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface SigninDTO {
  email: string;
  password: string;
}

//* JWT TYPES
export interface JwtPayload {
  id: string;
}
