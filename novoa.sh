#!/bin/bash

read -p "Quantos quer criar ? " NOVO
read -p "Qual o nome ? " NOME

read -p "Quer criar um diretorio ou um Arquivo [Aa > arquivo] [Dd > diretorio]? " ESCOLHA
    case $ESCOLHA in
        [Aa]* ) if [[ $NOVO = ?(+|-)+([0-9]) ]] #essa eu nao entendi só coloquei pra nao dar erro, pra checar se é inteiro
                then
                    for i in $(seq $NOVO); do
                    echo "#!/bin/bash" >"$NOME${i}.sh"
                    chmod +x "$NOME${i}.sh"
                    done
                else
                    echo "$NOVO não é um numero inteiro, so posso criar se você me disser um numero xD."
                fi
                exit;;
        [Dd]* ) if [[ $NOVO = ?(+|-)+([0-9]) ]] #essa eu nao entendi só coloquei pra nao dar erro, pra checar se é inteiro
                then
                    for i in $(seq $NOVO); do
                    mkdir "$NOME${i}"
                    done
                else
                    echo "$NOVO não é um numero inteiro, so posso criar se você me disser um numero xD."
                fi
                exit;; 
        * ) echo "Por Favor responda Aa ou Dd"
    esac

