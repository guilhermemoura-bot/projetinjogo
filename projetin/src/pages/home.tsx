import inicio from "../assets/inicio.jpg";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "200px",
          marginTop: "100px",
        }}
      >
        <img
          src={inicio}
          alt="foto1"
          style={{ width: "1000px", borderRadius: "60px" }}
        />
      </div>
      <h1>Lya e o coração da vila encantada</h1>

     <button className="botao-neon" onClick={() => navigate("/outra")}>
 ir para menu
</button>


      <p className="read-the-docs">clica a meu consagrado</p>
    </>
  );
}
