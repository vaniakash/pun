import React from 'react';
import styled from 'styled-components';

const Privacy: React.FC = () => {
  return (
    <PrivacyContainer>
      <PageHeader>
        <h1>Privacy Policy</h1>
        <p>Effective Date: January 2024</p>
      </PageHeader>

      <ContentSection>
        <IntroText>
          At PunjikaLens, we value your privacy. This policy explains how we collect, use, and protect your personal information when you visit our website or book our services.
        </IntroText>
        
        <PolicySection>
          <PolicyItem>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Your name, email address, phone number</li>
              <li>Event/shoot details (location, date, time)</li>
              <li>Payment information (only through secure gateways)</li>
              <li>Any photos or media shared with us for editing or reference</li>
            </ul>
          </PolicyItem>

          <PolicyItem>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Confirm bookings and communicate with you</li>
              <li>Deliver photos, videos, and other services</li>
              <li>Improve our website and service quality</li>
              <li>Send occasional updates or promotions (only if you opt in)</li>
            </ul>
          </PolicyItem>

          <PolicyItem>
            <h2>3. Photo & Media Privacy</h2>
            <ul>
              <li>We never share or publish your photos without your permission.</li>
              <li>For portfolio or promotional use (e.g. Instagram, website), we will always ask for consent, unless previously agreed in your contract.</li>
            </ul>
          </PolicyItem>

          <PolicyItem>
            <h2>4. Data Security</h2>
            <ul>
              <li>All personal information is stored securely and only accessed when required.</li>
              <li>We do not sell, rent, or share your personal data with third parties, except to trusted partners (e.g. album printers, video editors) for service delivery.</li>
            </ul>
          </PolicyItem>

          <PolicyItem>
            <h2>5. Cookies</h2>
            <ul>
              <li>Our website may use cookies to improve user experience and analyze traffic.</li>
              <li>You can disable cookies in your browser settings.</li>
            </ul>
          </PolicyItem>

          <PolicyItem>
            <h2>6. Your Rights</h2>
            <p>You can:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Ask us to delete your data after your shoot is complete</li>
              <li>Opt out of future communications or promotions at any time</li>
            </ul>
          </PolicyItem>

          <PolicyItem>
            <h2>7. Policy Changes</h2>
            <ul>
              <li>We may update this Privacy Policy from time to time. All changes will be posted here with an updated "Effective Date".</li>
            </ul>
          </PolicyItem>
        </PolicySection>

        <ContactInfo>
          <h2>8. Contact Us</h2>
          <p>If you have any questions or concerns about our privacy policy, feel free to reach us at:</p>
          <p>📞 +91 8449567084 | ✉️ info@punjikalens.com</p>
        </ContactInfo>
      </ContentSection>
    </PrivacyContainer>
  );
};

const PrivacyContainer = styled.div`
  padding: 120px 0 80px;
  background-color: var(--color-dark);
  min-height: 100vh;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: var(--color-light-gray);
    font-size: 1.1rem;
  }
`;

const ContentSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: var(--color-light-gray);
  text-align: center;
`;

const PolicySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const PolicyItem = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  
  p {
    margin-bottom: 1rem;
    color: var(--color-light-gray);
    line-height: 1.6;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      line-height: 1.6;
      color: var(--color-light-gray);
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-md);
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
    text-align: center;
  }
  
  p {
    color: var(--color-light-gray);
    margin-bottom: 0.5rem;
    text-align: center;
    
    &:last-child {
      font-weight: 500;
      color: var(--color-primary);
    }
  }
`;

export default Privacy; 