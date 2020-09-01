let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info["recorrente"] = "Sim";

info.personagem = info.personagem + " e " + "Tio Patinhas";
info.origem = info.origem + " e " + "Christmas on Bear Mountain, Dell's Four Color Comics #178";
info.nota = info.nota + " e " + "O último MacPatinhas";
info.recorrente = info.recorrente + " e " + "Sim";

if(info.recorrente === "Sim e Sim"){
  info.recorrente = "Ambos Recorrentes";
}


console.log(info);
