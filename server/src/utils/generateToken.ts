
import  jwt  from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET as string


export const generateToken = (email:string):string =>{
        const expirationDate = new Date()
        expirationDate.setMinutes(new Date().getMinutes() + 45 );
        return jwt.sign({email,expirationDate},jwtSecret);
}