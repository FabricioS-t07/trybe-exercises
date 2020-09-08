#!/bin/bash
#Eu sou Tryber e...
#"Vou ter muito sucesso na programação!"
for i in $(ls *.png)
do
    mv $i $(date +%F-$i) 
done