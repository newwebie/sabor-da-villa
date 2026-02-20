export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sabor da Villa",
    description:
      "Comida brasileira contemporânea com ingredientes de produtores locais. Almoço executivo e jantar autoral no centro de Campinas.",
    url: "https://sabordavilla.com.br",
    telephone: "+55-19-98888-7777",
    email: "contato@sabordavilla.com.br",
    servesCuisine: "Brasileira Contemporânea",
    priceRange: "$$",
    image: "https://sabordavilla.com.br/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua das Palmeiras, 245",
      addressLocality: "Campinas",
      addressRegion: "SP",
      postalCode: "13010-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.9064,
      longitude: -47.0616,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:30",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "18:30",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "12:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "19:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
    },
    sameAs: ["https://instagram.com/sabordavilla.campinas"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
