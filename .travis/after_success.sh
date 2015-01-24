#!/bin/sh

echo '---------------------------'
echo '       AFTER SUCCESS       '
echo '           START           '
echo '---------------------------'

echo '---- Checkout orchestra-builds/gh-pages ----'
cd /tmp
git clone --depth=1 --branch=gh-pages https://${GH_OAUTH_TOKEN}@github.com/${GH_USER_NAME}/${GH_PROJECT_NAME} gh-pages 2>&1
cd gh-pages
TARGET=`pwd`/$TRAVIS_COMMIT

echo "---- Create directory $TARGET ----"
mkdir -p $TARGET

for BUILD_DIR in $ORCHESTRA_BUILD/*
do
	BUILD_NAME=`basename $BUILD_DIR`
	ZIP_FILE="$TARGET/$BUILD_NAME.zip"
	echo "---- Create ZIP $ZIP_FILE ----"
	zip -r -q $ZIP_FILE $BUILD_DIR/*
done

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
