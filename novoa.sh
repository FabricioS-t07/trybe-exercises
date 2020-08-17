#!/bin/bash

read -p "Quantos arquivos quer criar ? " NOVO
read -p "Qual o nome do arquivo ? " NOME

if [[ $NOVO = ?(+|-)+([0-9]) ]] #essa eu nao entendi só coloquei pra nao dar erro, pra checar se é inteiro
then
    for i in $(seq $NOVO); do
    echo "#!/bin/bash" >"$NOME${i}.sh"
    chmod +x "$NOME${i}.sh"
    done
else
    echo "$NOVO não é um numero inteiro, so posso criar se você me disser um numero xD."
fi
