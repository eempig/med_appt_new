import React, { useState } from 'react';

function GiveReviews() {
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
        if(!isSubmitted) { // Only open the form if it hasn't been submitted yet.
            setShowForm(true);
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.review && formData.rating > 0) {
            setSubmittedMessage(formData.review);
            setShowWarning(false);
            setIsSubmitted(true);
            setShowForm(false);
        } else {
            setShowWarning(true);
        }
    };

    return (
        <div>
            <h2>Form with Message</h2>
            {!showForm ? (
                <button onClick={handleButtonClick} className={isSubmitted ? "disabled-btn" : ""} disabled={isSubmitted}>
                Open Form
            </button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Give Your Review</h2>
                    {showWarning && <p className="warning">Please fill out all fields.</p>}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="review">Review:</label>
                        <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating:</label>
                        <select name="rating" value={formData.rating} onChange={handleChange}>
                            <option value="0">Select a Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button type="submit" disabled={isSubmitted}>Submit</button>
                </form>
            )}
            {submittedMessage && (
                <div>
                    <h3>Submitted Message:</h3>
                    <p>{submittedMessage}</p>
                </div>
            )}
        </div>
    );
}

export default GiveReviews;
