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
            </>
            <>
            All Cultivars exist on the Polygon Blockchain. Their holders can participate in "The Street Metaverse" game and exclusive events such as NFT airdrops, legendary giveaways, contests, and more. Cultivar adoptors, welcome to the Tribe reservation! Visit https://calitri.be to learn more about adoptor rights and benefits.
            </>
          )
        },
        {
          title: 'Can I trade my Cultivars?',
          content: 'Of course! Street Cultivars will be distributed according to the ERC-721 standard. You will be able to trade them on platforms like OpenSea.'
        },
        {
          title: 'What is The Street Metaverse Game?',
          content: 'The Street Metaverse Game is a unity game with blockchain elements. The NFT you minted is tied to the game and becomes your pet. By sending a monster to the Hunt, you will earn $TROPHY utility tokens, which in the future you can exchange and spend in the in-game store for useful items and rare NFT. Parallel to this, you will need to take care of the pet, feed it, raise its level, send it to wild duels and climb the leaderboard. A breeding system will also be introduced in one of the future updates. The bot will be a copy of the browser game for Discord server.'
        },
        {
          title: 'What is a REAL Token',
          content: 'Yes! The economic basis of the game - REAL utility tokens. The Street Metaverse Alter Natives  will be able to receive it. To do this, you will need to send the monster to the Hunt, where he will mine $TROPHY. Hunting is the main mechanic of earning tokens and includes an element of randomness. At the first stage of the game, holders will have the opportunity to collect tokens for the further game. Later they will be able to use them to exchange or purchase various useful items and rare NFT prizes in the in-game store. Who started earlier will be in a better position in the future, you can already accumulate start-up capital while waiting for updates. Beyond the fundamental P2E mechanics, the goal of our development is to create a comfortable environment for you to have a good time, make new friends and get passive profit. This game will delight Tamagotchi fans!'
        },
        {
          title: 'When is the Game release?',
          content: 'The game itself is in an early stage of development. After the main sale, the first stage of the game will open. You will have the opportunity to send a monster on a hunt to farm tokens in several different locations. With updates, we will add new features: wild duels, in-game store, breeding and much more! We want to provide you with a quality and profitable product, so we don’t want to rush and plan a long and confident development together with the community. Main game mechanics will be introduced in the first half of 2022.'
        },
        {
          title: 'Will it be possible to influence the development of the project?',
          content: 'Yes! Based on the feedback and discussions of our members in social networks and chats, we will adjust the development of the project, add new game mechanics and change the current ones.'
        },
        {
          title: 'How will donations be made?',
          content: 'After the main sale, when the 100% target is reached, we make a large donation to several worldwide animal-related organizations. The community will choose by voting where exactly to donate the money. But we do not want this to be a one-time promotion, as animals need food and care every day. Therefore, on a monthly basis, we will donate a percentage of secondary sales, also electing organizations by voting among the community.'
        }
      ]} 
    />
  )
}

export default FAQ
