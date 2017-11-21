#!/bin/bash
n=1
environment=${!n}

if [ "$environment" == "production" ] ; then
    echo 'starting production environment serving dist folder'
    yarn start-dist --reset-cache
else
    echo 'starting development environment serving src folder'
    yarn start --reset-cache
fi