#!/bin/bash
for i in $(ls *.png)
do
    mv $i $(date +%F-$i)
done