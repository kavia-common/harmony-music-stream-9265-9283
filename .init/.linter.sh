#!/bin/bash
cd /home/kavia/workspace/code-generation/harmony-music-stream-9265-9283/spotify_clone_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

