import { defineConfig } from '@tok/generation';

// Default configuration for the NexTon onboarding kit
export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // 1st Slide
        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_1.png'),
            style:
              'flex: 1; display: flex; align-items: center; justify-content: center',
          },
          textAlign: 'center',
          shape: 'square',
          pagination: 'count',
          title: 'Stake & Restake your assets',
          description:
            'Staking locks your assets in a blockchain to earn rewards. Restaking reinvests those rewards to compound earnings.',
          button: 'Next',
        },

        // 2nd Slide
        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_2.png'),
            style:
              'flex: 1; display: flex; align-items: center; justify-content: center',
          },
          textAlign: 'center',
          shape: 'square',
          pagination: 'count',
          title: 'Collateralize & Liquify by NFTs',
          description:
            'Collateralizing involves using NFTs as security for a loan, while liquifying converts NFTs into a more fluid form of value, like cash or tokens.',
          button: 'Next',
        },

        // 3rd Slide
        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_3.png'),
            style:
              'flex: 1; display: flex; align-items: center; justify-content: center',
          },
          textAlign: 'center',
          shape: 'square',
          pagination: 'count',
          title: 'Enjoy extra yields',
          description:
            'Enjoy extra yields refers to earning additional returns on your investments, often through bonuses, staking rewards, or other incentive mechanisms.',
          button: {
            content: 'Launch NexTon!',
            href: 'https://hack-a-ton-frontend-iota.vercel.app',
          },
        },
      ],
    },
  ],
});
