/**
 * @param {string} enlace
 * @return {string}
 */
function squemaEmailHtmlForgotPassword(enlace) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Restablecimiento de Contraseña</title>
        <!--[if mso]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background-color: #2c5282; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 300; letter-spacing: 1px;">
                    Restablecimiento de Contraseña
                </h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.7; color: #2d3748;">
                <div style="border-left: 4px solid #2c5282; padding-left: 20px; margin-bottom: 30px;">
                    <p style="font-size: 18px; margin: 0; color: #1a365d; font-weight: 500;">
                        Estimado(a) Dr./Dra.,
                    </p>
                </div>
                
                <p style="font-size: 16px; margin-bottom: 25px; text-align: justify;">
                    Hemos recibido una solicitud para restablecer la contraseña de su cuenta en nuestro sistema. Por motivos de seguridad y confidencialidad, hemos generado un enlace seguro que le permitirá establecer una nueva contraseña.
                </p>
                
                <p style="font-size: 16px; margin-bottom: 30px; text-align: justify;">
                    Para proceder con el restablecimiento, por favor haga clic en el siguiente botón:
                </p>
                
                <!-- Button Container -->
                <div style="text-align: center; margin: 40px 0;">
                    <div style="background-color: #f7fafc; border: 2px dashed #cbd5e0; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
                        <p style="font-size: 14px; color: #4a5568; margin: 0 0 15px 0; font-weight: 500;">
                            ENLACE DE RESTABLECIMIENTO
                        </p>
                        <!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${enlace}" style="height:50px;v-text-anchor:middle;width:250px;" arcsize="50%" strokecolor="#1a365d" fillcolor="#2c5282">
                            <w:anchorlock/>
                            <center style="color:#ffffff;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;">Restablecer Contraseña</center>
                        </v:roundrect>
                        <![endif]-->
                        <!--[if !mso]><!-->
                        <a href="${enlace}" style="display: inline-block; background-color: #2c5282; color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; border: 2px solid #1a365d; mso-hide: all;">
                            Restablecer Contraseña
                        </a>
                        <!--<![endif]-->
                    </div>
                    
                    <!-- Fallback link for clients that don't support buttons -->
                    <p style="font-size: 12px; color: #718096; margin: 15px 0;">
                        Si el botón no funciona, copie y pegue este enlace en su navegador:<br>
                        <a href="${enlace}" style="color: #2c5282; word-break: break-all;">${enlace}</a>
                    </p>
                    
                    <p style="font-size: 12px; color: #718096; font-style: italic; margin: 15px 0 0 0;">
                        Este enlace expirará en 1 hora por seguridad
                    </p>
                </div>
                
                <!-- Security Notice -->
                <div style="background-color: #fef5e7; border-left: 4px solid #f6ad55; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0; font-size: 14px; color: #744210; line-height: 1.5;">
                        <strong>Importante:</strong> Si usted no solicitó este restablecimiento de contraseña, por favor ignore este correo y 
                        <a href="mailto:kathia@strategyec.com" style="color: #c05621; font-weight: 600;">contáctenos inmediatamente</a> 
                        para reportar esta actividad.
                    </p>
                </div>
                
                <p style="font-size: 16px; margin-top: 40px; margin-bottom: 10px; color: #1a365d;">
                    Cordialmente,
                </p>
                
                <div style="margin-top: 30px; padding-top: 25px; border-top: 2px solid #e2e8f0;">
                    <p style="font-size: 14px; color: #4a5568; margin: 0; font-weight: 500;">
                        Equipo de Soporte Técnico
                    </p>
                    <p style="font-size: 14px; color: #718096; margin: 5px 0 0 0;">
                        Horizonte Legal
                    </p>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #edf2f7; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 12px; color: #718096; margin: 0; line-height: 1.5;">
                    Este es un correo automático generado por el sistema. Por favor, no responda a este mensaje.<br>
                    Para consultas, contacte a: <a href="mailto:kathia@strategyec.com" style="color: #2c5282;">kathia@strategyec.com</a>
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Genera el esquema HTML para un correo de citación a audiencia legal.
 * @param fecha
 * @param hora
 * @param idCaso
 * @returns {string}
 */
