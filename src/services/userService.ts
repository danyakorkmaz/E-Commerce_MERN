import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "User already exsits!", statusCode: 400 };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  return { data: generateJWT({firstName,lastName,email}), statusCode: 200 };
};


interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { data: "Incorrect email or password!", statusCode: 400 };
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password); //password === findUser.password;
  if (passwordMatch) {
    return { data: generateJWT({email,firstName:findUser.firstName , lastName:findUser.lastName}) , statusCode: 200 };
  }
  return { data: "Incorrect email or password!", statusCode: 400 };
};


const generateJWT = (data:any) => {
return jwt.sign (data,'SFNI1syAR7K5D3v8w32UQMGodIJ79mBc')//sign func. şifreli bir data oluşturuyor(data = iştediğimiz veri uzerine şifre, secretkey : rakam mn ajıl tşfir albayanat tabana)
}