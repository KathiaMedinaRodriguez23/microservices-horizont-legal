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

module.exports = {
    squemaEmailHtmlForgotPassword
}