import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (

    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/38615751?s=460&u=949117a98ba8f1c2b8c667918a3552cce8eefa56&v=4" alt="Artur Pinheiro" />

        <div>
          <strong>Artur Pinheiro</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mias de 200.000 pessoas já passaram por uma das minhas exploxões.
    </p>

      <footer>
        <p>
          Proço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;