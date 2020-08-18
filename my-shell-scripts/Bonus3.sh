#!/bin/bash
#Eu sou Tryber e...
for i in $(ls *.png)
do
    mv $i $(date +%F-$i) 
done