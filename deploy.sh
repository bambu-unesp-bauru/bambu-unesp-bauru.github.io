#!/usr/bin/env sh

# abort on errors
set -e

npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/bambu-unesp-bauru/bambu-unesp-bauru.github.io.git master

cd -