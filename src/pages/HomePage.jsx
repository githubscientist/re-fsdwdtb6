const HomePage = () => {
    return (
        <div className="container mt-5 text-center">
            <h1
                className="text-4xl text-gray-800"
            >Welcome to the Job Portal</h1>
            <h3
                className="text-2xl text-gray-600"
            >Find your dream job!</h3>

            <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                <h2
                    className="text-2xl text-gray-800"
                >
                    You can search for jobs, apply for jobs, and post jobs.
                </h2>
            </div>
        </div>
    )
}

export default HomePage;