import express from "express";
import router from "./routes/todoRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/todo', router);

app.listen(PORT, () => console.log('Servidor ON...'))