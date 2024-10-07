import { DocumentsControllers } from "../controllers/documentsControllers";
import { DocumentsService } from "../service/documentsService";
import { UserService } from "../../user/service/userService";
import { DocumentsCreateDto } from "../createDocumentsDto/createDocumentsDto";

class DocumentsModule {
  static instance() {
    const userService = new UserService();
    const documents: DocumentsCreateDto[] = [];
    const documentsService = new DocumentsService(documents, userService);
    const documentsController = new DocumentsControllers(documentsService);

    return { documentsController };
  }
}

export { DocumentsModule };
