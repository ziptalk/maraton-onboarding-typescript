import { defineConfig } from '@tok/generation';

const imageStyle =
  'flex: 1; display: flex; align-items: center; justify-content: center; width: 75%; align-self: center;';

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
            style: imageStyle,
          },
          textAlign: 'center',
          shape: 'square',
          pagination: 'count',
          title: 'Stake & Restake your assets',
          description:
            'Staking secures assets on the blockchain for rewards, and restaking compounds those earnings.',
          button: 'Next',
        },

        // 2nd Slide
        {
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_2.png'),
            style: imageStyle,
          },
          textAlign: 'center',
          shape: 'square',
          pagination: 'count',
          title: 'Collateralize & Liquify by NFTs',
          description:
            'Collateralizing uses NFTs as loan security, while liquifying transforms them into cash or tokens.',
          button: 'Next',
        },

        // 3rd Slide
        {
          extends: 'slide',
          media: {
            type: 'image',
            src: import('./assets/img/onboarding_3.png'),
            style: imageStyle,
          },
          textAlign: 'center',
          shape: 'square',
          pagination: 'count',
          title: 'Enjoy extra yields',
          description:
            'Enjoy extra yields means gaining added returns on investments via bonuses or incentives.',
          mainButtonText: 'Get Started!',
        },
      ],
    },
  ],
});
