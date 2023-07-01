# Scissors URL Shortener

Scissors is a URL shortener project built with React, TypeScript for the frontend, and Firebase for the backend. It allows you to create short and customized URLs for easy sharing and tracking.

## Features

- Generate short URLs for long web addresses
- Customize the generated URL with a custom alias
- Track the number of clicks on each shortened URL
- View analytics and statistics for your shortened URLs

## Technologies Used

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- Firebase: A platform for building web and mobile applications
- Vercel: A cloud platform for deploying web applications

## Installation

To run the Scissors URL Shortener project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/scissors.git
   ```

2. Navigate to the project directory:

   ```bash
   cd scissors
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to access the application.

## Configuration

Before running the project, make sure to set up the Firebase backend and obtain the necessary configuration values. Update the Firebase configuration in the project accordingly. You can find the Firebase configuration file at `src/firebase/config.ts`.

## Deployment

To deploy the Scissors URL Shortener project on Vercel, follow these steps:

1. Create a Vercel account at [vercel.com](https://vercel.com).

2. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

3. Build the project for production:

   ```bash
   npm run build
   ```

4. Login to Vercel using the CLI:

   ```bash
   vercel login
   ```

5. Deploy the project:

   ```bash
   vercel
   ```

6. Follow the prompts in the CLI to configure and deploy the project on Vercel.

7. Once the deployment is complete, Vercel will provide you with a unique URL for your deployed project.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

## License

This project is not licensed and is also open source

## Acknowledgments

- The Scissors URL Shortener project was inspired by the need for a simple and customizable URL shortening solution.
- Special thanks to the developers and contributors of React, TypeScript, Firebase, and Vercel for their amazing tools and platforms.

## Contact

For any inquiries or questions, feel free to contact us at [dansiecrown@gmail.com](mailto:dansiecrown@gmail.com).
