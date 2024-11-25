import { useState } from 'react'

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState('threeMonths')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden flex flex-col sm:flex-row min-h-[580px]">
        {/* Left Section */}
        <div className="bg-primary text-white p-10 sm:w-1/2 flex justify-center flex-col">
          <h1 className="text-3xl font-semibold mb-8">🎉 🎉 🎉</h1>
          <p className="mb-8 text-2xl font-light">
            Join <span className="font-bold">Premium</span> and find
            international job opportunities faster!
          </p>
          <ul className="space-y-4 text-xl mb-8">
            <li className="flex items-center">
              <span className="mr-2">✔</span>{' '}
              <span>
                <strong>Unlimited</strong> tagged jobs
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span>{' '}
              <span>Block unwanted companies</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span>{' '}
              <span>
                Find international jobs <strong>4.2x</strong> faster
              </span>
            </li>
          </ul>
          <div>
            <img src="logo.png" alt="Company Logo" className="h-12" />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 sm:w-1/2 flex justify-center flex-col">
          <div className="flex justify-center mb-4">
            <p className="text-gray-800 text-xs mr-4">
              Used by over
              <br />
              10,829 people
            </p>
            <div className="flex items-center mb-6 space-x-2">
              <img src="users.png" alt="Users avatar" className="h-8" />
            </div>
          </div>

          <div
            className={`border rounded-lg p-4 mb-6 cursor-pointer text-primary ${
              selectedPlan === 'threeMonths' &&
              'bg-secondary border border-primary'
            }`}
            onClick={() => setSelectedPlan('threeMonths')}
          >
            <label className="flex items-center">
              <input
                type="radio"
                name="subscription"
                className="mr-3"
                checked={selectedPlan === 'threeMonths'}
                onChange={() => setSelectedPlan('threeMonths')}
              />
              <div>
                <p className="text-sm">$19.90 billed every 3 months</p>
                <p className="font-bold">Three months</p>
                <p>$6.63 USD/month</p>
              </div>
            </label>
          </div>

          <div
            className={`border rounded-lg p-4 mb-6 cursor-pointer text-primary ${
              selectedPlan === 'oneMonth' &&
              'bg-secondary border border-primary'
            }`}
            onClick={() => setSelectedPlan('oneMonth')}
          >
            <label className="flex items-center">
              <input
                type="radio"
                name="subscription"
                className="mr-3"
                checked={selectedPlan === 'oneMonth'}
                onChange={() => setSelectedPlan('oneMonth')}
              />
              <div>
                <p className="text-sm">billed monthly</p>
                <p className="font-bold">One month</p>
                <p>$8.90 USD/month</p>
              </div>
            </label>
          </div>

          <button className="bg-primary text-white font-bold py-3 px-4 w-full rounded-lg hover:bg-blue-800 transition">
            Continue to Checkout
          </button>
          {/* <button className="mt-4 text-primary w-full font-bold">
            Continue with Free
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Premium
