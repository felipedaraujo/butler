const UninstallPage = () => {
  return (
    <div className="min-h-screen bg-gray-50  text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">Help Us Improve</h1>
        <div className="content grid md:grid-cols-2 gap-8">
          {/* Video Section */}
          <div className="video flex flex-col items-center">
            <iframe
              className="w-full max-w-xl h-72 md:h-96 rounded-lg shadow-md"
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen
              src="https://www.youtube.com/embed/JYY3bJdUf0Y"
            ></iframe>
            <a
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
              href="https://chrome.google.com/webstore/detail/leapfrog-for-linkedin/cebjkdeabhiafpmbhjlbnpkpclomjgko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reinstall Extension
            </a>
          </div>

          {/* Form Section */}
          <div className="form">
            <iframe
              className="w-full h-96 md:h-[920px] rounded-lg shadow-md"
              src="https://airtable.com/embed/appQ4G0w9vDg7BhyZ/shrmnD5wtFEUaL9cW?backgroundColor=green"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UninstallPage
