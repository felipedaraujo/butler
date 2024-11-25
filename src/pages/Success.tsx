const PaymentSuccess = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-b from-blue-900 to-blue-500">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-white w-full max-w-lg px-4">
          <img src="logo.png" alt="Leapfrog Logo" className="w-12 mb-8" />
          <h1 className="text-4xl font-bold mb-8">Payment successful</h1>
          <p className="text-xl leading-relaxed mb-8">
            You can now return to LinkedIn and make the most of your premium
            experience! <span>💃</span>
          </p>
          <a
            href="https://www.linkedin.com/jobs/collections/recommended"
            className="inline-block bg-white text-blue-900 font-semibold text-lg py-3 px-16 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Go to LinkedIn
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center bg-white text-gray-700">
        <div className="text-center max-w-md px-4">
          <p className="text-lg font-medium mb-8">
            Open Leapfrog's popup anytime to view, update, or cancel your
            membership!
          </p>
          <img
            src="manage-membership.png"
            alt="Manage membership screenshot"
            className="w-full max-w-xs md:max-w-none"
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
