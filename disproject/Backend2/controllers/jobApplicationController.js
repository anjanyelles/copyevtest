const jobApplicationService = require('../services/jobApplicationService');

exports.submitJobApplication = async (req, res) => {
    try {
        const applicationData = req.body;
        const application = await jobApplicationService.submitApplication(applicationData);
        res.status(201).json({ message: 'Application submitted successfully', data: application });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
