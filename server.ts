import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "5mb" }));

  // Lazy initialize Google Gen AI
  const getAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Health check
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Exam Doubts / Explainer endpoint
  app.post("/api/exam-ai/ask", async (req: Request, res: Response) => {
    try {
      const { question, topic, context } = req.body;
      if (!question) {
        return res.status(400).json({ error: "Question is required" });
      }

      const ai = getAI();
      if (!ai) {
        return res.status(503).json({
          error: "AI service unavailable (GEMINI_API_KEY not configured). Please check your environment configuration.",
        });
      }

      const systemInstruction = `You are an expert Professor of Computer Science specializing in M.Sc. PG 1st Year Computer Organization and Digital Electronics (Unit 1: Basics of Digital Electronics).
The student is preparing for an upcoming university examination with a 70-mark pattern.
Focus specifically on Unit 1 topics:
1. Logic Gates (Basic, Universal, XOR, XNOR) with symbols, truth tables, and Boolean equations.
2. Boolean Algebra, Postulates, De Morgan's Theorems, and Duality Principle.
3. Flip-Flops (SR, JK, D, T, race-around, master-slave).
4. Registers (SISO, SIPO, PISO, PIPO, storage concepts).
5. Adders (Half Adder, Full Adder derivations, circuit logic).
6. Combinational Circuits (Multiplexers, Demultiplexers, Encoders, Decoders, conversions).
7. Digital Computers, Block Diagram, Hardware Organization, Types of Computers.
8. Computer Organization vs Computer Architecture vs Computer Design.

Provide clear, structured, university exam-ready explanations. Include:
- Concise definition
- Truth Table / Boolean expression / Block Diagram breakdown if applicable (in neat ASCII/markdown tables)
- Key points that fetch maximum marks in 70-mark examinations
- Common student pitfalls to avoid`;

      const prompt = `Topic: ${topic || "Digital Electronics Unit 1"}
Student Question: ${question}
${context ? `Additional Context: ${context}` : ""}

Please provide an authoritative, high-scoring university examination response tailored for a PG 1st Year student.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.3,
        },
      });

      return res.json({ answer: response.text });
    } catch (error: any) {
      console.error("AI Ask error:", error);
      return res.status(500).json({ error: error.message || "Failed to process query" });
    }
  });

  // AI Answer Evaluation endpoint
  app.post("/api/exam-ai/evaluate", async (req: Request, res: Response) => {
    try {
      const { question, userStudentAnswer, marksAllocated = 10 } = req.body;
      if (!question || !userStudentAnswer) {
        return res.status(400).json({ error: "Both question and answer are required" });
      }

      const ai = getAI();
      if (!ai) {
        return res.status(503).json({
          error: "AI service unavailable (GEMINI_API_KEY not configured).",
        });
      }

      const systemInstruction = `You are a strict yet encouraging university examination evaluator for PG Computer Science (Computer Organization & Digital Electronics).
Evaluate the student's answer for the given question out of ${marksAllocated} marks.
Return your evaluation in JSON format with the following schema:
{
  "score": number, // score out of marksAllocated (e.g. 7.5 or 8)
  "totalMarks": number,
  "strengths": string[],
  "missingPoints": string[],
  "diagramAdvice": string,
  "modelAnswerHighlights": string,
  "examinerFeedback": string
}`;

      const prompt = `Question: "${question}" (Total Marks: ${marksAllocated})
Student's Submitted Answer:
"""
${userStudentAnswer}
"""

Evaluate this student answer according to university standard marking scheme.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          temperature: 0.2,
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json(parsed);
    } catch (error: any) {
      console.error("AI Evaluate error:", error);
      return res.status(500).json({ error: error.message || "Evaluation failed" });
    }
  });

  // Vite middleware for dev or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Digital Electronics Study Hub Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
