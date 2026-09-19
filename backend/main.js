import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.post('/api/applications', async (req, res) => {
  try {
    const { name, phone, company } = req.body;

    // Supabase-ga ma'lumot qo'shish
    const { data, error } = await supabase
      .from('applications') 
      .insert([{ name, phone, company }]);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(400).json({ success: false, error: error.message });
    }

    // Front-end kutayotgan { success: true } javobi
    return res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
