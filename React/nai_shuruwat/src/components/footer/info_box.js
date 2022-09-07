import React from 'react';
import './footer.css';

export default function Infobox(props) {
  return (
    <>
    <div class="first">
      <h3>{props.specialisation}</h3>
      {/* <img src="IMG-20211217-WA0002.jpg" alt=""> */}
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <p>{props.number}</p>
      <a href="mailto-anupamjhabbl@gmail.com">{props.email}</a>

    </div>
    </>
  )
}
