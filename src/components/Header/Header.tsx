import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '@/components';
import { useMediaQuery } from '@/hooks';
import { QUERIES } from '@/theme';

const Wrapper = styled.header`
  padding: var(--spacing);
  opacity: 1;
`;

const Nav = styled(motion.nav)`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-shrink: 9999999;
  margin: 0 2rem;

  & > * {
    margin: 0 0.4vw !important; // overrides next/image default margin
  }

  @media ${({ theme }) => theme.queries.mobile} {
    display: none;
  }
`;

export const Header = () => {
  const isMobile = useMediaQuery(QUERIES.mobile);
  return (
    <Wrapper>
      <Nav
        initial={{ y: '-160%', opacity: 0.3 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Link href="https://basement.studio" passHref prefetch={false}>
          <Logo>
            <Image
              src={
                isMobile
                  ? '/images/basement.logotype.small.svg'
                  : '/images/basement.logotype.svg'
              }
              alt="Basement Studio logo"
              layout="fixed"
              height={isMobile ? 40 : 30}
              width={isMobile ? 43 : 192}
            />
          </Logo>
        </Link>
        <Logos>
          <Image
            src="/images/nav1.svg"
            height={24}
            width={24}
            alt="header decorative small logo 1"
          />
          <Image
            src="/images/nav2.svg"
            height={24}
            width={43}
            alt="header decorative small logo 2"
          />
          <Image
            src="/images/nav3.svg"
            height={22}
            width={84}
            alt="header decorative small logo 3"
          />
          <Image
            src="/images/nav4.svg"
            height={24}
            width={43}
            alt="header decorative small logo 4"
          />
          <Image
            src="/images/nav5.svg"
            height={22}
            width={25}
            alt="header decorative small logo 5"
          />
        </Logos>
        <Button as={Dialog.Trigger} title="cart (0)" />
      </Nav>
    </Wrapper>
  );
};
