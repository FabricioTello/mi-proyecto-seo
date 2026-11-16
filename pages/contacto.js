import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado SEO</title>

        <meta
          name="description"
          content="Contacta con nosotros para conocer más sobre SEO, optimización web y desarrollo con Next.js."
        />

        <meta
          property="og:title"
          content="Contacto - Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Comunícate con nosotros para obtener información sobre optimización SEO y rendimiento web."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
      </Head>

      <h1>Contáctanos</h1>

      <p>
        Si deseas conocer más sobre optimización SEO
        y desarrollo web con Next.js, puedes
        comunicarte con nosotros.
      </p>

      <h2>Información de contacto</h2>

      <p>Correo: contacto@ejemplo.com</p>

      <Link href="/">Volver al inicio</Link>
    </>
  );
}
