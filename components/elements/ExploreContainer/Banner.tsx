import { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './ExploreContainerBanner.module.scss'
import type { Item } from '~/pages/api/items'
import Configuration from '~/utils/configuration'

const ExploreContainerBanner: FunctionComponent<ExploreContainerBannerProps> = ({ asset }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__main}>
        <div className={styles.banner__image}>
          <Image
            src={asset.image} 
            alt={asset.title}
            width="250"
            height="375"
            priority
            unoptimized={Configuration.unoptimizedImages}
            loader={Configuration.imagesLoader}
          />
        </div>
      </div>
    </div>
  )
}

interface ExploreContainerBannerProps {
  asset: Item
}

export default ExploreContainerBanner
