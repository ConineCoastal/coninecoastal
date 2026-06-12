// Renders a JSON-LD structured-data <script> tag. Server component.
// Accepts a single schema object or an array of objects (each emitted as its
// own script tag). Centralizes the dangerouslySetInnerHTML pattern used across
// the site so individual pages stay declarative.

type JsonLdData = Record<string, unknown>

export default function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}
