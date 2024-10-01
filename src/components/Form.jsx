import React, { useState } from 'react'; // Import useState from React
import "./Form.css"

function Formation() {
  const [email, setEmail] = useState(''); // Now useState will work properly

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submit logic here
    console.log(`Email submitted: ${email}`);
  };

  return (
    <div className="form-25-main py-5">
      <div className="overlay"></div>
      <div className="container py-lg-5 bgoverlayEffect">
        <div className="forms-25-info">
          <span className="sub-title-1">Let's Stay In Touch</span>
          <h3 className="hny-title two">Sign Up for 25% Discount</h3>
          <p>
            Want to get an instant discount for your next tour? Leave your email and sign up for our
            newsletter with 25% off all our offers.
          </p>

          <form onSubmit={handleSubmit} className="signin-form mt-4 mb-2">
            <div className="forms-gds">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn">Submit</button>
            </div>
            <p className="action-link">
              Subscribe to our free weekly newsletter for new update releases (no spam)
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formation;
