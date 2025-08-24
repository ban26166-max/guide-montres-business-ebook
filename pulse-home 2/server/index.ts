import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { downloadPreviewPDF, downloadFullPDF, getPDFInfo, validateCode } from "./routes/pdf";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

      app.get("/api/demo", handleDemo);

  // PDF download routes
  app.get("/api/download-preview", downloadPreviewPDF);
  app.get("/api/download-full", downloadFullPDF);
  app.get("/api/pdf-info", getPDFInfo);
  app.post("/api/validate-code", validateCode);

  return app;
}
