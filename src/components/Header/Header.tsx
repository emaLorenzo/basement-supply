import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '@/components';
import { useMediaQuery } from '@/hooks';
import { QUERIES } from '@/theme';

const Wrapper = styled(motion.header)`
  padding: var(--spacing);
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
  align-items: center;
  flex-shrink: 9999999;
  margin: 0 2rem;
  gap: 0.4vw;

  @media ${({ theme }) => theme.queries.tablet} {
    display: none;
  }

  & > div {
    &:nth-child(1) {
      height: 24px;
      width: 24px;
    }
    &:nth-child(2) {
      height: 24px;
      width: 43px;
    }
    &:nth-child(3) {
      height: 22px;
      width: 84px;
    }
    &:nth-child(4) {
      height: 24px;
      width: 43px;
    }
    &:nth-child(5) {
      height: 22px;
      width: 25px;
    }
  }
`;

export const Header = () => {
  const isMobile = useMediaQuery(QUERIES.mobile);
  return (
    <Wrapper
    // initial={{ y: '-100%', opacity: 0 }}
    // animate={{ y: '0%', opacity: 1 }}
    // transition={{ duration: 1, delay: 0.7 }}
    >
      <Nav>
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
          <div>
            <Image
              src="/images/nav1.png"
              height={24}
              width={24}
              layout="responsive"
              alt="header decorative small logo 1"
            />
          </div>
          <div>
            <Image
              src="/images/nav2.png"
              height={24}
              width={43}
              layout="responsive"
              alt="header decorative small logo 2"
            />
          </div>
          <div>
            <Image
              src="/images/nav3.png"
              height={22}
              width={84}
              layout="responsive"
              alt="header decorative small logo 3"
            />
          </div>
          <div>
            <Image
              src="/images/nav4.png"
              height={24}
              width={43}
              layout="responsive"
              alt="header decorative small logo 4"
            />
          </div>
          <div>
            <Image
              src="/images/nav5.png"
              height={22}
              width={25}
              layout="responsive"
              alt="header decorative small logo 5"
            />
          </div>
        </Logos>
        <Button as={Dialog.Trigger} title="cart (0)" />
      </Nav>
    </Wrapper>
  );
};
