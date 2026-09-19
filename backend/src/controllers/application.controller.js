import { applicationSchema } from "../validators/application.validator.js";
import { createApplication } from "../services/application.service.js";

export async function submitApplication(req, res, next) {
  try {
    const parsed = applicationSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Ma'lumotlarni tekshiring",
      });
    }

    await createApplication(parsed.data);

    return res.status(201).json({
      success: true,
      message: "Ariza muvaffaqiyatli qabul qilindi",
    });
  } catch (error) {
    return next(error);
  }
}
