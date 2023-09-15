#!/bin/bash
BUILD_FOLDER=build
if [ ! -d $BUILD_FOLDER ]; then
	mkdir $BUILD_FOLDER
fi
cp -R src/views $BUILD_FOLDER
cp -R src/public $BUILD_FOLDER
npx tsc
