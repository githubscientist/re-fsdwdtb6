import jobServices from "../../services/jobServices";

const jobsLoader = async () => {
    try {
        // call a service to fetch the data
        const response = await jobServices.getJobs();

        // return the data
        return response.data;
    } catch (error) {
        return null;
    }
}

export default jobsLoader;