#!/bin/bash

[ -d pkg ] || mkdir pkg

cd src
zip -r ../pkg/httpse-ruleset-tests.xpi * 
cd ..
