export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (url.pathname !== "/api/reviews") {
      return env.ASSETS.fetch(request);
    }

    const cache = caches.default;
    const cacheKey = new Request("https://reviews-cache/google-places");
    const cached = await cache.match(cacheKey);
    if (cached) return addCors(cached);

    const base = `https://places.googleapis.com/v1/places/${env.PLACE_ID}`;
    const headers = {
      "X-Goog-Api-Key": env.GOOGLE_API_KEY,
      "X-Goog-FieldMask": "reviews",
    };

    const [newestRes, relevantRes] = await Promise.all([
      fetch(`${base}?reviews_sort=NEWEST`, { headers }),
      fetch(`${base}?reviews_sort=MOST_RELEVANT`, { headers }),
    ]);

    if (!newestRes.ok && !relevantRes.ok) {
      return new Response(JSON.stringify({ error: "upstream" }), {
        status: 500,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }

    const [newestData, relevantData] = await Promise.all([
      newestRes.ok ? newestRes.json() : Promise.resolve({ reviews: [] }),
      relevantRes.ok ? relevantRes.json() : Promise.resolve({ reviews: [] }),
    ]);

    const seen = new Set();
    const merged = [...(newestData.reviews ?? []), ...(relevantData.reviews ?? [])]
      .filter((r) => {
        if (seen.has(r.name)) return false;
        seen.add(r.name);
        return true;
      })
      .sort((a, b) => b.rating - a.rating || new Date(b.publishTime) - new Date(a.publishTime))
      .slice(0, 5)
      .map((r) => ({
        text: r.text?.text ?? "",
        author: r.authorAttribution?.displayName ?? "Anonymous",
        rating: r.rating ?? 5,
        relativeTime: r.relativePublishTimeDescription ?? "",
        profilePhoto: r.authorAttribution?.photoUri ?? "",
        source: "Google Review",
      }));

    const response = new Response(JSON.stringify(merged), {
      headers: {
        ...corsHeaders(),
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=43200",
      },
    });
    await cache.put(cacheKey, response.clone());
    return response;
  },
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };
}

function addCors(res) {
  const r = new Response(res.body, res);
  r.headers.set("Access-Control-Allow-Origin", "*");
  return r;
}
