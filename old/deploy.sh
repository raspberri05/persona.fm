cd client

sed 's@http://localhost:3001/login@/login@g' src/components/Login.js > src/components/temp.js

cp src/components/temp.js src/components/Login.js

rm src/components/temp.js

npm run build

mv build ../../tunestats_build

cd ../../tunestats_build

rm -rf public

mv build public

git add .

echo 'Enter the commit message:'

read commitMessage

git commit -m "$commitMessage"

git push

git push heroku main

cd ../tunestats/client

sed 's@/login@http://localhost:3001/login@g' src/components/Login.js > src/components/temp.js

cp src/components/temp.js src/components/Login.js

rm src/components/temp.js


