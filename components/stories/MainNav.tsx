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
        title: 'WHERE TO BUY',
        href: 'https://opensea.io/assets/matic/0xd0c009379d5f1ae71c34623c4ddd775051e9a164/10'
      }}
    />
  )
}

export default MainNav
