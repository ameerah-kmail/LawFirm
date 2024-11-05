import { useState } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '../../api';
import '../RegisterForm/RegisterForm.css';
import Legistai from '../../icons/Legistai';

function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '',phone: '', rating: '', location: '' });
  const router = useRouter();
  const [error, setError] = useState('');
  const [isContinueClicked, setIsContinueClicked] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleContinue = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description || !formData.phone || !formData.rating || !formData.location) {
      setError('Please complete all fields before continuing');
    } else {
      setError('');
      setIsContinueClicked(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description || !formData.phone || !formData.rating || !formData.location) {
      setError('Please complete all fields');
      return;
    }
    setError('');
    const user = await registerUser(formData);
    if (user) {
      router.push(`/profile/${user.id}`);
    }
  };

  return (
    <div className="grey-full-page">
      <div className="user-form">
        <form onSubmit={handleSubmit}>   
          <div className="legistai-title">
            <Legistai />
            <div className="title">Welcome to the Legistai Form</div>
          </div>
          <div className="group-input">
            <div className="grey-input">
              <input name="name" onChange={handleChange} placeholder="Full Name" />
            </div>
            <div className="grey-input">
              <input name="email" type="email" onChange={handleChange} placeholder="Email" />
            </div>
          </div>
          <div className="group-input">
            <div className="grey-input">
              <input name="phone" onChange={handleChange} placeholder="Phone" />
            </div>
            <div className="grey-input">
              <input name="location" onChange={handleChange} placeholder="Location" />
            </div>
          </div>
          <div className="grey-input description-input">
            <textarea name="description" onChange={handleChange} placeholder="Description" />
          </div>
          <div className="grey-input stars">
            <div>Rating</div>
            {/* <input name="rating" onChange={handleChange} placeholder="Rating" /> */}
            <div class="star-rating">
              <input type="radio" id="5-stars" name="rating" value="5" onChange={handleChange} />
              <label for="5-stars" class="star">&#9733;</label>
              <input type="radio" id="4-stars" name="rating" value="4" onChange={handleChange} />
              <label for="4-stars" class="star">&#9733;</label>
              <input type="radio" id="3-stars" name="rating" value="3" onChange={handleChange} />
              <label for="3-stars" class="star">&#9733;</label>
              <input type="radio" id="2-stars" name="rating" value="2" onChange={handleChange} />
              <label for="2-stars" class="star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" onChange={handleChange} />
              <label for="1-star" class="star">&#9733;</label>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <button onClick={handleContinue}>Continue</button>
            </div>
            <div className="button disabled">
           <button type="submit"  disabled={!isContinueClicked}>Register</button>
          </div>
          </div>
          <div className="error">
            {error && <div className="error-massage">{error}</div>}
          </div>    
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;