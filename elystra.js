import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Percorso del file elystra.json nella root della repo
  const configPath = path.join(process.cwd(), "elystra.json");

  try {
    const raw = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(raw);

    // Se vuoi distinguere GET/POST in futuro
    if (req.method === "GET") {
      return res.status(200).json({
        status: "ok",
        message: "Elystra è online 🧠",
        config,
      });
    }

    // Per ora, per altri metodi rispondiamo semplice
    return res.status(405).json({
      status: "error",
      message: "Metodo non supportato",
    });
  } catch (err) {
    console.error("Errore nel leggere elystra.json:", err);
    return res.status(500).json({
      status: "error",
      message: "Impossibile leggere elystra.json",
    });
  }
}
