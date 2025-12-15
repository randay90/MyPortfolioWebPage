#!/bin/bash
# Script to add your professional photo to the portfolio

# Check if a file path is provided
if [ -z "$1" ]; then
  echo "Usage: ./add-photo.sh /path/to/your/photo.jpg"
  echo ""
  echo "Example: ./add-photo.sh ~/Downloads/headshot.jpg"
  echo ""
  echo "Supported formats: .jpg, .jpeg, .png"
  exit 1
fi

# Get the source file
SOURCE_FILE="$1"

# Check if file exists
if [ ! -f "$SOURCE_FILE" ]; then
  echo "Error: File not found - $SOURCE_FILE"
  exit 1
fi

# Get the file extension
FILE_EXT="${SOURCE_FILE##*.}"

# Copy the file to the images folder
DEST_FILE="public/images/profile.${FILE_EXT,,}"
cp "$SOURCE_FILE" "$DEST_FILE"

echo "✓ Photo added successfully!"
echo "  Location: $DEST_FILE"
echo "  The Hero section will now display your professional headshot."
