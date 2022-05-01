import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Hero from './components/Hero';
import About from './components/About';
import Card from './components/Card';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="mx:container flex-col pb-10 min-h-full bg-sol-tan-1">
      <Header />
      <Body>
        <Hero />

        <div className="flex gap-10 ml-5 mr-5">
          <div className="w-5/6">
            <Card title="Experience!">
              <Resume />
            </Card>
          </div>

          <div className="flex flex-col gap-5">
            <Card title="Welcome to my page!">
              <p>
                {' '}
                Hey there! My name is Allen Clark. I'm software engineer located
                in Tokyo, Japan. I'm enthusiastic about all things tech and
                open-source and currently, loving Elixir and Phoenix.{' '}
              </p>
            </Card>

            <Card title="More about me!">
              <About />
            </Card>

            <Card title="Contact me!">
              <Contact />
            </Card>
          </div>
        </div>
      </Body>
    </div>
  );
}

export default App;
