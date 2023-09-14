import express, { Express } from 'express';
import path from 'path';
import * as routes from "./routes";

const app: Express = express();
const port: number = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());
app.use('/public', express.static(path.join(__dirname, "public")));

routes.register(app);

app.listen(port, function(): any {
	console.log(`App listening on port ${port}`);
})
