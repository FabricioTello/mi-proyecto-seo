import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de SEO y Optimización Web | Mi Sitio</title>

        <meta
          name="description"
          content="Aprende sobre SEO, rendimiento web y optimización de aplicaciones con Next.js."
        />

        <meta
          property="og:title"
          content="Blog de SEO y Optimización Web"
        />

        <meta
          property="og:description"
          content="Consejos y técnicas para mejorar el posicionamiento y rendimiento de páginas web."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
      </Head>

      <h1>Blog de SEO y Optimización Web</h1>

      <p>
        Bienvenido a nuestro blog. Aquí aprenderás
        técnicas para mejorar el SEO y rendimiento
        de tus aplicaciones con Next.js.
      </p>

      <h2>Temas principales</h2>

      <ul>
        <li>Optimización de imágenes</li>
        <li>Meta Tags dinámicos</li>
        <li>Lazy Loading</li>
        <li>Sitemaps dinámicos</li>
      </ul>

      <Link href="/">Volver al inicio</Link>
    </>
  );
}