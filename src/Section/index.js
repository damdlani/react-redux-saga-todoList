import React from "react";
import "./style.css";

const Section = ({title, body, extraContent}) => (
    <section className="todo__list">
      <div className="todo__header">
        <h2 className="todo__title">{title}</h2>                  
        {extraContent}
      </div>
      <div className="todo__tasks todo__empty">
      	{body}
      </div>
    </section>
);

export default Section;