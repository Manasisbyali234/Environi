import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true,
  logger: true
});

// Test connection
transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

// Quote request endpoint
app.post('/api/quote-request', async (req, res) => {
  try {
    const { name, email, company, phone, message, productType } = req.body;
    
    // Professional email template for the company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Quote Request: ${productType || 'Product Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .info-table th, .info-table td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            .info-table th { background-color: #f2f2f2; font-weight: bold; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0; }
            .priority { background-color: #fef3c7; padding: 10px; border-radius: 5px; margin: 15px 0; }
            .footer { background-color: #374151; color: white; padding: 15px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>💼 New Quote Request - Environi</h2>
          </div>
          <div class="content">
            <div class="priority">
              <strong>⚡ Priority:</strong> Quote Request - Requires Response Within 24 Hours
            </div>
            
            <p>You have received a new quote request for your sustainable paper products.</p>
            
            <table class="info-table">
              <tr><th>Customer Name</th><td>${name}</td></tr>
              <tr><th>Email Address</th><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><th>Phone Number</th><td>${phone || 'Not provided'}</td></tr>
              <tr><th>Company</th><td>${company || 'Not provided'}</td></tr>
              <tr><th>Product Interest</th><td><strong>${productType || 'General Inquiry'}</strong></td></tr>
              <tr><th>Request Date</th><td>${new Date().toLocaleString()}</td></tr>
            </table>
            
            <div class="message-box">
              <h3>Customer Requirements:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <h3>📋 Action Items:</h3>
            <ul>
              <li><strong>Immediate:</strong> Send acknowledgment email to customer</li>
              <li><strong>Within 4 hours:</strong> Prepare detailed quote based on requirements</li>
              <li><strong>Within 24 hours:</strong> Send comprehensive quote with pricing</li>
              <li><strong>Follow-up:</strong> Schedule call if needed for complex requirements</li>
            </ul>
            
            <div style="background-color: #e6fffa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4>💡 Quick Response Template:</h4>
              <p><em>"Thank you for your interest in our sustainable paper solutions. We're preparing a detailed quote for ${productType || 'your requirements'} and will send it within 24 hours. For immediate assistance, please call +91 98452 12183."</em></p>
            </div>
          </div>
          <div class="footer">
            <p>This quote request was submitted through your website product page.</p>
            <p>Environi - Sustainable Paper Solutions | www.environi.co.in</p>
          </div>
        </body>
        </html>
      `
    };

    // Professional confirmation email for the customer
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Quote Request Received - We'll Send Your Custom Quote Soon!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px; background-color: #f9f9f9; }
            .highlight-box { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .timeline { background-color: #e6fffa; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .contact-info { background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .footer { background-color: #374151; color: white; padding: 20px; text-align: center; }
            .button { background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>💼 Quote Request Received!</h1>
            <p>Thank you for choosing Environi for your sustainable paper needs</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for your quote request! We're excited to help you find the perfect sustainable paper solution for your needs.</p>
            
            <div class="highlight-box">
              <h3>📋 Your Quote Request Summary:</h3>
              <p><strong>Product Interest:</strong> ${productType || 'General Inquiry'}</p>
              <p><strong>Company:</strong> ${company || 'Not specified'}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Reference ID:</strong> QR-${Date.now().toString().slice(-6)}</p>
            </div>
            
            <div class="timeline">
              <h3>⏰ What Happens Next?</h3>
              <ul>
                <li><strong>Within 2 hours:</strong> Our team will review your requirements</li>
                <li><strong>Within 24 hours:</strong> You'll receive a detailed quote with pricing</li>
                <li><strong>Within 48 hours:</strong> A product specialist will contact you to discuss details</li>
                <li><strong>Follow-up:</strong> We'll arrange product samples if needed</li>
              </ul>
            </div>
            
            <h3>🌿 Why Choose Environi?</h3>
            <ul>
              <li><strong>100% Sustainable:</strong> All products made from recycled materials</li>
              <li><strong>Competitive Pricing:</strong> Best rates for bulk orders</li>
              <li><strong>Custom Solutions:</strong> Tailored to your specific needs</li>
              <li><strong>Fast Delivery:</strong> Quick turnaround times</li>
              <li><strong>Quality Assured:</strong> Premium quality guaranteed</li>
            </ul>
            
            <div class="contact-info">
              <h3>📞 Need Immediate Assistance?</h3>
              <p><strong>Sales Team:</strong> +91 98452 12183 | +91 84314 88687</p>
              <p><strong>Email:</strong> pratap@environi.co.in</p>
              <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
              <p><em>For urgent quotes, please call directly!</em></p>
            </div>
            
            <p>We appreciate your interest in sustainable paper solutions and look forward to partnering with you!</p>
            
            <a href="https://environi.co.in/products" class="button">View All Products</a>
            
            <p>Best regards,<br>
            <strong>The Environi Sales Team</strong><br>
            <em>Your Partner in Sustainable Paper Solutions</em></p>
          </div>
          <div class="footer">
            <p><strong>Environi</strong> - Leading Sustainable Paper Solutions Provider</p>
            <p>#3815, Ground Floor, CT Bed, 7th Cross, Banashankari 2nd Stage, Bangalore – 560070</p>
            <p>📧 info@environi.co.in | 🌐 www.environi.co.in</p>
            <p style="margin-top: 15px; font-size: 11px; opacity: 0.8;">This is an automated confirmation. Our team will contact you personally within 24 hours.</p>
          </div>
        </body>
        </html>
      `
    };

    console.log('Processing quote request for:', name, email, 'Product:', productType);
    
    // Send both emails
    const [companyInfo, customerInfo] = await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    
    console.log('Company notification sent:', companyInfo.messageId);
    console.log('Customer confirmation sent:', customerInfo.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully! Check your email for confirmation and timeline.',
      companyMessageId: companyInfo.messageId,
      customerMessageId: customerInfo.messageId
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit quote request. Please try again or contact us directly.',
      error: error.message 
    });
  }
});

