import * as fs from 'fs';
import * as path from 'path';
import { defineComponent, h } from 'vue';

// Fonction utilitaire pour rendre le HTML
const renderTemplate = (template: string, variables: Record<string, string>) => {
  return template.replace(/\${(\w+)}/g, (_, key) => variables[key] || '');
};

// Templates d'emails
const emailTemplates = {
  'email-confirm-change': {
    subject: 'Confirm Email Change',
    body: `
      <div style="background-color: #f5f5f5; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 560px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px;">
          <h1 style="color: #484848; font-size: 24px;">Confirm Email Change</h1>
          <p style="color: #3c4149;">Use this link to confirm changing email:</p>
          <a href="\${link}" style="display: block; background-color: #0052cd; color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; text-align: center; margin: 20px 0;">
            Change Email
          </a>
          <hr style="border: none; border-top: 1px solid #dfe1e4; margin: 20px 0;" />
          <div style="display: flex; align-items: center;">
            <img src="https://nhost.io/images/emails/icon.png" alt="Nhost Logo" style="width: 20px; height: 20px; margin-right: 10px;" />
            <a href="https://nhost.io" style="color: #b4becc; text-decoration: none;">Powered by Nhost</a>
          </div>
        </div>
      </div>
    `
  },
  'email-verify': {
    subject: 'Verify your email',
    body: `
      <div style="background-color: #f5f5f5; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 560px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px;">
          <h1 style="color: #484848; font-size: 24px;">Verify Email</h1>
          <p style="color: #3c4149;">Use this link to verify your email:</p>
          <a href="\${link}" style="display: block; background-color: #0052cd; color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; text-align: center; margin: 20px 0;">
            Verify Email
          </a>
          <hr style="border: none; border-top: 1px solid #dfe1e4; margin: 20px 0;" />
          <div style="display: flex; align-items: center;">
            <img src="https://nhost.io/images/emails/icon.png" alt="Nhost Logo" style="width: 20px; height: 20px; margin-right: 10px;" />
            <a href="https://nhost.io" style="color: #b4becc; text-decoration: none;">Powered by Nhost</a>
          </div>
        </div>
      </div>
    `
  },
  'password-reset': {
    subject: 'Reset your password',
    body: `
      <div style="background-color: #f5f5f5; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 560px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px;">
          <h1 style="color: #484848; font-size: 24px;">Reset Password</h1>
          <p style="color: #3c4149;">Use this link to reset your password:</p>
          <a href="\${link}" style="display: block; background-color: #0052cd; color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; text-align: center; margin: 20px 0;">
            Reset Password
          </a>
          <hr style="border: none; border-top: 1px solid #dfe1e4; margin: 20px 0;" />
          <div style="display: flex; align-items: center;">
            <img src="https://nhost.io/images/emails/icon.png" alt="Nhost Logo" style="width: 20px; height: 20px; margin-right: 10px;" />
            <a href="https://nhost.io" style="color: #b4becc; text-decoration: none;">Powered by Nhost</a>
          </div>
        </div>
      </div>
    `
  },
  'signin-passwordless': {
    subject: 'Secure sign-in link',
    body: `
      <div style="background-color: #f5f5f5; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 560px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px;">
          <h1 style="color: #484848; font-size: 24px;">Magic Link</h1>
          <p style="color: #3c4149;">Use this link to securely sign in:</p>
          <a href="\${link}" style="display: block; background-color: #0052cd; color: white; text-decoration: none; padding: 12px 24px; border-radius: 4px; text-align: center; margin: 20px 0;">
            Sign In
          </a>
          <hr style="border: none; border-top: 1px solid #dfe1e4; margin: 20px 0;" />
          <div style="display: flex; align-items: center;">
            <img src="https://nhost.io/images/emails/icon.png" alt="Nhost Logo" style="width: 20px; height: 20px; margin-right: 10px;" />
            <a href="https://nhost.io" style="color: #b4becc; text-decoration: none;">Powered by Nhost</a>
          </div>
        </div>
      </div>
    `
  },
  'signin-otp': {
    subject: 'One-time password for \${redirectTo}',
    body: `
      <div style="background-color: #f5f5f5; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 560px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px;">
          <h1 style="color: #484848; font-size: 24px;">One-time Password</h1>
          <p style="color: #3c4149;">To sign in to \${redirectTo}, please use the following one-time password:</p>
          <p style="color: #0052cd; font-size: 24px; font-weight: 600; margin: 20px 0;">\${ticket}</p>
          <hr style="border: none; border-top: 1px solid #dfe1e4; margin: 20px 0;" />
          <div style="display: flex; align-items: center;">
            <img src="https://nhost.io/images/emails/icon.png" alt="Nhost Logo" style="width: 20px; height: 20px; margin-right: 10px;" />
            <a href="https://nhost.io" style="color: #b4becc; text-decoration: none;">Powered by Nhost</a>
          </div>
        </div>
      </div>
    `
  }
};

function renderEmails(targetLocale: string) {
  const targetFolder = path.resolve(`./email-templates/${targetLocale}`);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  Object.entries(emailTemplates).forEach(([name, template]) => {
    const templateFolder = path.join(targetFolder, name);
    
    if (!fs.existsSync(templateFolder)) {
      fs.mkdirSync(templateFolder, { recursive: true });
    }

    // Écrire le template HTML
    fs.writeFileSync(
      path.join(templateFolder, 'body.html'),
      template.body.trim()
    );

    // Écrire le sujet
    fs.writeFileSync(
      path.join(templateFolder, 'subject.txt'),
      template.subject
    );
  });
}

// Exécuter le script si appelé directement
const args = process.argv.slice(2);
const locale = args[0];

if (!locale) {
  console.error('Please provide a locale for the emails.');
  process.exit(1);
}

renderEmails(locale);