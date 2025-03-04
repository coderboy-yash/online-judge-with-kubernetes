#!/bin/sh

while true; do
    kubectl get hpa 
    echo ""  # Print a new line for readability
    sleep 0.001  # 1 millisecond delay
done
