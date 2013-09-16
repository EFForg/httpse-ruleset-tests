#!/bin/bash
APP_NAME=httpse-ruleset-tests
XPI_NAME=$APP_NAME.xpi

[ -d pkg ] || mkdir pkg

cd src
zip -q -r ../pkg/$XPI_NAME * 
cd ..

echo "Package built in pkg/$XPI_NAME"
