const SUPABASE_URL="https://ghahcpiudcgdkahcoxss.supabase.co";
const SUPABASE_KEY="sb_publishable_g2mD4xuJuMv2V2EWOQJjcw_zdTJL7qY"; // publishable key: aman dipublik, akses dijaga RLS
const IG="https://www.instagram.com/adbcreative_team?rpxt=enF3Y3VtZnpkdHRs";
const db=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
document.body.insertAdjacentHTML("afterbegin",`<header><b>ADB CREATIVE TEAM</b><nav><a href="index.html">Home</a><a href="index.html#karya">Karya</a><a href="feedback.html">Saran &amp; Kritik</a><a class="btn" href="${IG}" target="_blank" rel="noopener noreferrer">Follow Instagram ADB ↗</a></nav></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><b>ADB CREATIVE TEAM</b><br><a href="${IG}" target="_blank" rel="noopener noreferrer">Kunjungi Instagram Kami (@adbcreative_team)</a></footer>`);
