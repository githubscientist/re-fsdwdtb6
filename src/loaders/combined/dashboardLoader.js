import jobsLoader from "../units/jobsLoader";

const dashboardLoader = async () => {
    try {
        // use the unit loaders to fetch the data
        const jobs = await jobsLoader();

        // return the data
        return {
            jobs
        };
    } catch (error) {
        return null;
    }
}

export default dashboardLoader;