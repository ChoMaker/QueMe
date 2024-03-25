import { connection } from "../../../config/db";
import { SignInAdmin } from "../../../models/signinAdmin";

export namespace AdminService {
  export const signInAdmin = async (body: SignInAdmin) => {
    try {
      const [resultAdmin] = await (
        await connection
      ).query("SELECT * FROM admins WHERE username = ?", [body.username]);
      const admin = (resultAdmin as SignInAdmin[])[0];

      if (!admin.username || admin.password != body.password) {
        return "username or password is incorrect";
        console.log(!admin);
      }
      return admin.id;
    } catch (error) {
      return error;
    }
  };
}
