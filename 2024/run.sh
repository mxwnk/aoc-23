#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Usage: sh ./run 3"
    exit 1
fi
deno run --watch -A --env-file main.ts $1