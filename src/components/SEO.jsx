import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, image, url, type = "website" }) {
  const fullTitle = title || "Dasturchi Portfoliosi";
  const defaultDesc =
    "Tursunboyev Akbarali - Fullstack dasturchi portfoliosi. Bu yerda mening loyihalarim, qiziqarli texnologik maqolalarim va bog'lanish ma'lumotlari joylashgan.";
  const metaDesc = description || defaultDesc;
  const siteUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      {/* Sarlavha va Tavsif */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SEO;
