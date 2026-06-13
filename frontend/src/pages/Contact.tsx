import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <main className="page-container">
      <div className="workspace-intro">
        <div>
          <p className="eyebrow">Get in Touch</p>
          <h2>We'd Love to Hear From You</h2>
          <p>
            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </div>

      <div className="workspace-grid" style={{ marginTop: '20px' }}>
        <div className="setup-panel">
          <div className="panel-heading">
            <h3>Contact Information</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail className="text-primary" />
              <span>hello@umlestimator.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone className="text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin className="text-primary" />
              <span>123 Innovation Drive, Tech City, CA 94000</span>
            </div>
          </div>
        </div>

        <form className="setup-panel" onSubmit={(e) => e.preventDefault()}>
           <div className="panel-heading">
            <h3>Send us a Message</h3>
          </div>
          <div className="rate-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="How can we help?" style={{ width: '100%', padding: '11px 12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit' }} required></textarea>
            </div>
            <button className="btn btn--primary" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </main>
  );
}
