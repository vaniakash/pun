import React from 'react';
import styled from 'styled-components';

const Terms: React.FC = () => {
  return (
    <TermsContainer>
      <PageHeader>
        <h1>Terms & Conditions</h1>
        <p>Last Updated: January 2024</p>
      </PageHeader>

      <ContentSection>
        <IntroText>
          Welcome to PunjikaLens. By booking our services or using our website, you agree to the following terms and conditions. Please read them carefully.
        </IntroText>
        
        <TermsSection>
          <TermItem>
            <h2>1. Booking & Payments</h2>
            <ul>
              <li>All bookings require a 50% advance payment to confirm the date.</li>
              <li>The remaining balance must be paid on or before the day of the shoot.</li>
              <li>Payments once made are non-refundable, except under special circumstances at our discretion.</li>
            </ul>
          </TermItem>

          <TermItem>
            <h2>2. Cancellation & Rescheduling</h2>
            <ul>
              <li>Cancellations must be informed at least 7 days prior to the shoot.</li>
              <li>Rescheduling is subject to availability and must be communicated 48 hours in advance.</li>
              <li>Last-minute cancellations may result in a forfeit of the advance payment.</li>
            </ul>
          </TermItem>

          <TermItem>
            <h2>3. Delivery Timeline</h2>
            <ul>
              <li>Edited photos and videos will be delivered within 3 to 5 weeks from the shoot date.</li>
              <li>Urgent delivery requests (less than 10 days) may incur extra charges.</li>
            </ul>
          </TermItem>

          <TermItem>
            <h2>4. Copyright & Usage</h2>
            <ul>
              <li>All photos and videos are copyrighted by PunjikaLens unless otherwise agreed.</li>
              <li>Clients are free to share or print the media for personal use.</li>
              <li>We reserve the right to use selected images for portfolio, website, and social media promotion.</li>
            </ul>
          </TermItem>

          <TermItem>
            <h2>5. Client Cooperation</h2>
            <ul>
              <li>The client must ensure all participants arrive on time and cooperate during the shoot.</li>
              <li>We are not responsible for delays caused by the client or other vendors.</li>
            </ul>
          </TermItem>

          <TermItem>
            <h2>6. Liability</h2>
            <ul>
              <li>While we take great care during all shoots, we are not liable for:
                <ul>
                  <li>Loss of data due to equipment failure or unforeseen circumstances.</li>
                  <li>Any accidents or injuries during the shoot session.</li>
                </ul>
              </li>
            </ul>
          </TermItem>

          <TermItem>
            <h2>7. Changes to Terms</h2>
            <ul>
              <li>PunjikaLens reserves the right to update these Terms & Conditions at any time.</li>
              <li>Continued use of our services constitutes acceptance of the updated terms.</li>
            </ul>
          </TermItem>
        </TermsSection>

        <ContactInfo>
          <p>For any questions about our terms and conditions, please contact us at:</p>
          <p>📞 +91 8449567084 | ✉️ info@punjikalens.com</p>
        </ContactInfo>
      </ContentSection>
    </TermsContainer>
  );
};

const TermsContainer = styled.div`
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

const TermsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const TermItem = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      line-height: 1.6;
      color: var(--color-light-gray);
      
      ul {
        margin-top: 0.8rem;
      }
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-md);
  text-align: center;
  
  p {
    color: var(--color-light-gray);
    margin-bottom: 0.5rem;
    
    &:last-child {
      font-weight: 500;
      color: var(--color-primary);
    }
  }
`;

export default Terms; 