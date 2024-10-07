import { UserController } from "../controllers/userControllers";
import { UserService } from "../service/userService";

class UserModule {
  static instance() {
    const userService = new UserService();
    const userController = new UserController(userService);
    return { userController, userService };
  }
}

export { UserModule };
