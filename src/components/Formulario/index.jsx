    import { useState } from "react";

    const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const renderizaImc = () => {
        if (altura <= 0 || peso <= 0) {
        return <p>Preencha altura e peso corretamente.</p>;
        }

        const imc = peso / (altura ** 2);
        let classificacao = "";

        if (imc < 18.5) {
        classificacao = "abaixo do peso";
        } else if (imc < 25) {
        classificacao = "no peso normal";
        } else if (imc < 30) {
        classificacao = "com sobrepeso";
        } else if (imc < 35) {
        classificacao = "com obesidade grau I";
        } else if (imc < 40) {
        classificacao = "com obesidade grau II";
        } else {
        classificacao = "com obesidade grau III (mórbida)";
        }

        return (
        <p>
            Seu IMC é: {imc.toFixed(2)} — Você está {classificacao}.
        </p>
        );
    };

    return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
            type="text"
            placeholder="Qual é o seu nome?"
            />
            <input
            type="number"
            placeholder="Digite a sua altura (em metros)"
            step="0.01"
            onChange={(e) => setAltura(parseFloat(e.target.value))}
            />
            <input
            type="number"
            placeholder="Digite seu peso (em kg)"
            step="0.1"
            onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
        </form>
        {renderizaImc()}
        </>
    );
    };

    export default Formulario;
