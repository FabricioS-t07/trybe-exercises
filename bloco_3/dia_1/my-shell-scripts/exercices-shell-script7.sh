#!/bin/bash
DIRE=$1
if [ -d "$DIRE" ]
then
    FIL=`ls -l $DIRE | wc -l`
    echo "O $DIRE tem $FIL arquivos."
else
    echo "O argumento $DIRE não é um diretório!"
fi