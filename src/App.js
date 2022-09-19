import { Download, Features, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title='Your own app store. Start selling & growing'
        description='Buy, store, collect, exchange Crypto. Join 25+ million people'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />

      <SectionWrapper
        title='Best mobile app marketplace in the world'
        description='Experience only the best'
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title='Deployment'
        description="This is made possible by Expo, which runs natively on all users' devices. Easily get your app in people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title='Creative way to showcase the store'
        description='This app contains two screens. The first one lists all products, the second one shows the details of a specific product'
        mockupImg={assets.mockup}
        banner='banner02'
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with extreme, most, best, ultimate, purest form of love
        </p>
      </div>
    </>
  );
}

export default App;
