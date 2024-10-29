import { useEffect, useState } from "react";
import jobServices from "../services/jobServices";

const Home = () => {

    const [title, setTitle] = useState("");
    const [jobs, setJobs] = useState([]);

    const searchJobs = (e) => {
        e.preventDefault();
    }

    async function getJobs() {
        try {
            const data = await jobServices.getAllJobs();
            setJobs(data.data);
        } catch (error) {
            alert("Failed to fetch jobs");
        }
    }

    useEffect(() => {
        getJobs();
    }, []);

    useEffect(() => {
        console.log(jobs);
    }, [jobs]);

    return (
        <div className="container flex flex-col justify-center items-center  gap-4 h-screen">
            <h1
                className="text-4xl font-bold"
            >Find Your Dream Job Now</h1>
            <h3
                className="text-lg font-semibold"
            >40+ jobs for you to explore</h3>
            <form className="w-3/4 flex flex-col gap-4"
                onSubmit={searchJobs}
            >
                <input
                    type="text"
                    placeholder="Enter designation"
                    className="border-2 border-gray-200 p-2 rounded-lg"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg"
                    type="submit"
                >Search</button>
            </form>
        </div>
    )
}

export default Home;