import React, { useState } from 'react';
import GiveReviews from '../GiveReview/GiveReview';
import './ReviewForm.css';

function ReviewForm() {
    const [showReview, setShowReview] = useState(false);

    const doctors = [
        { id: 1, name: "Dr. John Doe", specialty: "Cardiology" },
        { id: 2, name: "Dr. Jane Smith", specialty: "Dermatology" }
    ];

    const handleFeedbackClick = (doctorId) => {
        setShowReview(true);
    };


    return (
        <div className="review-form-container">
            <h1>Reviews</h1>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>Provide feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <button onClick={() => handleFeedbackClick(doctor.id)}>
                                    Click Here
                                </button>
                            </td>
                            <td>{/* Placeholder for review given, you can fetch this data */}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showReview && (
                <div className="overlay" onClick={() => setShowReview(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <GiveReviews onClose={() => setShowReview(false)} />
                    </div>
                </div>
            )}


        </div>
    );
}

export default ReviewForm;
