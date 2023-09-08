#!/bin/bash

set -eux -o pipefail

cp -v ../fluffycoin/README.md ./readme/

ssh fluffyco.in "rm -rf /var/www/html/*"
scp -r ./* fluffyco.in:/var/www/html/
ssh fluffyco.in "rm -f /var/www/html/publish.sh"
