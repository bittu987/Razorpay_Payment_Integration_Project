Live at https://bittu987.github.io/Razorpay_Payment_Integration_Project/

This README file provides instructions on integrating Razorpay for accepting donations for handicapped individuals. This integration allows seamless online payment processing
for donors who wish to contribute to the cause of supporting handicapped individuals.

Prerequisites:
1 - Razorpay Account: Ensure you have a Razorpay account. If not, sign up at Razorpay.
2 - Access to Handicap Donation Platform: You should have access to the platform where you want to integrate Razorpay for donation processing.

Integration Steps:
Step 1: Obtain API Keys
> Log in to your Razorpay Dashboard.
> Go to Settings > API Keys.
> Copy the Key ID and Key Secret. You'll need these credentials for API integration.

Step 2: Install Razorpay SDK
If you're using a web application, include the Razorpay SDK by adding the following script tag in your HTML:
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

Step 3: Create Donation Form
> Create a donation form on your website or application where users can enter the donation amount and other necessary details.
Step 4: Initialize Razorpay Payment
> Use Razorpay's API to initiate the payment process when the donation form is submitted. Use the obtained API keys to authenticate.
Example code snippet (JavaScript):

Step 5: Handle Payment Response
> Handle the payment response received from Razorpay's server. You can redirect users to a thank you page or display a confirmation message accordingly.
Security Recommendations:
> Securely store your Razorpay API keys.
> Implement appropriate error handling and validation to ensure a smooth user experience.
> Use HTTPS for all communications to maintain data security.
