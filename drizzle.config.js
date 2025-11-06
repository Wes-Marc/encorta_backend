import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle",
    schema: "./models",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgres://postgres:admin@localhost:5432/postgres",
        ssl: false
    }
});
