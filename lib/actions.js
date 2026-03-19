'use server';

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const RESEND_VERIFIED_DOMAIN = process.env.RESEND_VERIFIED_DOMAIN;

const LOGO_URL =
  "https://res.cloudinary.com/dumoohkiq/image/upload/v1773674272/logo_1_uiqf8c.png";

/**
 * @param {Object} formData
 * @param {string} formData.nombre
 * @param {string} formData.apellido
 * @param {string} formData.correo
 * @param {string} [formData.telefono]
 * @param {string} formData.mensaje
 * @param {string} [formData.servicio]
 */
export async function sendContactFormEmail(formData) {
  if (!ADMIN_EMAIL || !RESEND_VERIFIED_DOMAIN) {
    return { success: false, error: "Server configuration error." };
  }

  try {
    await resend.emails.send({
      from: `Alphabelle Wellness <noreply@${RESEND_VERIFIED_DOMAIN}>`,
      to: [ADMIN_EMAIL],
      subject: `Nuevo mensaje de contacto: ${formData.nombre} ${formData.apellido}`,
      html: `
      <div style="font-family: Montserrat, sans-serif; line-height:1.6; color:#333;">
        
        <div style="background:#f4f4f4;padding:20px;text-align:center;">
          <img src="${LOGO_URL}" style="max-width:150px;margin-bottom:20px"/>
          <h2 style="color:#;">Nuevo mensaje de contacto</h2>
        </div>

        <div style="padding:20px;background:white;">
          <p><strong>Nombre:</strong> ${formData.nombre} ${formData.apellido}</p>
          <p><strong>Email:</strong> ${formData.correo}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono || "N/A"}</p>
          ${formData.servicio ? `<p><strong>Servicio:</strong> ${formData.servicio}</p>` : ""}

          <br/>

          <p><strong>Mensaje:</strong></p>
          <p>${formData.mensaje}</p>
        </div>

        <div style="background:#f4f4f4;padding:10px;text-align:center;font-size:12px;">
          © ${new Date().getFullYear()} Alphabelle Wellness
        </div>

      </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Failed to send email." };
  }
}