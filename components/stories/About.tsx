import { FunctionComponent } from 'react'
import AboutContainer from '~/components/elements/AboutContainer'
import Configuration from '~/utils/configuration'
import type { Item } from '~/pages/api/items'

const About: FunctionComponent = () => {
  return (
    <AboutContainer
      id="about"
      beforeTitle="Welcome to"
      title={Configuration.title}
      subtitle={(
        <div>
          <p>
            The Street Cultivars are a collection of 9 Cannabis Tribes of 16,710 for each Tribe of NFTs. In addition, there are 5 Warrior tribes and 5 Matriarch Tribes. The first tribe introduced in the "Cultivar" genre is an early edition of the Warrior Cali Tribe, derived from the word 'Cali,' which is short for California. All Cultivars exist on the Polygon Blockchain. Their holders can participate in "The Street Metaverse" game and exclusive events such as NFT airdrops, legendary giveaways, contests, and more. Cultivar adoptors, welcome to the Tribe reservation! Visit https://calitri.be to learn more about adoptor rights and benefits.
          </p>
          <p>
            </br></br>
           Buy Cultivars, Earn Cultivar Rewards and Experience Cultivar Grade Flower Power from the Best Growers!
          </p>
        </div>
      )}
    >
      <div>
        <iframe style={{ aspectRatio: '560 / 315', width: '100%' }} src="https://www.youtube-nocookie.com/embed/ysuZ_SW2bK0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </AboutContainer>
  )
}

export default About
