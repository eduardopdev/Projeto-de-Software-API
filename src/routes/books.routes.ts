import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateBookController } from "../modules/books/useCases/createBook/CreateBookController";
import { ListBooksController } from "../modules/books/useCases/listBooks/ListBooksController";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const listBookController = new ListBooksController();

booksRoutes.use(ensureAuthenticated);
booksRoutes.post("/", createBookController.handle);
booksRoutes.get("/", listBookController.handle);

export { booksRoutes };
