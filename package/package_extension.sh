#!/bin/bash

# package_extension.sh - Deployment and Environment Setup Script
# This script prepares the environment and extracts the package archive on the server.

echo "Starting package extension setup..."

# Ensure we are working inside the package directory
cd "$(dirname "$0")" || exit 1

echo "Checking for package.tar.gz archive..."
if [ -f "package.tar.gz" ]; then
    echo "Archive found. Verifying integrity..."
    # Test the integrity of the tarball
    if tar -tzf "package.tar.gz" > /dev/null; then
        echo "Tarball integrity valid. Proceeding..."
    else
        echo "Error: package.tar.gz is corrupted or invalid." >&2
        exit 1
    fi
else
    echo "Warning: package.tar.gz does not exist in the current directory." >&2
fi

# Example task: Setting up permissions for shell/bash execution
chmod +x command.bash

echo "Package extension setup completed successfully."
