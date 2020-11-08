import React from 'react';
import Container from '../../common/Container';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import Section from '../../common/Section';

export const Author = () => {
    return (
        <Container>
        <Header title="O autorze"/>
        <Section 
          title="Krzysztof Kwieciński"
          body={"Strona w budowie 👷‍♂️"}
        />

        <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
    )
};