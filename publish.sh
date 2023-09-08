#!/bin/bash

set -eux -o pipefail

ssh fluffyco.in "rm -rf /var/www/html/test; mkdir -p /var/www/html/test"
scp -r $(ls ./* | grep -v "$(basename "${0}")") fluffyco.in:/var/www/html/test/
