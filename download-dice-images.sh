#!/bin/bash

# URLs de las imágenes de dados
urls=(
  "https://raw.githubusercontent.com/aleen42/dice/master/dice/1.webp"
  "https://raw.githubusercontent.com/aleen42/dice/master/dice/2.webp"
  "https://raw.githubusercontent.com/aleen42/dice/master/dice/3.webp"
  "https://raw.githubusercontent.com/aleen42/dice/master/dice/4.webp"
  "https://raw.githubusercontent.com/aleen42/dice/master/dice/5.webp"
  "https://raw.githubusercontent.com/aleen42/dice/master/dice/6.webp"
)

# Descargar las imágenes
for i in {0..5}; do
  curl -L -o "public/images/cara${i+1}.webp" "${urls[i]}"
done
