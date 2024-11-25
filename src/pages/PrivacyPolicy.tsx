const PrivacyPolicy = () => {
  return (
    <div className="font-sans m-6 py-20 max-w-[960px] mx-auto my-0">
      <h1 className="text-2xl font-bold text-center mb-12">
        Privacy Policy for International Jobs by Leapfrog Chrome Extension
      </h1>
      <div className="policy-section mb-6">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          <strong>Name and Email Address:</strong> We collect the name and email
          address through LinkedIn authentication when setting up the Extension.
          This information is used to personalize your experience and to send
          you important notifications related to the Extension.
        </p>
      </div>

      <div className="policy-section mb-6">
        <h2 className="text-xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect in the following ways:
        </p>
        <p className="mb-4">
          <strong>To Provide the Service:</strong> We use your name and email
          address to provide you with personalized services and to send you
          important notifications about the Extension.
        </p>
        <p className="mb-4">
          <strong>To Improve Our Service:</strong> We may use aggregated,
          anonymized data to analyze the usage patterns of the Extension. This
          helps us improve the functionality and user experience of the
          Extension.
        </p>
      </div>

      <div className="policy-section mb-6">
        <h2 className="text-xl font-semibold mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties. We may share your information:
        </p>
        <p className="mb-4">
          <strong>With Your Consent:</strong> We may share your information with
          third parties if you give us consent to do so.
        </p>
        <p className="mb-4">
          <strong>For Legal Purposes:</strong> We may disclose your information
          where we are legally required to do so in order to comply with
          applicable law, governmental requests, a judicial proceeding, court
          order, or legal process.
        </p>
      </div>

      <div className="policy-section mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
        <p className="mb-4">
          You can review and edit your personal information within the
          Extension. If you wish to delete your account and personal data
          entirely, please contact us at{' '}
          <a
            href="mailto:contact@leapfrog.works"
            className="text-blue-500 underline"
          >
            contact@leapfrog.works
          </a>{' '}
          with your request.
        </p>
      </div>

      <div className="policy-section mb-6">
        <h2 className="text-xl font-semibold mb-4">Security</h2>
        <p className="mb-4">
          We take reasonable measures to help protect your personal information
          from unauthorized access, alteration, or disclosure.
        </p>
      </div>

      <div className="policy-section mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this privacy policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons.
        </p>
      </div>

      <div className="policy-section contact-info">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our privacy practices,
          please contact us at{' '}
          <a
            href="mailto:contact@leapfrog.works"
            className="text-blue-500 underline"
          >
            contact@leapfrog.works
          </a>
          .
        </p>
        <p className="text-sm text-gray-600">
          This Privacy Policy was last updated on October 9th, 2023.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
