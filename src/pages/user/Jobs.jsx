import { useLoaderData } from "react-router-dom";

const Jobs = () => {

    const jobs = useLoaderData();

    return (
        <div className="container">
            {/* show each of the job as a tailwind styled card */}
            {jobs.map((job) => (
                <div key={job._id} className="bg-white shadow-md rounded p-8 m-4">
                    <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
                    <p className="text-gray-600">{job.description}</p>
                    <p className="text-gray-600">{job.company}</p>

                    <div
                        className="flex items-center mt-4"
                    >
                        <span className="material-symbols-outlined">
                            location_on
                        </span>

                        <span className="text-gray-600">{job.location}</span>
                    </div>

                    <div
                        className="flex items-center mt-4"
                    >
                        <span className="material-symbols-outlined">
                            attach_money
                        </span>

                        <span className="text-gray-600">{job.salary}</span>
                    </div>

                    <div className="mt-4">
                        {job.skills.map((skill) => (
                            <span key={skill} className="bg-gray-200 text-gray-800 text-sm p-2 m-1 rounded">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Jobs;