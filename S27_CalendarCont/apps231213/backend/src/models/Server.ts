// import { routers } from ".././routes";
// import { connectDataBase } from "../db/config";
// import fileUpload from "express-fileupload";
import express, { Express, Request, Response, NextFunction } from "express";
import { routers } from "../routes";
import cors from "cors";
import path from "path";
import { connectDataBase } from "../db/config";

class Server {
  private app: Express;
  private PORT: string;
  private apiPaths = {
    testRoute: "/test",
    // usersPath: "/api/users",
    authPath: "/api/auth",
    calendarEventsPath: "/api/calendarevents",
    // rolesPath: "/api/roles",
    // categoriesPath: "/api/categories",
    // productsPath: "/api/products",
    // searchPath: "/api/search",
    // uploadsPath: "/api/uploads",
  };

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || "3033";
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await connectDataBase();
  }

  routes() {
    this.app.use(this.apiPaths.testRoute, routers.test);
    // this.app.use(this.apiPaths.usersPath, routers.users);
    // this.app.use(this.apiPaths.rolesPath, routers.roles);
    this.app.use(this.apiPaths.authPath, routers.auth);
    this.app.use(this.apiPaths.calendarEventsPath, routers.calendarEvents);
    // this.app.use(this.apiPaths.categoriesPath, routers.categories);
    // this.app.use(this.apiPaths.productsPath, routers.products);
    // this.app.use(this.apiPaths.searchPath, routers.search);
    // this.app.use(this.apiPaths.uploadsPath, routers.uploads);
  }

  middlewares() {
    this.app.use(cors());
    const publicPath = path.join(__dirname, "../public");
    this.app.use(express.static(publicPath));
    this.app.use(cors());
    this.app.use(express.json());
    // this.app.use(
    //   fileUpload({
    //     useTempFiles: true,
    //     tempFileDir: "/tmp/",
    //     createParentPath: true,
    //   })
    // );
    // // body read and parse
  }

  listen() {
    this.app.listen(this.PORT, () =>
      console.log("Running on PORT ", this.PORT)
    );
  }
}

export default Server;
