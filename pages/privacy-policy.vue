<template>
    <Navbar />
    <div class="privacy-policy">
    <div class="container">
      <div class="policy-content">
        <h1>Privacy Policy</h1>
        
        <div class="policy-sections">
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to Figtree Studios' Privacy Policy. At Figtree Studios, we are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, 
              and protect your data when you use our digital media production services, including our newsletter and 
              Jesus Daily Devotional scheduling system.
            </p>
            <p>Last Updated: January 3, 2025</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect limited personal information, specifically:</p>
            <ul>
              <li>Email addresses for newsletter subscriptions</li>
              <li>Names and email addresses for the Jesus Daily Devotional scheduling system</li>
              <li>Basic analytics data about website usage (through privacy-respecting analytics tools)</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>Your information is used exclusively for:</p>
            <ul>
              <li>Sending our newsletter to subscribed users</li>
              <li>Managing and delivering Daily Devotional content</li>
              <li>Improving our website and services</li>
              <li>Responding to your inquiries or requests</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We do not share, sell, rent, or trade your personal information with third parties. Your data is kept strictly 
              confidential and is only used for the purposes stated in this policy.
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Object to the processing of your personal data</li>
            </ul>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              We use essential cookies to ensure the proper functioning of our website. These cookies do not track 
              personal information and are used solely for technical purposes.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div class="contact-info">
              <p>Figtree Studios</p>
              <p>Email: hello@figtreestudios.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
    <Footer />
  </template>
  
  <script setup>
  useHead({
    title: 'Privacy Policy - Figtree Studios',
    meta: [
      {
        name: 'description',
        content: 'Privacy Policy for Figtree Studios - Learn how we protect and handle your personal information.'
      }
    ]
  })
  </script>

<style scoped>
.privacy-policy {
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem 1rem;
}

.container {
  max-width: 64rem;
  margin: 0 auto;
}

.policy-content {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

@media (min-width: 640px) {
  .policy-content {
    padding: 3rem;
  }
  
  .privacy-policy {
    padding: 3rem 1.5rem;
  }
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.policy-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #4b5563;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Poppins';
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.contact-info {
  padding-left: 1.5rem;
}

/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Typography */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.125rem;
  }

  .policy-content {
    padding: 1.5rem;
  }
}

/* Print styles */
@media print {
  .privacy-policy {
    background-color: white;
    padding: 0;
  }

  .policy-content {
    box-shadow: none;
    padding: 0;
  }
}
</style>