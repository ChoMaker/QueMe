import { connection } from "../../../config/db";
import { SignInRequest } from "../models/signInRequest";
import { SignUpRequest } from "../models/signUpRequest";

export namespace UserService {
    export const signIn = async (body: SignInRequest) => {
        try {
            const [result] = await(await connection).query("SELECT phone_number,password FROM users WHERE phone_number=?", [body.phoneNumber])
            const user = (result as SignInRequest[])[0]
            if (user.password === body.password) {
                return true
            }
            return false
        } catch (error) {
            return false
        }
    }

    export const signUp = async (body: SignUpRequest) => {
        try {
            const [result] = await(await connection).query("INSERT INTO users (name,phone_number,password,birth_date,create_at) VALUES (?,?,?,?,?)",[body.name,body.phoneNumber,body.password,body.birthDate,"2024-03-02"]);
            console.log(result)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}