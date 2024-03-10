import { connection } from "../../../config/db";
import { SignInRequest } from "../../../models/signInRequest";
import { SignUpRequest } from "../../../models/signUpRequest";
import { ForgotPassword } from "../../../models/forgotPassword";
import { UpdatePassword } from "../../../models/updatePassword";
import dayjs, { Dayjs } from "dayjs";
import { GetUser } from "../../../models/getUser";
import { UserData } from "../../../models/userData";

export namespace UserService {
  export const signIn = async (body: SignInRequest) => {
    try {
      const [result] = await (
        await connection
      ).query("SELECT * FROM users WHERE phone_number=?", [body.phoneNumber]);
      const user = (result as SignInRequest[])[0];

      if (!user || user.password != body.password) {
        return false;
      }
      return user.id;
    } catch (error) {
      return false;
    }
  };

  export const signUp = async (body: SignUpRequest) => {
    try {
      const [resultUser] = await (
        await connection
      ).query("SELECT phone_number FROM users WHERE phone_number=?", [
        body.phoneNumber,
      ]);
      const user = (resultUser as SignUpRequest[])[0];
      if (!user) {
        const [resultInsert] = await (
          await connection
        ).query(
          "INSERT INTO users (name,phone_number,password,create_at) VALUES (?,?,?,?)",
          [body.name, body.phoneNumber, body.password, new Date()]
        );
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  export const forgotPassword = async (body: ForgotPassword) => {
    try {
      const [resultUser] = await (
        await connection
      ).query(
        "SELECT phone_number as phoneNumber FROM users WHERE phone_number=?",
        [body.phoneNumber]
      );
      const user = (resultUser as ForgotPassword[])[0];
      if (user.phoneNumber === body.phoneNumber) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  export const updatePassword = async (body: UpdatePassword) => {
    try {
      const [resultUser] = await (
        await connection
      ).query("UPDATE users SET password=? WHERE phone_number=?", [
        body.password,
        body.phoneNumber,
      ]);
      return true;
    } catch (error) {
      return false;
    }
  };

  export const getUser = async (body: GetUser) => {
    try {
      const [resulUserData] = await (
        await connection
      ).query("SELECT * FROM users WHERE id=?", [body.id]);
      const userData = (resulUserData as UserData[])[0];
      return userData;
    } catch (error) {
      return false;
    }
  };
}
