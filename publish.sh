#!/bin/bash
yarn test
cd dist

echo "patch, minor, or major release? "
read release_type

if [ "$release_type" == "patch" ] ; then
    version=$(npm version patch)
fi
if [ "$release_type" == "minor" ] ; then
    version=$(npm version minor)
fi
if [ "$release_type" == "major" ] ; then
    version=$(npm version major)
fi

echo "Are you sure you want to publish $version (yes\no)? "
read yesno

if [ "$yesno" == "yes" ] ; then
    git push --follow-tags
    npm publish
fi
