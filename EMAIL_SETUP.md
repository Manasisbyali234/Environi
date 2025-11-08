# Nodemailer Setup Guide

## Installation Complete

Nodemailer has been successfully added to your project with the following components:

### 1. Dependencies Added
- `nodemailer` - Email sending library
- `express` - Backend server
- `cors` - Cross-origin resource sharing
- Type definitions for TypeScript support

### 2. Files Created
- `server/index.js` - Express server with email endpoints
- `src/utils/emailService.ts` - Frontend email service utility
- `EMAIL_SETUP.md` - This setup guide

### 3. Configuration Required

#### Update `.env` file with your email credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=contact@yourcompany.com
PORT=3001
```

#### For Gmail users:
1. Enable 2-factor authentication
2. Generate an App Password (not your regular password)
3. Use the App Password in `EMAIL_PASS`

### 4. Usage

#### Start the server:
```bash
npm run server
```

#### Start the frontend (in another terminal):
```bash
npm run dev
```

#### In your React components:
```typescript
import { sendContactForm, sendEmail } from '../utils/emailService';

// Send contact form
await sendContactForm('John Doe', 'john@example.com', 'Hello!');

// Send custom email
await sendEmail({
  to: 'recipient@example.com',
  subject: 'Test Email',
  html: '<h1>Hello World</h1>'
});
```

### 5. API Endpoints
- `POST /api/send-email` - Send emails
- `GET /api/health` - Health check

The setup is complete and ready to use!