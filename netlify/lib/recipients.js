// Membersihkan daftar "Diteruskan Kepada" dari body request: hanya string,
// dirapikan spasinya, tanpa duplikat, dan dibatasi panjangnya per nama.
function cleanRecipients(arr) {
  if (!Array.isArray(arr)) return [];
  const cleaned = arr
    .map((r) => String(r == null ? "" : r).trim())
    .filter((r) => r.length > 0 && r.length <= 120);
  return [...new Set(cleaned)];
}

module.exports = { cleanRecipients };
