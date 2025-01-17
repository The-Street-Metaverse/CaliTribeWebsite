import { FunctionComponent } from 'react'
import Configuration from '~/utils/configuration'
import Nav from '~/components/elements/Nav'

const MainNav: FunctionComponent = () => {
  return (
    <Nav
      logo={{
        title: Configuration.title,
        href: '/#'
      }}
      items={[
        {
          title: 'About',
          href: '/#about'
        },
        {
          title: 'Explore',
          href: '/#explore'
        },
        {
          title: 'Roadmap',
          href: '/#roadmap'
        },
        {
          title: 'FAQ',
          href: '/#faq'
        },
        {
          title: 'Team',
          href: '/#team'
        },
        {
          title: 'Community',
          href: '/#community'
        }
      ]}
      button={{
        title: 'Buy NFT',
        href: 'https://opensea.io/collection/cali-tribe-cultivars'
      }}
    />
  )
}

export default MainNav
