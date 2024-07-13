# TimeZone Convertor and Scheduler

Created to simplify global time coordination, this application offers seamless timezone management, conversion, and scheduling. Manage, convert, and organize timezones effortlessly, utilize a slider for quick conversions, and integrate a Date Picker for precise date selections across global locations. Enhance organization with order reversal and personalize your experience with Dark Mode toggling. Streamline international meetings by scheduling Google Meet calls directly from selected timezones.

## Features:

**Timezone Management:**

- Add, reorder, and remove timezones.
- Customize display order with drag-and-drop.

**Time Conversion Slider:**

- Convert times between selected timezones with a slider.

**Date Picker Integration:**

- Select dates with an integrated Date Picker.
- Automatically display times across chosen timezones.

**Order Reversal:**

- Reverse timezone display order with a click.

**Dark Mode Toggle:**

- Switch between Dark and Light themes.

**Google Meet Scheduling:**

- Schedule Google Meet calls from selected timezones.

## Deployment

### Frontend Deployment

The frontend of this project is deployed and accessible at [Timezone Convertor and Scheduler](https://timezone-convertor-and-scheduler.vercel.app/). You can deploy your own instance by following these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Hashal890/timezone-convertor-and-scheduler.git
   cd timezone-convertor-and-scheduler
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Build the Project:**

   ```bash
   npm run build
   ```

4. **Deploy to Vercel:**

   - Install Vercel CLI if not already installed:

     ```bash
     npm install -g vercel
     ```

   - Deploy to Vercel:
     ```bash
     vercel
     ```
   - Follow the prompts to set up your project on Vercel. Once deployed, you will receive a unique URL for your deployment.

### GitHub Deployment

- **Connect GitHub to Vercel:**

  - Log in to Vercel and add your GitHub repository [timezone-convertor-and-scheduler](https://github.com/Hashal890/timezone-convertor-and-scheduler) under the project settings to enable automatic deployments.

- **Deploying Updates from GitHub:**
  - Make changes to your project locally.
  - Commit and push changes to GitHub:
    ```bash
    git add .
    git commit -m "Update project"
    git push origin main
    ```
  - Vercel will automatically detect changes pushed to the main branch on GitHub and redeploy your application.

### Updating Deployed Project

If you initially deployed using Vercel CLI and need to update your deployed instance after making changes:

1. **Navigate to Your Project Directory:**

   ```bash
   cd timezone-convertor-and-scheduler
   ```

2. **Build the Updated Project:**

   ```bash
   npm run build
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```
   - This command will update your deployed instance on Vercel with the latest changes.

Ensure you have Node.js and npm installed and configured on your development machine. Adjust commands based on your specific project setup and deployment needs.

## Getting Started

**First, clone the repository:**

```bash
git clone https://github.com/Hashal890/timezone-convertor-and-scheduler.git
cd timezone-convertor-and-scheduler
```

**Then, install the dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

**Then, run the development server:**

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Technologies used

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React.js](https://react.dev/learn/installation)
- [Moment.js](https://momentjs.com/)
- [React Select](https://www.npmjs.com/package/react-select)
- [React Datepicker](https://www.npmjs.com/package/react-datepicker)
- [Hello Pangea Dnd](https://www.npmjs.com/package/@hello-pangea/dnd)
- [Chakra-UI](https://v2.chakra-ui.com/getting-started)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Vercel](https://vercel.com/)

## Project Demonstration

**Image Preview:**

![home](./src/assets/project-demonstration.gif)

**Video Overview:**

[View Video](https://drive.google.com/file/d/1FHE58HdQP0wHQO9eSHANrUP-xos2DSnY/view)
