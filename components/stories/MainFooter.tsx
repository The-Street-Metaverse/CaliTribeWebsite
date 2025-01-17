import { FunctionComponent, useMemo } from 'react'
import Configuration from '~/utils/configuration'
import Footer from '~/components/elements/Footer'
import SocialLink from '../elements/SocialLink';

const MainFooter: FunctionComponent = () => {
  const social = useMemo(() => ([
    'https://medium.com/cultivar-tribes',
    'https://discord.gg/UVYzjkQdbn',
    'https://twitter.com/cultivartribes',
    'https://www.facebook.com/streetcultivars',
    'https://www.instagram.com/thecultivartribes/',
    'https://t.me/cultivartribes',
//    'https://www.tiktok.com/',
//    'https://www.youtube.com/',
  ]), []);

  return (
    <Footer 
      id="community"
      title="Join Our Community"
      content={(
        <>
          <p>Become a part of an incredible Cultivar Earthvana Community, declare yourself and get the latest news!</p>
          <div aria-label="Join">
            {social.map((link, index) => <SocialLink large link={link} key={index} />)}
          </div>
        </>
      )}
    />
  )
}

export default MainFooter
