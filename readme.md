[![DeepSource](https://app.deepsource.com/gh/raspberri05/persona.fm.svg/?label=active+issues&show_trend=true&token=9p4-QUwgsSV4p8YHA1UdV-hH)](https://app.deepsource.com/gh/raspberri05/persona.fm/)

[Figma Designs](https://www.figma.com/design/LLVawiL7F4SP9rlDuyGAtH/persona.fm?node-id=0-1&t=xhFhQpHwxTzcHNZl-1)

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
2. Find your database connection string, Supabase url, and Supabase anon key

#### Setting up OpenAI API

Go to [OpenAI](https://platform.openai.com/apps) and create a new project api key. If you do not have an openai account with api credit to use, please open an issue to get access to a temporary key

#### Setting up Google OAuth

1. Follow the instructions in the Application Code Configuration section of [this article](https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=server#application-code-configuration)

#### Setting up environment variables

1. Create `.env` at the root of the repository
2. Add the following variables to `.env`

```bash
# make sure to replace the password placeholder of the databse url value copied from Supabase with your actual password for the database

DATABASE_URL=your_supabase_db_connection_url
LFM_API_KEY=your_last_fm_api_key
URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
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

### Project Tools

-   Next JS
-   Last FM API
-   Supabase
-   PostgreSQL
-   Drizzle ORM
-   Open AI API
-   Google OAuth

### Development Tools

-   Prettier
-   Deepsource
-   Code QL
-   Git Guardian
-   Visual Studio Code
-   Github Copilot

### CI/CD

-   Github Actions
-   Vercel Deploy
