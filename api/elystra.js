export default async function handler(req, res) 
{
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

  if (req.method === "POST") {
    const body = req.body;

    // Messaggio ricevuto
    const chatId = body.message.chat.id;
    const text = body.message.text;

    // Risposta base di Elystra
    const reply = `Ho ricevuto il tuo comando: "${text}". Elystra è attiva 🧠`;

    // Invia risposta a Telegram
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: reply
      })
    });

    return res.status(200).json({ ok: true });
  }

  return res.status(200).send("Elystra Telegram Webhook");
}
