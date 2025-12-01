import { useNavigate } from "react-router-dom";
import missão1 from "../assets/missão1.jpg";
import missão2 from "../assets/missão2.jpg";
import "../App.css";

export default function OutraPagina() {
  const navigate = useNavigate();

  const designers = [
    "Ruan Henrique Pereira Da Silva",
    "Júlia Tamires de Santana Gomes",
    "Suellen Vitória Oliveira da Silva",
    "Kayo Kauan Geronimo da Silva",
    "Daniel Silva do Nascimento"
  ];

  const representantesTi = [
    "Guilherme Gabriel",
    "Pedro Renan",
     "Alisson santana",
     "Lucas Carson",
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      <h1>Informações do jogo e créditos:</h1>


      <div
        style={{
          fontSize: "1.2rem",
          color: "white",
          maxWidth: "700px",
          margin: "20px auto",
          textAlign: "left",
          lineHeight: "1.6"
        }}
      >
        <p>
          Em uma pequena floresta mágica existe uma vila de seres encantados cuja sobrevivência depende
          do equilíbrio da natureza. Com o tempo, a floresta começa a morrer devido às ações irresponsáveis
          dos humanos que vivem por perto: desmatamento, poluição e uso excessivo da terra.
        </p>

        <p>
          Entre os moradores da vila, Lya, uma jovem que cresceu ouvindo os ensinamentos de sua avó,
          percebe a gravidade da situação e decide agir para salvar a floresta e os seres que nela habitam.
          Determinada, ela inicia uma jornada para restaurar o equilíbrio e reencontrar a vila encantada.
        </p>

        <p>
          Ao longo da aventura, Lya conversa com moradores, descobre pistas da destruição e recebe artefatos
          mágicos que fortalecem sua ligação com a natureza. Sua missão a leva até as Montanhas dos Espíritos,
          onde recebe bênçãos e aprende habilidades importantes.
        </p>

        <p>
          Depois, ela vai até a vila humana para conscientizar as pessoas sobre práticas sustentáveis,
          enfrentando resistência de líderes influenciados por indústrias destrutivas. Com paciência, mostra
          soluções e inspira mudanças.
        </p>

        <p>
          No entanto, o desequilíbrio ambiental corrompeu um antigo guardião da floresta, que se torna o
          desafio final da jovem. Lya o enfrenta em uma batalha física e espiritual, buscando purificar sua
          essência ao invés de destruí-lo.
        </p>

        <p>
          Após essa vitória, a floresta renasce: rios voltam a fluir, animais retornam e o equilíbrio é
          restaurado. Lya recebe o título de Guardiã da Floresta.
        </p>
      </div>

    
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "800px",
          margin: "40px auto",
          color: "white",
          fontSize: "1.2rem",
          lineHeight: "1.5",
          gap: "40px"
        }}
      >
        
        <div style={{ textAlign: "left", width: "50%" }}>
          <strong>Programadores:</strong>
          {representantesTi.map((nome, i) => (
            <div key={i}>{nome}</div>
          ))}
        </div>

        <div style={{ textAlign: "right", width: "50%" }}>
          <strong>Designers:</strong>
          {designers.map((nome, i) => (
            <div key={i}>{nome}</div>
          ))}
        </div>
      </div>

  
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >
        <img
          src={missão1}
          alt="foto1"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px"
          }}
        />

        <img
          src={missão2}
          alt="foto2"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px"
          }}
        />
      </div>

      
      <button
        className="botao-neon"
        style={{ marginTop: "50px" }}
        onClick={() => navigate("/")}
      >
        Voltar para o início
      </button>
    </div>
  );
}
