#!/bin/sh

echo '---------------------------'
echo '          PACKAGE          '
echo '           START           '
echo '---------------------------'

node lib/buildNodeWebkitApp.js

echo '---------------------------'
echo '          PACKAGE          '
echo '            END            '
echo '---------------------------'
