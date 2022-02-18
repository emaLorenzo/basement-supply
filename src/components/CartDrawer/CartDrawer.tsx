import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Drawer } from '@/components';

export const CartDrawer = () => {
  return (
    <Drawer>
      <motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.15,
          }}
        >
          <Dialog.Close>Close Dialog</Dialog.Close>
          <h2>your cart</h2>
        </motion.div>
      </motion.div>
    </Drawer>
  );
};
