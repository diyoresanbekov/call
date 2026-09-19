import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// 1. CORS sozlamalari (Front-end brauzer blokirovkasini (CORS) yechish uchun)
app.use(
  cors({
    origin: '*', // Barcha domenlardan so'rov qabul qilishga ruxsat berish
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Preflight (OPTIONS) so'rovlarini to'g'ri qayta ishlash
app.options('*', cors());

// JSON farmatidagi so'rov tanasini o'qish uchun
app.use(express.json());

// 2. Supabase mijozini sozlash
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("SUPABASE_URL va SUPABASE_SERVICE_ROLE_KEY .env faylida ko'rsatilmagan!");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 3. API Route - Arizalarni qabul qilish va Supabase-ga saqlash
app.post('/api/applications', async (req, res) => {
  try {
    const { name, phone, company } = req.body;

    // Ma'lumot borligini tekshirish
    if (!name || !phone || !company) {
      return res.status(400).json({
        success: false,
        error: "Barcha maydonlar (name, phone, company) to'ldirilishi shart",
      });
    }

    // Supabase 'applications' jadvaliga yozish
    const { data, error } = await supabase
      .from('applications')
      .insert([{ name, phone, company }])
      .select();

    if (error) {
      console.error('Supabase xatosi:', error);
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }

    // Front-end kutayotgan javob formati
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    console.error('Server ichki xatosi:', err);
    return res.status(500).json({
      success: false,
      error: 'Serverda kutilmagan xatolik yuz berdi',
    });
  }
});

// Serverni ishga tushirish (Local testing uchun)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Backend server ${PORT}-portda ishlamoqda...`));
}

// Vercel serverless funksiyasi uchun eksport
export default app;
