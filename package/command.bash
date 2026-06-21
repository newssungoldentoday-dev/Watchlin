#!/bin/bash

# Navigate to the package directory
cd "$(dirname "$0")"

echo "Packing configuration and profile files into package.targz..."

# Create or overwrite package.targz with your interface, profile, and config files
tar -czvf package.targz \
  package_setting.js \
  package_mode.py \
  package_extension.sh \
  command.bash \
  package_details.json \
  package_kids.js \
  package_young.js \
  package_teen.js \
  package_adult.js \
  package_elder.js

echo "----------------------------------------"
echo "Package update complete!"
echo "Verifying contents of package.targz:"
tar -ztvf package.targz
echo "----------------------------------------"