function esquemaEmailCitacionAudiencia(fecha, hora, idCaso) {
  return `
   <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Citación para Audiencia Legal</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            }
            .container {
                max-width: 650px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .header {
                background-color: #2c5282;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                color: #ffffff;
                margin: 0;
                font-family: Georgia, 'Times New Roman', serif;
                font-size: 28px;
                font-weight: 300;
                letter-spacing: 1px;
            }
            .content {
                padding: 40px 30px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.7;
                color: #2d3748;
            }
            .saludo {
                border-left: 4px solid #2c5282;
                padding-left: 20px;
                margin-bottom: 30px;
            }
            .saludo p {
                font-size: 18px;
                margin: 0;
                color: #1a365d;
                font-weight: 500;
            }
            .info-box {
                background-color: #f8fafc;
                border: 2px dashed #cbd5e0;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                text-align: center;
            }
            .info-item {
                display: inline-block;
                margin: 0 15px;
                text-align: center;
            }
            .info-label {
                font-size: 14px;
                color: #718096;
                margin-bottom: 5px;
                font-weight: 500;
            }
            .info-value {
                font-size: 18px;
                font-weight: 600;
                color: #2c5282;
            }
            .case-id {
                background-color: #1a365d;
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                text-align: center;
                font-weight: 600;
                letter-spacing: 1px;
                margin: 20px 0;
                font-size: 18px;
            }
            .instructions {
                background-color: #fef5e7;
                border-left: 4px solid #f6ad55;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 8px 8px 0;
            }
            .signature {
                margin-top: 30px;
                padding-top: 25px;
                border-top: 2px solid #e2e8f0;
            }
            .footer {
                background-color: #edf2f7;
                padding: 25px 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }
            @media (max-width: 600px) {
                .info-item {
                    display: block;
                    margin: 15px 0;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <h1>Citación para Audiencia Legal</h1>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="saludo">
                    <p>Estimado(a),</p>
                </div>
                
                <p style="font-size: 16px; margin-bottom: 25px; text-align: justify;">
                    Por medio del presente, le informamos que ha sido citado(a) a una audiencia legal relacionada 
                    con uno de los casos bajo su representación. A continuación encontrará los detalles de la citación:
                </p>
                
                <!-- Case ID -->
                <div class="case-id">
                    ID DEL CASO: ${idCaso}
                </div>
                
                <!-- Information Box -->
                <div class="info-box">
                    <div class="info-item">
                        <div class="info-label">FECHA</div>
                        <div class="info-value">${fecha}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">HORA</div>
                        <div class="info-value">${hora}</div>
                    </div>
                    
                </div>
                
                <p style="font-size: 16px; margin-bottom: 25px; text-align: justify;">
                    <strong>Lugar:</strong> Centro Juridico Horizonte Legal, Sala de Audiencias 3
                </p>
                
                <!-- Instructions -->
                <div class="instructions">
                    <p style="margin: 0; font-size: 15px; color: #744210; line-height: 1.5;">
                        <strong>Instrucciones importantes:</strong> 
                        <ul style="padding-left: 20px; margin: 10px 0 0 0;">
                            <li>Preséntese al menos 30 minutos antes de la hora citada</li>
                            <li>Porte su identificación profesional oficial</li>
                            <li>Lleve toda la documentación relacionada con el caso</li>
                            <li>Vestimenta formal de acuerdo al protocolo judicial</li>
                        </ul>
                    </p>
                </div>
                
                <p style="font-size: 16px; margin-top: 30px; margin-bottom: 10px; color: #1a365d;">
                    Cordialmente,
                </p>
                
                <div class="signature">
                    <p style="font-size: 15px; color: #4a5568; margin: 0; font-weight: 500;">
                        Departamento de Coordinación de Audiencias
                    </p>
                    <p style="font-size: 15px; color: #718096; margin: 5px 0 0 0;">
                        Horizonte Legal
                    </p>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p style="font-size: 12px; color: #718096; margin: 0; line-height: 1.5;">
                    Este es un correo automático generado por el sistema. Por favor, no responda a este mensaje.<br>
                    Para consultas: <a href="mailto:audiencias@horizontelegal.com" style="color: #2c5282;">audiencias@horizontelegal.com</a>
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Genera el esquema HTML para un correo de recordatorio de citación a audiencia legal.
 * @param fecha
 * @param hora
 * @param idCaso
 * @returns {string}
 */
function esquemaEmailRecordatorioCitacionAudiencia(fecha, hora, idCaso) {
  return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Recordatorio de Citación a Audiencia</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            }
            .container {
                max-width: 650px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                border-top: 5px solid #f59e0b;
            }
            .header {
                background: linear-gradient(135deg, #2c5282, #1a365d);
                padding: 30px;
                text-align: center;
                position: relative;
            }
            .header h1 {
                color: #ffffff;
                margin: 0;
                font-size: 28px;
                font-weight: 400;
                letter-spacing: 1px;
            }
            .reminder-label {
                position: absolute;
                top: 15px;
                right: 15px;
                background-color: #f59e0b;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
            }
            .content {
                padding: 40px 30px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.7;
                color: #2d3748;
            }
            .saludo {
                border-left: 4px solid #f59e0b;
                padding-left: 20px;
                margin-bottom: 30px;
            }
            .saludo p {
                font-size: 18px;
                margin: 0;
                color: #1a365d;
                font-weight: 500;
            }
            .reminder-note {
                background-color: #fffbeb;
                border: 1px solid #fde68a;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
                font-size: 17px;
                color: #78350f;
                font-weight: 500;
            }
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin: 25px 0;
            }
            .info-item {
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 20px;
                text-align: center;
            }
            .info-label {
                font-size: 14px;
                color: #718096;
                margin-bottom: 8px;
                font-weight: 500;
            }
            .info-value {
                font-size: 18px;
                font-weight: 600;
                color: #2c5282;
            }
            .case-id {
                background-color: #1e3a8a;
                color: white;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                font-weight: 600;
                letter-spacing: 1px;
                margin: 20px 0;
                font-size: 18px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.1);
            }
            .location {
                background-color: #eff6ff;
                border-left: 4px solid #3b82f6;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 8px 8px 0;
            }
            .instructions {
                background-color: #f0fdf4;
                border-left: 4px solid #10b981;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 8px 8px 0;
            }
            .signature {
                margin-top: 30px;
                padding-top: 25px;
                border-top: 2px solid #e2e8f0;
            }
            .footer {
                background-color: #edf2f7;
                padding: 25px 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
                font-size: 13px;
                color: #718096;
            }
            @media (max-width: 600px) {
                .info-grid {
                    grid-template-columns: 1fr;
                }
                .content {
                    padding: 30px 20px;
                }
                .header {
                    padding: 25px 15px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <h1>Recordatorio de Citación a Audiencia</h1>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="saludo">
                    <p>Estimado(a),</p>
                </div>
                
                <p style="font-size: 16px; margin-bottom: 25px; text-align: justify;">
                    Le recordamos que tiene programada una audiencia legal en las próximas horas/días. 
                    Por favor, verifique los detalles a continuación y tome las previsiones necesarias.
                </p>
                
                <!-- Reminder Note -->
                <div class="reminder-note">
                    <i class="fas fa-bell" style="margin-right: 8px;"></i>
                    Su audiencia está programada para el <strong>${fecha}</strong> a las <strong>${hora}</strong>
                </div>
                
                <!-- Case ID -->
                <div class="case-id">
                    ID DEL CASO: ${idCaso}
                </div>
                
                <!-- Information Grid -->
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">FECHA DE AUDIENCIA</div>
                        <div class="info-value">${fecha}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">HORA EXACTA</div>
                        <div class="info-value">${hora}</div>
                    </div>

                </div>
                
                <!-- Location -->
                <div class="location">
                    <p style="font-size: 17px; margin: 0 0 10px 0; font-weight: 600; color: #1e40af;">
                        <i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i> LUGAR DE LA CITACION
                    </p>
                    <p style="margin: 5px 0;"><strong>Centro Juridico Horizonte Legal, Sala de Audiencias 3</strong></p>
                </div>
                
                <!-- Instructions -->
                <div class="instructions">
                    <p style="font-size: 17px; margin: 0 0 15px 0; font-weight: 600; color: #047857;">
                        <i class="fas fa-clipboard-list" style="margin-right: 10px;"></i> RECOMENDACIONES
                    </p>
                    <ul style="padding-left: 20px; margin: 0;">
                        <li style="margin-bottom: 8px;">Preséntese al menos 30 minutos antes de la hora citada</li>
                        <li style="margin-bottom: 8px;">Verifique que lleva toda la documentación del caso</li>
                        <li style="margin-bottom: 8px;">Use vestimenta profesional acorde al protocolo judicial</li>
                        <li style="margin-bottom: 8px;">Confirme su asistencia si aún no lo ha hecho</li>
                    </ul>
                </div>
                
                <p style="font-size: 16px; margin-top: 20px; margin-bottom: 10px; color: #1a365d;">
                    Atentamente,
                </p>
                
                <div class="signature">
                    <p style="font-size: 15px; color: #4a5568; margin: 0; font-weight: 500;">
                        Departamento de Coordinación de Audiencias
                    </p>
                    <p style="font-size: 15px; color: #718096; margin: 5px 0 0 0;">
                        Horizonte Legal
                    </p>
                    <p style="font-size: 14px; color: #4a5568; margin: 15px 0 0 0;">
                        <i class="fas fa-phone-alt" style="margin-right: 8px;"></i> (+51) 123-4567 Ext. 105
                    </p>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p style="margin: 0; line-height: 1.5;">
                    Este es un recordatorio automático generado por el sistema. Por favor, no responda a este mensaje.<br>
                    Para consultas: <a href="mailto:audiencias@horizontelegal.com" style="color: #2c5282; text-decoration: none;">audiencias@horizontelegal.com</a>
                </p>
                <p style="margin: 10px 0 0 0; font-size: 12px;">
                    © ${new Date().getFullYear()} Horizonte Legal. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </body>
    </html>`
}

