import React from 'react';

import { Container, Images, Summary } from './styles';

import Logo from '@/assets/logo.svg';
import Kid from '@/assets/kid.svg';

export default function Header() {
  return (
    <Container>
      <Images>
        <img src={Logo} alt="logo" />
        <img src={Kid} alt="kid" />
      </Images>

      <Summary>
        <div className="my-person mb-2">
          <span>Hi, i am:</span>
          <span>André &apos;Dezzy&apos; Victor Carvalho Viana</span>
        </div>

        <div className="about-me">
          <span>
            Junior FullStack Developer
            <span role="img" aria-label="emoji">
              💻📱🔎
            </span>
          </span>

          <span>
            I&apos;m 16 years old
            <span role="img" aria-label="emoji">
              👶
            </span>
          </span>
        </div>
      </Summary>
    </Container>
  );
}
