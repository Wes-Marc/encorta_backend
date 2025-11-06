import express from "express";
import db from "./db/index.js";
import { usersTable } from "./models/user.model.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    return res.json({ status: "Server is up and running..." });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
