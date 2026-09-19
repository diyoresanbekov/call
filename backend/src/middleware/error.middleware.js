export function notFoundHandler(_req, res) {
  res.status(404).json({
    success: false,
    message: "Not found",
  });
}

export function errorHandler(err, _req, res, _next) {
  if (err?.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "Ma'lumotlarni tekshiring",
    });
  }

  console.error("API error:", err?.message || err);

  return res.status(500).json({
    success: false,
    message: "Server error",
  });
}
