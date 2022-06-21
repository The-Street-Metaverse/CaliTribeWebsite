import { FunctionComponent } from 'react'
import FAQContainer from '~/components/elements/FAQContainer'

const FAQ: FunctionComponent = () => {
  return (
    <FAQContainer
      id="faq"
      title="FAQs"
      subtitle="Here are some of the most asked questions our team has received during the process of making this project, check out our responses below!"
      items={[
        {
          title: 'Why do I need a Cultivar?',
          content: (
            <>
            The Street Cultivars are a collection of 9 Cannabis Tribes of 16,710 for each Tribe of NFTs. In addition, there are 5 Warrior tribes and 5 Matriarch Tribes. The first tribe introduced in the "Cultivar" genre is an early edition of the Warrior Cali Tribe, derived from the word 'Cali,' which is short for California.
            
            All Cultivars exist on the Polygon Blockchain. Their holders can participate in "The Street Metaverse" game and exclusive events such as NFT airdrops, legendary giveaways, contests, and more. Cultivar adoptors, welcome to the Tribe reservation! Visit https://calitri.be to learn more about adoptor rights and benefits.
            </>
          )
        },
        {
          title: 'Can I trade my Cultivars?',
          content: 'Of course! Street Cultivars will be distributed according to the ERC-721 standard. You will be able to trade them on platforms like OpenSea or Rarible.'
        },
        {
          title: 'What is The Street Metaverse Game?',
          content: 'The Street Metaverse Game is a unity game with blockchain elements. The NFT you minted is tied to the game and becomes your cultivar character. By sending a cultivar to the Harvest, you will earn $REAL utility tokens, which in the future you can exchange and spend in the in-game store for valuable items and rare NFT. Parallel to this, you will need to take care of the cultivar, water it, raise its level, send it to wild harvests and climb the leaderboard. A cultivating system will also be introduced in one of the future updates.'
        },
        {
          title: 'What is a REAL Token',
          content: 'Yes! The economic basis of the game - REAL utility tokens. The Street Metaverse Alter Natives will be able to receive it. You will need to send the cultivar to the Harvest, where he will harvest $REAL. Harvesting is the main mechanic of earning tokens and includes an element of randomness. At the first stage of the game, holders will be able to collect tokens to play on in the game. Later they will be able to use them to exchange or purchase various valuable items and rare NFT prizes in the in-game store. Those who started earlier will be in a better position in the future. You can already accumulate start-up capital while waiting for updates. Beyond the fundamental TSM mechanics, our development aims to create a comfortable environment, have a good time, make new friends and make a passive income. This game will delight Residual Income fans!'
        },
        {
          title: 'When is the Game release?',
          content: 'The Street Metavertse game itself is in an early stage of development. After the main sale, the first modules of the game will open. You will have the opportunity to see your cultivar in 3D and ultimately on sending your cultivar on a hunt to farm tokens in several locations, search for 24k Gold treasure, and more. We will add new features with updates: cannabis harvesting, an in-game store, and much more! We want to provide you with the best Metaverse experience, so we dont want to rush and plan a long and confident development together with the community. Main game mechanics will be introduced in the first half of 2023.'
        },
        {
          title: 'Will it be possible to influence the development of the project?',
          content: 'Yes! Based on the feedback and discussions of our members in social networks and chats, we will adjust the development of the project, add new game mechanics and change the current ones.'
        }
 //       {
 //         title: 'How will Tree donations be made?',
 //         content: 'After the main sale, when the 100% target is reached, we make a large donation to several worldwide tree-related organizations. The community will choose by voting where exactly to donate the money. But we do not want this to be a one-time promotion, as animals need food and care every day. Therefore, on a monthly basis, we will donate a percentage of secondary sales, also electing organizations by voting among the community.'
 //       }
      ]} 
    />
  )
}

export default FAQ
