import { FunctionComponent } from 'react'
import TimelineContainer from '~/components/elements/TimelineContainer'

const Roadmap: FunctionComponent = () => {
  return (
    <TimelineContainer id="roadmap" title="Roadmap" items={[
      {
        image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/master/images/buggy.gif',
        title: ' Early Release  - All Sales',
        content: (<>
          &#183; Whitelist for Gold NFT Certificate Giveway<br />
          &#183; Cultivar Collectives eBook Discount Certificate
        </>)
      },
//      {
//        image: 'https://lh3.googleusercontent.com/o6APZAFIoXG-cY4qXVlImJGuxLqJaDmmE-E3fQVSCk-ZFOonys7bfWMMtjBxW22O-4-g6oOzjHt3IZM02XnjE7-M2dPcvss3EcFpbcM=w330',
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
        image: 'https://lh3.googleusercontent.com/bDUhgMzEZmqsqmxVeTH6TlZvVWARNPVN13Cn8e0S1Hor9NCIhtHxCaPMQgguQ7HxM7OHEFWArdvOUlTH8XJB_Fn1laVL6MR-r8Af=w330',
        title: '2nd Edition 1000 Sales',
        content: (<> &#183; Early Edition Rarity Cali Tribe Hand Painted Art work Giveaway<br />
        &#183; Main Edition Early Edition Rarity Cali Tribe Hand Painted Art work Giveaway</>)
      },
      {
        image: 'https://lh3.googleusercontent.com/zNjBdItP4cMzotosSDNsZm1bySmfc9xdHwwC0EzKKhMwEVVZjhG7PxapSE8yidq7HMNl1B8LbgPj42ZDHi6chH0K3dZPhbm8rB69Vg=w330',
        title: '3000 sales',
        content: 'Unique 1/1 NFT for Holders'
      },
      {
        image: 'https://lh3.googleusercontent.com/cUabcEQS1yFxENEZpb4FvoBfmHFQm3zTwHLL1rU07acT7CZ1hyzKrsr0ulxTIUUzmIz7NWviRuJVISIxIX6roS7Rk3CcJmxD9dgihg=w330',
        title: 'All Cal Tribe Collectables Owners',
        content: 'Private Merch store (merch for members and their cali tribe art work)'
      },
      {
        image: 'https://lh3.googleusercontent.com/y7XOxpLMGgDu0F2h5i0EU6o3yW0c2iS4kvKbdk0TmAv5N6Yijng1cF5Ov3vZqTjQkDVUf4d5IUPJTGZWA1GILTcq164X9XPOXQQS=w330',
        title: '10000 final sales',
        content: (<>
          Charity donation to animal shelters (Community votes)<br />
        </>)
      }
    ]} />
  )
}

export default Roadmap
