#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Usage: ./test 3"
    exit 1
fi
day=$1
padded=$(printf "%02d" $day)
deno test -A --watch --filter "Day $padded"