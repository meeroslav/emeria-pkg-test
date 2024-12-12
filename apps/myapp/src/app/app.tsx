// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { childOne } from '@emeria-pkg-test/child-one';
import { childTwo } from '@emeria-pkg-test/child-two';

export function App() {
  return (
    <section>
      <h2>Child One</h2>
      {childOne()}
      <h2>Child Two</h2>
      {childTwo()}
    </section>
  );
}

export default App;
