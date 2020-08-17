#!/bin/bash
for i in $(ls *.png)
do
    mv $i $(date +%Y-%m-%d-$i)
done