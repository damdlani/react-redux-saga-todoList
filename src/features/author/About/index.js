import React from "react";
import profile from "../Images/profile.jpg";
import { Image, Overview, Container, Par, Link } from "./styled";

export const About = () => {
  return (
    <Container>
      <Image src={profile} />

      <Overview>
        <Par>
          Nazywam się <b>Krzysztof Kwieciński</b> i jestem uczestnikiem kursu{" "}
          <Link target="_blank" href="https://youcode.pl/">
            YouCode
          </Link>
          .
        </Par>
        <Par>
          Od marca 2020 uczę się HTML'a, CSS'a oraz języka programowania
          JavaScript. W swoich dotychczasowych projektach korzystałem również z
          bibliotek React i Redux.
        </Par>
        <Par>
          Moim celem jest bardzo dobre opanowanie tych zagadnień oraz, w
          przyszłości, poznanie kolejnych technologii takich jak React&#8209;Native, SQL, testowanie aplikacji oraz język programowania back-end.
          Do nauki motywuje mnie stała możliwość rozwoju, jaką oferuje praca w branży IT.
        </Par>
        <Par>
          Kocham zdobywać nową wiedzę w wielu dziedzinach życia. W wolnych
          chwilach czytam, trenuję z masą ciała i gotuję zgodnie z dietą
          ketogeniczną. Oglądam też sporo filmów.
        </Par>
      </Overview>
    </Container>
  );
};
