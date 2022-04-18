# cd client

# npm run build

# mv build ../../tunestats_build

# cd ../../tunestats_build

# rm -rf public

# mv build public

git add .

echo 'Enter the commit message:'

read commitMessage

git commit -m "$commitMessage"

git push

git push heroku main