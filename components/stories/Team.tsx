import { FunctionComponent } from 'react'
import TeamContainer from '~/components/elements/TeamContainer'

const Team: FunctionComponent = () => {
  return (
    <TeamContainer
      id="team"
      title="Meet the Cultivar Team"
      items={[
        {
          image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
          title: 'D"Artagnan',
          role: 'Dev/Techie',
          social: [
            'https://www.instagram.com/',
            'https://www.tiktok.com/'
          ]
        },
        {
          image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
          title: 'Pavvy',
          role: 'Artist/Animator',
          social: [
            'https://medium.com/',
            'https://www.tiktok.com/',
            'https://www.instagram.com/'
          ]
        },
        {
          image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
          title: 'Alya',
          role: 'Creative Director',
          social: [
            'https://www.linkedin.com/',
            'https://medium.com/'
          ]
        },
        {
          image: 'https://raw.githubusercontent.com/The-Street-Metaverse/CaliTribeWebsite/f80be2ddc9dd192771ee83cea3022e6f3dda3114/images/RastaFrog.svg',
          title: 'Lawana',
          role: 'Marketeer',
          social: [
            'https://medium.com/',
            'https://www.tiktok.com/',
            'https://youtube.com'
          ]
        },
        // {
        //   image: 'https://lh3.googleusercontent.com/RoFfvKqZOJg9q_z4_9k0x8ZlG1dqqP5jHRotn7VtoS0SGapemSzLVuPR5Oiryakx5TveO7UIKRBEew2w4ZX3WlopRRAdjJUiuFSq=w600',
        //   title: 'Kristina',
        //   role: 'Manager',
        //   social: [
        //     'https://twitter.com/',
        //     'https://facebook.com',
        //     'https://youtube.com'
        //   ]
        // },
        // {
        //   image: 'https://lh3.googleusercontent.com/tdgtAdY4YkpJmHlWe-m3g7NBA2stDCJHsesNOEotwyprE43_GBpgYWP3-_XgxIJCCdStjyccuKqI-B19syMDQvklrMaZjrRHUDNHpg=w600',
        //   title: 'Wild Cake',
        //   role: 'Curator/NFT expert',
        //   social: [
        //     'https://facebook.com',
        //     'https://www.linkedin.com/'
        //   ]
        // },
        // {
        //   image: 'https://lh3.googleusercontent.com/LjHTFxtTb_oe09-MgGIh8AXMqzNkTS2Kz3q0Jw1ltky2HpjSi3BOhGAoO7a5-aXRpCxWBt9tpSuPXdoadHSrYo_MG4D1CQjT44xIvc4=w600',
        //   title: 'Zorking',
        //   role: 'Backend & Game dev',
        //   social: [
        //     'https://www.linkedin.com/',
        //     'https://www.instagram.com/kriakiku/'
        //   ]
        // }
      ]}
    />
  )
}

export default Team
