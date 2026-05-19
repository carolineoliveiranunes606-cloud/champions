import { buildApp } from "./app";

const app = buildApp();

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`
  ====================================
   🚀 Champions API running
   🌍 http://localhost:${PORT}
  ====================================
  `);
});
