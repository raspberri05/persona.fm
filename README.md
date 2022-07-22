# tunestats
An app powered by the Spotify API that shows your your top songs, artists, and recently played songs.

## Running Tunestats Locally
1. Fork this repository and clone it via Github Desktop or the command line
2. run ```npm install``` in the ```client/``` and the ```server/``` subdirectories
3. Go to the [Spotify Developer Website](https://developer.spotify.com/dashboard/) and create a new app, giving it a name and description
4. Go to the ```server/``` directory and create a file called ```config.json```
5. In your ```config.json``` file, copy and paste the below code, replacing ```put_client_id_here``` and ```put_client_secret_here``` with your client_id and client_secret, both which you can find in on your app page in Spotify Developer

```
{
"client_id": "put_client_id_here",
"client_secret": "put_client_secret_here"
}
```

6. run ```npm start``` in the ```client/``` and ```server/``` subdirectories
7. In your web browser, Tunestats will locally open at ```localhost:3000```

## Contributing
Coming Soon
