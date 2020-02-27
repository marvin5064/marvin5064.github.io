#!/usr/bin/env sh

# abort on errors
set -e

rm -rf docs/.vuepress/dist

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:marvin5064/marvin5064.github.io.git master

cd -