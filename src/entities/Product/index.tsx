import { FC } from 'react';
import { Product, ProductCardType } from './types';
import { ProductCardSkeleton } from './components/ProductCardSkeleton';
import styles from './index.module.scss';
import { Amount } from '../../shared/ui/Amount/Amount.tsx';
import { Typography } from '../../shared/ui/Typography/Typography.tsx';

export type { Product, ProductCardType };
export { ProductCardSkeleton };

interface Props {
  product: ProductCardType;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <button className={styles.productCard}>
      <div
        className={styles.productImage}
        style={{
          backgroundImage: product.image
            ? `url(/assets/images/productImages/${product.image})`
            : 'none',
        }}
      >
        <div className={styles.brand}>{product.brand}</div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.textContainer}>
          <Typography variant={'p'} className={styles.name}>
            {product.name}
          </Typography>
          <Typography variant={'p'} className={styles.description}>
            {product.description}
          </Typography>
        </div>
        <Amount amount={product.price} />
      </div>
    </button>
  );
};
