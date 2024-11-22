import instance from './instance';

const jobServices = {
    getJobs: async () => {
        return await instance.get('/jobs');
    }
}

export default jobServices;