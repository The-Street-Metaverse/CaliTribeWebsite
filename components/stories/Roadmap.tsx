import { FunctionComponent } from 'react'
import TimelineContainer from '~/components/elements/TimelineContainer'

const Roadmap: FunctionComponent = () => {
  return (
    <TimelineContainer id="roadmap" title="Roadmap" items={[
      {
        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
        title: ' Early Release  - All Sales',
        content: (<>
          &#183; Whitelist for Gold NFT Certificate Giveway<br />
          &#183; Cultivar Collectives eBook Discount Certificate
        </>)
      },
//      {
//        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
//        title: 'Main Release for 10K Cali Tribe',
//        content: '&#183; Pre-order the Cultivar Collectives eBook'
//      },
//      {
//        image: 'https://lh3.googleusercontent.com/Z6cwjBUqIQWoeA24Iri_D_b8uw_R2LvtJ22ciur9ZyHLRdjs6IkSwmU9JQZO8SkNyNCshZG9DMBVDiPg1B-lhG1tQdmgRUl5j50J-g=w330',
//        title: '1 for 5 Cali Tribe Gold NFT Certificate Program',
//        content: 'For every 5 Cultivar NFT sales to each individual, the tribe will air drop 1 24K Gold NFT Certificate.'
//      },
//      {
//        image: 'https://lh3.googleusercontent.com/sfX1s_hV9zcPQMH7NHHB7y041GtarRNYGO6ibZ_oh2SBNvnsBiAwYZxEzA2NiqfcvpTGQAJ6Dg-zwsm3EUwuCyd7haa9W9ZNbkbQ150=w330',
//        title: '6710 Holiday Sales',
//        content: 'Unique Hand Painted NFT designed specially for 5 holders (with their own purchaed NFT'
//      },
      {
        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
        title: '2nd Edition 1000 Sales',
        content: (<> &#183; Early Edition Rarity Cali Tribe Hand Painted Art work Giveaway<br />
        &#183; Main Edition Early Edition Rarity Cali Tribe Hand Painted Art work Giveaway</>)
      },
      {
        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
        title: '3000 sales',
        content: 'Unique 1/1 NFT for Holders'
      },
      {
        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
        title: 'All Cal Tribe Collectables Owners',
        content: 'Private Merch store (merch for members and their cali tribe art work)'
      },
      {
        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
        title: '10000 final sales',
        content: (<>
          Charity donation to animal shelters (Community votes)<br />
        </>)
      }
    ]} />
  )
}

export default Roadmap
