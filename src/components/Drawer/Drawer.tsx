import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Drawer = styled(motion(Dialog.Content))`
  background-color: var(--color-secondary);
  border-left: 1px solid var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
  z-index: 2;

  @media ${({ theme }) => theme.queries.mobile} {
    bottom: 0;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }

  &[data-state='open'] {
    animation: slideIn 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slideOut 300ms ease-in;
  }
`;
