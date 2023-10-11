#!/bin/bash
BUILD_FOLDER=build
if [ ! -d $BUILD_FOLDER ]; then
	mkdir $BUILD_FOLDER
fi
cp -R src/views $BUILD_FOLDER
cp -R src/public $BUILD_FOLDER
cp typescript-2ef4f-firebase-adminsdk-cu8iz-7d282cc69d.json $BUILD_FOLDER
npx tsc
