#!/bin/sh

while true; do
    curl -s http://localhost:30001/
    echo ""  # Print a new line for readability
    sleep 0.001  # 1 millisecond delay
done
