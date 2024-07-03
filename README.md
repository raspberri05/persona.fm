# tunestats

## Getting Started

1. Create ```.env.local``` and add ```NEXT_PUBLIC_LOGIN_URI="http://localhost:3001/login"``` to it

2. Navigate to ```app/api``` and create ```.env```

3. add these to the file

    - ```CLIENT_ID="<client_id>"```

    - ```CLIENT_SECRET="<client_secret>"```

    - ```REDIRECT_URI="http://localhost:3001/callback"```

    - ```CLIENT_URI="http://localhost:3000"```

4. Create a new Spotify developer app and replace ```CLIENT_ID``` and ```CLIENT_SECRET``` with the actual values that you get. Ensure that you have added the correct redirect uris to the app.

5. ```npm install```

6. ```cd app/api && npm install```

7. ```npm run dev```