/**
 * Genera el esquema HTML para un correo de reprogramacion de Cita.
 * @param fecha
 * @param hora
 * @param idCaso
 * @returns {string}
 */
function esquemaEamilReprogramacionDeCita(fecha, hora, idCaso) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Reprogramación de Cita Legal</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            }
            .container {
                max-width: 650px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                border-top: 5px solid #7e3af2;
            }
            .header {
                background: linear-gradient(135deg, #6c2bd9, #7e3af2);
                padding: 30px;
                text-align: center;
                position: relative;
            }
            .header h1 {
                color: #ffffff;
                margin: 0;
                font-size: 28px;
                font-weight: 400;
                letter-spacing: 1px;
            }
            .reschedule-label {
                position: absolute;
                top: 15px;
                right: 15px;
                background-color: #e9d8fd;
                color: #553c9a;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
            }
            .content {
                padding: 40px 30px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.7;
                color: #2d3748;
            }
            .saludo {
                border-left: 4px solid #7e3af2;
                padding-left: 20px;
                margin-bottom: 30px;
            }
            .saludo p {
                font-size: 18px;
                margin: 0;
                color: #1a365d;
                font-weight: 500;
            }
            .reschedule-note {
                background-color: #f5f3ff;
                border: 1px solid #d6bcfa;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
                font-size: 17px;
                color: #553c9a;
                font-weight: 500;
            }
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin: 25px 0;
            }
            .info-item {
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 20px;
                text-align: center;
            }
            .info-label {
                font-size: 14px;
                color: #718096;
                margin-bottom: 8px;
                font-weight: 500;
            }
            .info-value {
                font-size: 18px;
                font-weight: 600;
                color: #6c2bd9;
            }
            .case-id {
                background-color: #6c2bd9;
                color: white;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                font-weight: 600;
                letter-spacing: 1px;
                margin: 20px 0;
                font-size: 18px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.1);
            }
            .new-details {
                background-color: #f0f4ff;
                border-left: 4px solid #5a67d8;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 8px 8px 0;
            }
            .confirmation {
                background-color: #f0fff4;
                border-left: 4px solid #48bb78;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 8px 8px 0;
                text-align: center;
            }
            .signature {
                margin-top: 30px;
                padding-top: 25px;
                border-top: 2px solid #e2e8f0;
            }
            .footer {
                background-color: #edf2f7;
                padding: 25px 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
                font-size: 13px;
                color: #718096;
            }
            @media (max-width: 600px) {
                .info-grid {
                    grid-template-columns: 1fr;
                }
                .content {
                    padding: 30px 20px;
                }
                .header {
                    padding: 25px 15px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <div class="reschedule-label">REPROGRAMACIÓN</div>
                <h1>Reprogramación de Cita Legal</h1>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="saludo">
                    <p>Estimado(a),</p>
                </div>
                
                <p style="font-size: 16px; margin-bottom: 25px; text-align: justify;">
                    Le informamos que su cita legal ha sido reprogramada debido a circunstancias imprevistas. 
                    Por favor, tome nota de los nuevos detalles de su audiencia a continuación.
                </p>
                
                <!-- Reschedule Note -->
                <div class="reschedule-note">
                    <i class="fas fa-calendar-alt" style="margin-right: 8px;"></i>
                    Su audiencia ha sido reprogramada para el <strong>${fecha}</strong> a las <strong>${hora}</strong>
                </div>
                
                <!-- Case ID -->
                <div class="case-id">
                    ID DEL CASO: ${idCaso}
                </div>
                
                <!-- New Details -->
                <div class="new-details">
                    <p style="font-size: 17px; margin: 0 0 15px 0; font-weight: 600; color: #434190;">
                        <i class="fas fa-info-circle" style="margin-right: 10px;"></i> NUEVOS DETALLES DE LA AUDIENCIA
                    </p>
                    
                    <!-- Information Grid -->
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">NUEVA FECHA</div>
                            <div class="info-value">${fecha}</div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-label">NUEVA HORA</div>
                            <div class="info-value">${hora}</div>
                        </div>
                    </div>
                    
                    <p style="font-size: 16px; margin-top: 15px; margin-bottom: 0; color: #4c51bf;">
                        <i class="fas fa-map-marker-alt" style="margin-right: 8px;"></i>
                        <strong>Lugar:</strong> Centro Jurídico Horizonte Legal, Sala de Audiencias 3
                    </p>
                </div>
                
                <!-- Confirmation -->
                <div class="confirmation">
                    <p style="font-size: 17px; margin: 0 0 15px 0; font-weight: 600; color: #2f855a;">
                        <i class="fas fa-clipboard-check" style="margin-right: 10px;"></i> CONFIRMACIÓN REQUERIDA
                    </p>
                    <p style="font-size: 16px; margin-bottom: 20px;">
                        Por favor, confirme su disponibilidad para la nueva fecha y hora respondiendo a este correo.
                    </p>
                    <p style="font-size: 14px; color: #718096; margin-top: 15px; margin-bottom: 0;">
                        Si no puede asistir, contáctenos inmediatamente para buscar una nueva fecha
                    </p>
                </div>
                
                <!-- Additional Notes -->
                <div style="background-color: #fffaf0; 
                            border-left: 4px solid #ed8936; 
                            padding: 20px;
                            margin: 30px 0;
                            border-radius: 0 8px 8px 0;">
                    <p style="font-size: 17px; margin: 0 0 10px 0; font-weight: 600; color: #c05621;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 10px;"></i> NOTA IMPORTANTE
                    </p>
                    <p style="margin: 0; font-size: 15px; color: #9c4221;">
                        Si no recibimos confirmación de su parte dentro de las próximas 48 horas, asumiremos que está de acuerdo con la nueva fecha y hora programada.
                    </p>
                </div>
                
                <p style="font-size: 16px; margin-top: 20px; margin-bottom: 10px; color: #1a365d;">
                    Lamentamos las molestias y agradecemos su comprensión,
                </p>
                
                <div class="signature">
                    <p style="font-size: 15px; color: #4a5568; margin: 0; font-weight: 500;">
                        Departamento de Coordinación de Audiencias
                    </p>
                    <p style="font-size: 15px; color: #718096; margin: 5px 0 0 0;">
                        Horizonte Legal
                    </p>
                    <p style="font-size: 14px; color: #4a5568; margin: 15px 0 0 0;">
                        <i class="fas fa-phone-alt" style="margin-right: 8px;"></i> (+51) 123-4567 Ext. 108
                    </p>
                    <p style="font-size: 14px; color: #4a5568; margin: 5px 0 0 0;">
                        <i class="fas fa-envelope" style="margin-right: 8px;"></i> reprogramaciones@horizontelegal.com
                    </p>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p style="margin: 0; line-height: 1.5;">
                    Este es un mensaje automático generado por el sistema. Por favor, no responda a este mensaje.<br>
                    Para consultas sobre reprogramaciones: <a href="mailto:reprogramaciones@horizontelegal.com" style="color: #6c2bd9; text-decoration: none;">reprogramaciones@horizontelegal.com</a>
                </p>
                <p style="margin: 10px 0 0 0; font-size: 12px;">
                    © ${new Date().getFullYear()} Horizonte Legal. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
}

module.exports = {
  squemaEmailHtmlForgotPassword,
  esquemaEmailCitacionAudiencia,
  esquemaEmailRecordatorioCitacionAudiencia,
  esquemaEamilReprogramacionDeCita
}