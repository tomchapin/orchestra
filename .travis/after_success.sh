#!/bin/sh

echo '---------------------------'
echo '       AFTER SUCCESS       '
echo '           START           '
echo '---------------------------'

echo '---- Checkout orchestra-builds/gh-pages ----'
cd /tmp
git clone --depth=1 --branch=gh-pages https://${GH_OAUTH_TOKEN}@github.com/${GH_USER_NAME}/${GH_PROJECT_NAME} gh-pages 2>&1
cd gh-pages

echo '---- Create directory builds/$TRAVIS_COMMIT ----'
mkdir -p builds/$TRAVIS_COMMIT

echo '---- Copy build ----'
cp $ORCHESTRA_BUILD ./$TRAVIS_COMMIT

echo '---- Set git settings ----'
git config --global user.name $GIT_AUTHOR_NAME
git config --global user.email $GIT_AUTHOR_EMAIL
git config --global push.default matching

echo '---- Add files, commit and push ----'
git add -A
git commit -m "adding build for revision $TRAVIS_COMMIT"
git push https://${GH_OAUTH_TOKEN}@github.com/${GH_USER_NAME}/${GH_PROJECT_NAME} 2>&1

echo '---------------------------'
echo '       AFTER SUCCESS       '
echo '            END            '
echo '---------------------------'
