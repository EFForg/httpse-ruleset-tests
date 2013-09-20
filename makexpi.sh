#!/bin/bash
APP_NAME=httpse-ruleset-tests
XPI_NAME=$APP_NAME.xpi
PWD=`pwd`

[ -d pkg ] || mkdir pkg

cd src
zip -q -r ../pkg/$XPI_NAME * 
cd ..

echo "Package built in $PWD/pkg/$XPI_NAME"
