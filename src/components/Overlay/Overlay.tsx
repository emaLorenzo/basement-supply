import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(motion(Dialog.Overlay))`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  inset: 0;
  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &[data-state='open'] {
    animation: fadeIn 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: fadeOut 300ms ease-in;
  }
`;