// Email verification endpoint
app.get('/api/verify-email', async (req, res) => {
  try {
    const { token, email } = req.query;
    
    if (!token || !email) {
      return res.status(400).json({ success: false, message: 'Missing verification token or email' });
    }

    // Send verification success email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Email Verified Successfully - Environi',
      html: `
        <h2>Email Verified Successfully!</h2>
        <p>Thank you for verifying your email address.</p>
        <p>We will contact you soon regarding your quote request.</p>
        <p>Best regards,<br>Environi Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email verified successfully' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ success: false, message: 'Failed to verify email', error: error.message });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Professional email template for the company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .info-table th, .info-table td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            .info-table th { background-color: #f2f2f2; font-weight: bold; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0; }
            .footer { background-color: #374151; color: white; padding: 15px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>🌿 New Contact Inquiry - Environi</h2>
          </div>
          <div class="content">
            <p>You have received a new contact inquiry through your website.</p>
            
            <table class="info-table">
              <tr><th>Full Name</th><td>${name}</td></tr>
              <tr><th>Email Address</th><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><th>Phone Number</th><td>${phone || 'Not provided'}</td></tr>
              <tr><th>Company</th><td>${company || 'Not provided'}</td></tr>
              <tr><th>Subject</th><td>${subject}</td></tr>
              <tr><th>Inquiry Date</th><td>${new Date().toLocaleString()}</td></tr>
            </table>
            
            <div class="message-box">
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Respond to the customer within 24 hours</li>
              <li>Add their details to your CRM system</li>
              <li>Follow up based on their inquiry type</li>
            </ul>
          </div>
          <div class="footer">
            <p>This email was generated automatically from your website contact form.</p>
            <p>Environi - Sustainable Paper Solutions | www.environi.co.in</p>
          </div>
        </body>
        </html>
      `
    };

    // Professional confirmation email for the customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Environi - We'll be in touch soon!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #10b981; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px; background-color: #f9f9f9; }
            .highlight-box { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .contact-info { background-color: #e6fffa; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .footer { background-color: #374151; color: white; padding: 20px; text-align: center; }
            .button { background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🌿 Thank You for Contacting Environi!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for reaching out to us! We have successfully received your inquiry and truly appreciate your interest in our sustainable paper solutions.</p>
            
            <div class="highlight-box">
              <h3>📋 Your Inquiry Summary:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Company:</strong> ${company || 'Not specified'}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <h3>⏰ What happens next?</h3>
            <ul>
              <li><strong>Within 24 hours:</strong> Our team will review your inquiry and respond with initial information</li>
              <li><strong>Within 48 hours:</strong> A dedicated specialist will contact you to discuss your specific needs</li>
              <li><strong>Follow-up:</strong> We'll provide detailed product information and pricing based on your requirements</li>
            </ul>
            
            <div class="contact-info">
              <h3>📞 Need immediate assistance?</h3>
              <p><strong>Phone:</strong> +91 98452 12183 | +91 84314 88687</p>
              <p><strong>Email:</strong> pratap@environi.co.in</p>
              <p><strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
            </div>
            
            <p>At Environi, we're committed to providing eco-friendly paper solutions that meet your business needs while protecting our environment. We look forward to partnering with you!</p>
            
            <a href="https://environi.co.in" class="button">Visit Our Website</a>
            
            <p>Warm regards,<br>
            <strong>The Environi Team</strong><br>
            <em>Your Partner in Sustainable Paper Solutions</em></p>
          </div>
          <div class="footer">
            <p><strong>Environi</strong> - Sustainable Paper Solutions</p>
            <p>#3815, Ground Floor, CT Bed, 7th Cross, Banashankari 2nd Stage, Bangalore – 560070</p>
            <p>📧 info@environi.co.in | 🌐 www.environi.co.in</p>
            <p style="margin-top: 15px; font-size: 11px; opacity: 0.8;">This is an automated confirmation email. Please do not reply directly to this message.</p>
          </div>
        </body>
        </html>
      `
    };

    console.log('Sending emails for contact inquiry from:', name, email);
    
    // Send both emails
    const [companyInfo, customerInfo] = await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);
    
    console.log('Company notification sent:', companyInfo.messageId);
    console.log('Customer confirmation sent:', customerInfo.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! Check your email for confirmation.',
      companyMessageId: companyInfo.messageId,
      customerMessageId: customerInfo.messageId
    });
  } catch (error) {
    console.error('Error sending contact message:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again or contact us directly.',
      error: error.message 
    });
  }
});

// Generic email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
      html: html
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});