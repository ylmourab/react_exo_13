import React, { Component } from 'react'
import Article from './components/Article'

export class App extends Component {
  render() {
    return (
      <div>
        <table>
          <td>
            <Article titre="Naruto" texte="Rasengan" auteur="Kishimoto"></Article>
          </td>
          <td>
            <Article titre="Dragon ball Z" texte="Kamehameha" auteur="Toriyama"></Article>
          </td>
          <td>
            <Article titre="One piece" texte="GumGum" auteur="Edo"></Article>
          </td>
          <td>
            <Article titre="SNK" texte="les murs" auteur="isayama"></Article>
          </td>
        </table>
        
      </div>
    )
  }
}

export default App

