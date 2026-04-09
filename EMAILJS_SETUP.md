# EmailJS Setup Instructions

Your contact form is now configured to send emails to **michelmunezero25@gmail.com**. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Click on **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email service)
4. Click **"Connect Account"** and sign in with your Gmail (michelmunezero25@gmail.com)
5. Give it a name (e.g., "Portfolio Contact")
6. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template

1. Click on **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**

```
New Contact from {{from_name}} - {{subject}}
```

**Content:**

```
You have received a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Budget: {{budget}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. In the "To email" field, set: **michelmunezero25@gmail.com**
   - Use the plain email address, with no braces.
   - This avoids the "recipient is empty" error caused by malformed template syntax.
5. Save the template and copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key

1. Click on **"Account"** in the left sidebar
2. Go to the **"General"** tab
3. Copy your **Public Key** (looks like: xxxxxxxxxxxxxxxxx)

## Step 5: Add Environment Variables

1. Create a `.env` file in the project root
2. Add your values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
VITE_CONTACT_DESTINATION_EMAIL=michelmunezero25@gmail.com
```

3. Restart your dev server after editing `.env`

The contact form already reads these variables from `src/components/Contact.jsx`.

If you prefer a fixed recipient, you can keep `VITE_CONTACT_DESTINATION_EMAIL=michelmunezero25@gmail.com` as-is.

## Step 6: Test Your Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (michelmunezero25@gmail.com) for the message!

## Troubleshooting

- If emails aren't arriving, check your spam folder
- Make sure all IDs are correctly copied (no extra spaces)
- Check the browser console for any error messages
- Verify your EmailJS account is verified

## Security Note

Your `.env` file should stay private and must not be committed.
This project already ignores `.env` in `.gitignore`.

---

**Need help?** Check EmailJS documentation: https://www.emailjs.com/docs/
