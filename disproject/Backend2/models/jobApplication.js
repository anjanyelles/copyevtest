const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    primarySkill: { type: String, required: true },
    currentEmployer: { type: String, required: true },
    currentTechnology: { type: String, required: true },
    experience: { type: Number, required: true },
    referredBy: { type: String },
    expectedPay: { type: String },
    relocation: { type: String, required: true },
    passportAvailable: { type: String },
    relevantExperience: { type: String },
    preferredLocation: { type: String },
    contact: { type: String, required: true },
    resume: { type: String },  // path to resume file
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
