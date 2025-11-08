interface EmailData {
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
  name?: string;
  email?: string;
  message?: string;
}

const API_BASE_URL = 'http://localhost:3001/api';

export const sendEmail = async (emailData: EmailData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    return result;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const sendContactForm = async (contactData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Contact form error:', error);
    throw error;
  }
};

export const submitQuoteRequest = async (quoteData: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  productType?: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/quote-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit quote request');
    }

    return result;
  } catch (error) {
    console.error('Quote request error:', error);
    throw error;
  }
};

export const verifyEmail = async (token: string, email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify-email?token=${token}&email=${email}`);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to verify email');
    }

    return result;
  } catch (error) {
    console.error('Email verification error:', error);
    throw error;
  }
};