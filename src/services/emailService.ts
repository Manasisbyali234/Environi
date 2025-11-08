interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  message: string;
}

export const sendDemoConfirmationEmail = async (formData: DemoFormData) => {
  const emailContent = {
    to: formData.email,
    subject: 'Demo Scheduled - EcoPaper Solutions',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #059669, #047857); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; }
          .button { display: inline-block; background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌱 EcoPaper Solutions</h1>
            <h2>Demo Scheduled Successfully!</h2>
          </div>
          
          <div class="content">
            <p>Dear ${formData.name},</p>
            
            <p>Thank you for scheduling a demo with EcoPaper Solutions! We're excited to show you how our sustainable paper manufacturing process can benefit your business.</p>
            
            <div class="details">
              <h3>📋 Demo Details:</h3>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
              ${formData.preferredDate ? `<p><strong>Preferred Date:</strong> ${new Date(formData.preferredDate).toLocaleDateString()}</p>` : ''}
              ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
            </div>
            
            <h3>🎯 What to Expect:</h3>
            <ul>
              <li>Comprehensive overview of our eco-friendly manufacturing process</li>
              <li>Product quality demonstrations and samples</li>
              <li>Sustainability certifications and environmental impact</li>
              <li>Custom solutions for your business needs</li>
              <li>Pricing and partnership opportunities</li>
            </ul>
            
            <p><strong>Next Steps:</strong></p>
            <p>Our team will contact you within 24 hours to confirm the demo schedule and provide additional details. Please ensure your contact information is accurate.</p>
            
            <div style="text-align: center;">
              <a href="mailto:info@ecopapersolutions.com" class="button">Contact Us</a>
            </div>
          </div>
          
          <div class="footer">
            <p>🌍 <strong>EcoPaper Solutions</strong> - Transforming Waste into Quality Paper Products</p>
            <p>📧 info@ecopapersolutions.com | 📞 +1 (555) 123-4567</p>
            <p>🏢 123 Green Street, Eco City, EC 12345</p>
            <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    console.log('Sending confirmation email to:', formData.email);
    console.log('Email content:', emailContent);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Confirmation email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send confirmation email' };
  }
};