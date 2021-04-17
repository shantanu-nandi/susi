#!/bin/bash

for lang in en bn fr
do
    ng build --output-path=dist/$lang \
             --aot=true \
             --baseHref=/susi/$lang/ \
             --prod=true \
             --i18n-file=src/locale/messages.$lang.xlf \
             --i18n-format=xlf \
             --i18n-locale=$lang; \
done