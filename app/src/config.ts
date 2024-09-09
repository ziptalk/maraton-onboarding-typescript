import { defineConfig } from '@tok/generation';

const imageStyle =
  'flex: 1; display: flex; align-items: center; justify-content: center; width: 50%; align-self: center;';

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
          title: 'Try staking TON <br/>through MARATON!',
          description:
            'Connect your wallet, deposit your TON <br/> into MARATON, and earn additional rewards!',
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
          title: 'Unstake Your TON Securely',
          description:
            'Unstake your TON and access your funds securely in just a few steps.',
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
          button: {
            content: 'Get Started!',
            to: '/exit',
          },
        },
      ],
    },
  ],
});
