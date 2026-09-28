// Turns ANY kind of YouTube link into { videoId, videoStart }.
// Works with: watch?v=ID, youtu.be/ID, /embed/ID, /shorts/ID, a bare 11-character ID,
// and start times like ?t=792, &start=45, ?t=13m24s.

function parseStart(value) {
  if (!value) return 0;
  if (/^\d+$/.test(value)) return parseInt(value, 10);           // "792"
  const m = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);   // "13m24s"
  if (!m) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}

function parseYouTube(input) {
  if (!input) return { videoId: "", videoStart: 0 };
  const text = String(input).trim();

  if (/^[\w-]{11}$/.test(text)) return { videoId: text, videoStart: 0 }; // bare ID

  let url;
  try { url = new URL(text.startsWith("http") ? text : "https://" + text); }
  catch { return { videoId: "", videoStart: 0 }; }

  let id = "";
  if (url.hostname.includes("youtu.be")) id = url.pathname.slice(1).split("/")[0];
  else if (url.searchParams.get("v")) id = url.searchParams.get("v");
  else {
    const m = url.pathname.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
    if (m) id = m[1];
  }
  if (!/^[\w-]{11}$/.test(id)) return { videoId: "", videoStart: 0 };

  const start = parseStart(url.searchParams.get("t") || url.searchParams.get("start"));
  return { videoId: id, videoStart: start };
}

module.exports = { parseYouTube };
