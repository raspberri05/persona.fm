[![DeepSource](https://app.deepsource.com/gh/raspberri05/persona.fm.svg/?label=active+issues&show_trend=true&token=9p4-QUwgsSV4p8YHA1UdV-hH)](https://app.deepsource.com/gh/raspberri05/persona.fm/)

# persona.fm

Your last.fm persona

## About

Please check out our [wiki](https://github.com/raspberri05/persona.fm/wiki) to learn more about Persona FM and to get help if you have any issues

## Getting Started

### Setting up this project for local development

_This project is being developed on Node version 20.17.0. other node versions may work but there is no guarantee. If you need to manage multiple node versions, we reccomend using [Volta](https://volta.sh)_

#### Getting a last.fm api key

Go to the offical last.fm api website and create an API account [here](https://www.last.fm/api/account/create), and take note of the api key and shared secret

#### Provisioning a Supabase PostgreSQL Database

1. Create a new [Supabase](https://supabase.com/) project
2. Find your database connection string

#### Setting up Gemini AI API

Go to [Google Gemini AI Studio](https://ai.google.dev/aistudio) and create a new api key

#### Setting up environment variables

1. Create `.env` at the root of the repository
2. Add the following variables to `.env`

```bash
DATABASE_URL=your_supabase_db_connection_url # make sure to replace the password placeholder with your actual password
LFM_API_KEY=your_last_fm_api_key
LFM_SECRET=your_last_fm_shared_secret
GEMINI=your_gemini_api_key
URL=http://localhost:3000
```

#### Additional setup

```bash
npm install
```

#### Running the project

```bash
npm run dev
```

_The dev server will automatically reload if changes are made. You may need to manually restart the server upon changes to any configuration files._

## Project Structure

[[Project Structure Diagram]]

### Project Tools

-   Next JS
-   Last FM API
-   Supabase
-   PostgreSQL
-   Drizzle ORM
-   Gemini AI

### Development Tools

-   Prettier
-   Deepsource
-   Code QL
-   Git Guardian
-   Visual Studio Code
-   Github Copilot

### Deploying

Github Actions is used to continously deploy this web application to Vercel
