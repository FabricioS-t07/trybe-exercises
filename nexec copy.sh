#!/bin/bash

read -p "Qual será o nome padrão do arquivo criado: " NOME
read -p "Qual a quantidade de aqrquivos a serem criados: " QT

for ((c=1; c<=$QT; c++))
do
    echo "#!/bin/bash" > "$NOME$c.sh"
    chmod u+x "$NOME$c.sh"
done