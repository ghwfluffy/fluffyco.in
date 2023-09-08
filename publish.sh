#!/bin/bash

set -eux -o pipefail

cp -v ../fluffycoin/README.md ./readme/

ssh fluffyco.in "rm -rf /var/www/html/test; mkdir -p /var/www/html/test"
GLOBIGNORE=".git:publish.sh:*.swp" scp -r ./* fluffyco.in:/var/www/html/test/
