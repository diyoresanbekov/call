import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Supabase ulanishi .env fayldan olinadi
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Kelayotgan datani POST qilib Supabase-ga saqlaydigan logika
app.post('/api/data', async (req, res) => {
  try {
    const bodyData = req.body;

    // Supabase-dagi jadvalingiz nomini 'users' o'rniga yozing
    const { data, error } = await supabase
      .from('users') 
      .insert([bodyData]);

    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    return res.status(200).json({
      success: true,
      message: "Data muvaffaqiyatli saqlandi!",
      data
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Local kompyuterda ishlatish uchun port
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlayapti`);
  });
}

export default app;