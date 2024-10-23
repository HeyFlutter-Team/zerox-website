# Deploy Website using personal access token
GIT_USER=HeyFlutterHQ GIT_PASS=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 yarn deploy

# Open live website in web browser
URL="https://HeyFlutter-Team.github.io/zerox-website/"
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  open "$URL"
elif [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "msys" ]]; then
  # Windows
  start "$URL"
fi