const Job = require("../models/jobModel");
const mongoose = require("mongoose");

//GET /jobs

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve jobs" });
    }
};

//POST /jobs

const createJob = async (req, res) => {
    try {
        const newJob = await Job.create({ ...req.body });
        res.status(201).json(newJob);

    } catch (error) {
         res
            .status(400)
            .json({ message: "Failed to create a job", error: error.message });
    }
};

//GET /jobs/:jobId


const getJobById = async (req, res) => {

    const { jobId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "Invalid job ID" });
    }

    try {
        const job = await Job.findById(jobId);
        const limit = parseInt(req.query._limit);
        const jobs = limit 
            ? await Job.find({}).sort({ createdAt: -1 }).limit(limit)
            : await Job.find({}).sort({ createdAt: -1 });
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(404).json({message: "Job not found"});
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve a job" });
    }
};


//PUT //jobs/:jobId

const updateJob = async (req, res) => {

    const { jobId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "Invalid job ID" });
    }
    try {
        const updatedJob = await Job.findOneAndUpdate(
            { _id: jobId },
            { ...req.body },
            { returnDocument: "after" }
        );
        if (updatedJob) {
            res.status(200).json(updatedJob);
        } else {
            res.status(404).json({ message: "Job not found" });
        }

    } catch (error) {
        res.status(500).json({ message: "Failed to update a job" });
    }

}

//DELETE //jobs/:jobId

const deleteJob = async (req, res) => {
    const { jobId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "Invalid job ID" });
    }

    try {
        const deleteJob = await Job.findOneAndDelete({_id: jobId});
        if (deleteJob){
            res.status(204).send();
        } else {
            res.status(404).json({message: "Job not found"});
        }
    } catch {
        res.status(500).json({ message: "Failed to delete a job" });
    }
}; 

module.exports = {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
};