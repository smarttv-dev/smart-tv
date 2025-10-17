# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Smart TV seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please DO NOT:

- Open a public GitHub issue for security vulnerabilities
- Discuss the vulnerability in public forums, social media, or mailing lists

### Please DO:

**Report security vulnerabilities via email to:**
- Email: [INSERT SECURITY EMAIL HERE]

**Include the following information:**

1. **Type of vulnerability** (e.g., XSS, CSRF, SQL injection, etc.)
2. **Full paths** of source file(s) related to the manifestation of the vulnerability
3. **Location** of the affected source code (tag/branch/commit or direct URL)
4. **Step-by-step instructions** to reproduce the issue
5. **Proof-of-concept or exploit code** (if possible)
6. **Impact** of the vulnerability and how an attacker might exploit it

### What to Expect

1. **Acknowledgment**: You will receive an acknowledgment of your report within 48 hours
2. **Updates**: We will keep you informed of the progress towards resolving the vulnerability
3. **Disclosure**: We will notify you when the vulnerability is fixed
4. **Credit**: We will give credit to security researchers who report valid vulnerabilities (if desired)

### Disclosure Policy

- **Vulnerability is confirmed**: We will work on a fix and prepare a security advisory
- **Fix is ready**: We will release a patch and publish a security advisory
- **Public disclosure**: After the patch is released, we will publicly disclose the vulnerability

We aim to:
- Confirm the vulnerability within 3 business days
- Release a patch within 30 days for critical vulnerabilities
- Release a patch within 90 days for non-critical vulnerabilities

## Security Best Practices for Users

When using Smart TV packages:

### 1. Keep Dependencies Updated

```bash
# Check for outdated packages
pnpm outdated

# Update packages
pnpm update
```

### 2. Validate Content Sources

When using the player package, ensure content sources are trusted:

```typescript
// ✅ Good - validate source
const isValidSource = (url: string) => {
  const allowedDomains = ['your-cdn.com', 'trusted-source.com'];
  const urlObj = new URL(url);
  return allowedDomains.includes(urlObj.hostname);
};

if (isValidSource(videoUrl)) {
  // Load video
}

// ❌ Bad - load any URL without validation
player.load(userProvidedUrl);
```

### 3. Content Security Policy (CSP)

Implement proper CSP headers when using Smart TV packages:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               media-src 'self' https://trusted-cdn.com; 
               script-src 'self' 'unsafe-eval';">
```

### 4. Sanitize User Input

Always sanitize user input before using it in queries or player metadata:

```typescript
import DOMPurify from 'dompurify';

const sanitizedTitle = DOMPurify.sanitize(userInput);
```

### 5. Secure API Keys

Never expose API keys in client-side code:

```typescript
// ❌ Bad
const API_KEY = 'sk_live_12345...';

// ✅ Good - use environment variables and proxy through backend
const response = await fetch('/api/content', {
  headers: { 'Authorization': 'Bearer <token from backend>' }
});
```

### 6. Audit Dependencies

Regularly audit dependencies for known vulnerabilities:

```bash
pnpm audit
```

## Security Updates

Security updates will be:
- Published in the CHANGELOG.md
- Announced in GitHub Security Advisories
- Tagged with version number following semantic versioning

## Scope

This security policy applies to:
- `@smart-tv/player`
- `@smart-tv/query`
- `create-smart-tv-app`
- All code in the `smart-tv` repository

## Safe Harbor

We support safe harbor for security researchers who:
- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services
- Only interact with accounts they own or with explicit permission from the account holder
- Do not exploit a security issue beyond the minimal amount necessary to prove it exists

## Comments on this Policy

If you have suggestions on how this policy could be improved, please submit a pull request or open an issue.

---

Thank you for helping keep Smart TV and our users safe! 🔒
