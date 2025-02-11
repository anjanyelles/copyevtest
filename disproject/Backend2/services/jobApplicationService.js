const JobApplication = require('../models/jobApplication');

exports.submitApplication = async (data) => {
    const application = new JobApplication(data);
    await application.save();
    return application;
};
