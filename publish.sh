#!/bin/bash

set -eux -o pipefail

ssh fluffyco.in "mkdir -p /var/www/html/test"
scp -r ./* fluffyco.in:/var/www/html/test/
