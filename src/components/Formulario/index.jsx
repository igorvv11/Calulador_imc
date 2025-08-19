import { useState } from "react";

const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const renderizaImc = () => {
    if (altura <= 0 || peso <= 0) {
      return (
        <p className="mt-4 text-red-500 font-medium text-center">
          Preencha altura e peso corretamente.
        </p>
      );
    }

    const imc = peso / (altura ** 2);
    let classificacao = "";

    if (imc < 18.5) classificacao = "abaixo do peso";
    else if (imc < 25) classificacao = "no peso normal";
    else if (imc < 30) classificacao = "com sobrepeso";
    else if (imc < 35) classificacao = "com obesidade grau I";
    else if (imc < 40) classificacao = "com obesidade grau II";
    else classificacao = "com obesidade grau III (mórbida)";

    return (
      <p className="mt-6 text-lg font-semibold text-gray-700 text-center">
        Seu IMC é: <span className="text-blue-600">{imc.toFixed(2)}</span> — Você está{" "}
        <span className="text-green-600">{classificacao}</span>.
      </p>
    );
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            placeholder="Qual é o seu nome?"
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
          />
          <input
            type="number"
            placeholder="Digite a sua altura (em metros)"
            step="0.01"
            onChange={(e) => setAltura(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
          />
          <input
            type="number"
            placeholder="Digite seu peso (em kg)"
            step="0.1"
            onChange={(e) => setPeso(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg shadow-sm"
          />
        </form>

        <div className="text-center">{renderizaImc()}</div>
      </div>
    </div>
  );
};

export default Formulario;
