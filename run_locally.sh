# Start docs server
npm start

# Open docs in web browser
URL="localhost:3000"
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  open "$URL"
elif [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "msys" ]]; then
  # Windows
  start "$URL"
fi