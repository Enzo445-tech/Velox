export default async function handler(req, res) {
  const tracking = req.query.tracking;

  if (!tracking) {
    return res.status(400).json({ error: "missing tracking number" });
  }

  const response = await fetch(
    `https://api.whereparcel.com/v2/track/${tracking}`,
    {
      headers: {
        "Authorization": `Bearer ${process.env.WHEREPARCEL_API_KEY}`
      }
    }
  );

  const data = await response.json();

  return res.status(200).json(data);
}
