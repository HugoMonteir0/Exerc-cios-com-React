//1 parte - import's
//2 parte - funcao
// 3 parte - export
import './App.css'
import Ola from './components/Ola'
import Saudacao from './components/saudacao'
import Pessoa from './components/Pessoa'
import Exercicio5 from './components/Exercicio5'
import Exerc6 from './components/Exerc6'
import Exerc7 from './components/Exerc7'
import Exerc8 from './components/Exerc8'
import Exerc9 from './components/Exerc9'
import Exerc10 from './components/Exerc10'

function App() {

  return (
    <>
      <Ola nome="Hugo"/>
      <Saudacao condicao={true} />
      <Pessoa />
      <Exercicio5 estudante={false}/>
      <Exerc6 nota = {9}/>
      <Exerc7 temDesconto = {true}/>
      <Exerc8 online = {false}/>
      <Exerc9 nivel = "Iniciante"/>
      <Exerc10 logado = {true}/>
    </>
  )

}
export default App
