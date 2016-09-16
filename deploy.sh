cd build
git init

git config user.name "Yev Dyko"
git config user.email "evgeny.dyko@gmail.com"

git add .
git commit -m "Deploy to GitHub Pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
