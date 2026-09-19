import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Supabase ulanishi (.env faylidan olinadi)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Front-end yuborayotgan /api/applications yo'li
app.post('/api/applications', async (req, res) => {
  try {
    const { name, phone, company } = req.body;

    // Supabase-dagi jadval nomi (masalan: 'applications')
    const { data, error } = await supabase
      .from('applications') 
      .insert([{ name, phone, company }]);

    if (error) {
      console.error('Supabase xatosi:', error);
      return res.status(400).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Server xatosi:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server http://localhost:${PORT} da ishlayapti`));
}

export default app;
