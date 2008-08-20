#!/bin/bash

cd `dirname $0` || exit

# generates a general.pot
../../../disabled/modules/potx/potx-cli.php
mv general.pot translations/modules-iframe.pot

cd translations/ || exit
for language in 'de' 'da' 'ru' 'ja'; do
    echo "== processing language \"$language\" ..."
    msgmerge -U modules-iframe.$language.pot modules-iframe.pot
done
