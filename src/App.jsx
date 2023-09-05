import { useState } from 'react'

import './App.css'

function App() {


  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState();

  const [resultado, setResultado] = useState(NaN);

  function calculaIMC() {
    const formulaIMC = peso / (altura * altura)
    setResultado(formulaIMC)

    const trs = document.querySelectorAll('.imc-result')

    trs.forEach(tr => {
      tr.classList.remove('muito-abaixo-do-peso', 'abaixo-do-peso', 'peso-normal', 'acima-do-peso', 'obesidade-i', 'obesidade-ii', 'obesidade-iii')

      if (formulaIMC < 17) {
        document.getElementById('abaixo-de-17').classList.add('muito-abaixo-do-peso')
      } else if (formulaIMC >= 17 && formulaIMC < 18.5) {
        document.getElementById('entre-17-e-18-5').classList.add('abaixo-do-peso')
      } else if (formulaIMC >= 18.5 && formulaIMC < 25) {
        document.getElementById('peso-normal').classList.add('peso-normal')
      } else if (formulaIMC >= 25 && formulaIMC < 30) {
        document.getElementById('acima-do-peso').classList.add('acima-do-peso')
      } else if (formulaIMC >= 30 && formulaIMC < 35) {
        document.getElementById('obesidade-i').classList.add('obesidade-i')
      } else if (formulaIMC >= 35 && formulaIMC < 40) {
        document.getElementById('obesidade-ii').classList.add('obesidade-ii')
      } else {
        document.getElementById('obesidade-iii').classList.add('obesidade-iii')
      }
    })
  }

  return (
    <>
      <h1>Calculo de IMC</h1>
      <div className="inline">
        <h2>Seu peso:</h2>
        <input type="number" placeholder="Peso em kg" onBlur={e => setPeso(Number(e.target.value))} />
        <h2>Sua altura:</h2>
        <input type="number" placeholder="Altura em metros" onBlur={e => setAltura(Number(e.target.value))} /> <br />
        <button onClick={calculaIMC}>Calcular</button>
        <h3 resultado={Number(resultado).toFixed(2)}>Seu IMC: {resultado.toFixed(2)}</h3>
      </div>
      <div className="inline">
        <table>
          <thead>
            <tr>
              <th>Resultado</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr id="abaixo-de-17" class="imc-result">
              <td>Abaixo de 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr id="entre-17-e-18-5" class="imc-result">
              <td>Entre 17 e 18.5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr id="peso-normal" class="imc-result">
              <td>Entre 18.5 e 25</td>
              <td>Peso normal</td>
            </tr>
            <tr id="acima-do-peso" class="imc-result">
              <td>Entre 25 e 30</td>
              <td>Acima do peso</td>
            </tr>
            <tr id="obesidade-i" class="imc-result">
              <td>Entre 30 e 35</td>
              <td>Obesidade I</td>
            </tr>
            <tr id="obesidade-ii" class="imc-result">
              <td>Entre 35 e 40</td>
              <td>Obesidade II</td>
            </tr>
            <tr id="obesidade-iii" class="imc-result">
              <td>Acima de 40</td>
              <td>Obesidade III</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
