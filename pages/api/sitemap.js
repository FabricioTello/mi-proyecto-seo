import { Pool } from "pg";

const BASE_URL = "https://mi-proyecto-seo-hpt0.onrender.com";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true },
});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Método no permitido");
  }

  try {
    const resultado = await pool.query(
      "SELECT ruta FROM paginas_seo WHERE activa = TRUE ORDER BY id"
    );

    const urls = resultado.rows.map((pagina) => pagina.ruta);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (ruta) =>
      `<url><loc>${BASE_URL}${ruta}</loc></url>`
  )
  .join("")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(sitemap);
  } catch (error) {
    console.error("Error al generar sitemap:", error.message);
    return res.status(500).json({
      error: "No se pudo generar el sitemap",
    });
  }
}