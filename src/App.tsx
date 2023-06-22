import { useState, useRef, useMemo } from 'react';

import { GlobalStyle } from './styles/global';

import { Sidenav } from './components/Sidenav';
import { RecommendationCard } from './components/RecommendationCard';
import { SearchBar } from './components/SearchBar';
import { ChatWindow } from './components/ChatWindow';

const recommendations = [
  {
    title: 'Romance Movies Recommendations',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem vitae dolores voluptatum odio quibusdam dignissimos odit quam dicta aliquam tempore sequi saepe ipsa ut, tempora dolore, culpa incidunt optio?',
  },
  {
    title: 'Horror Movies Recommendations',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem vitae dolores voluptatum odio quibusdam dignissimos odit quam dicta aliquam tempore sequi saepe ipsa ut, tempora dolore, culpa incidunt optio?',
  },
  {
    title: 'Action Movies Recommendations',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem vitae dolores voluptatum odio quibusdam dignissimos odit quam dicta aliquam tempore sequi saepe ipsa ut, tempora dolore, culpa incidunt optio?',
  },
  {
    title: 'Movies like The Godfather',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem vitae dolores voluptatum odio quibusdam dignissimos odit quam dicta aliquam tempore sequi saepe ipsa ut, tempora dolore, culpa incidunt optio?',
  },
];
  
const searchResults = 'lorem';
  
function App() {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

  const memoizedSideNav = useMemo(() => <Sidenav />, []);

  return (
    <>
      <GlobalStyle />
      <div
        className='app-container'
        style={{
          position: 'relative',
          height: '90vh',
          padding: '2rem',
          backgroundColor: 'var(--clr-background)',
          width: '90%',
          borderRadius: '2rem',
          display: 'flex',
          gap: '1.5rem',
        }}>
        {memoizedSideNav}
        <div
          className='RC-container'
          style={{
            width: '40rem',
            marginLeft: '6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            // overflowY: 'auto',
          }}>
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
          {recommendations
            .slice(0, 4)
            .filter((recommendation) => {
              return (
                recommendation.title.toLowerCase().includes(search.toLowerCase()) ||
                recommendation.description.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((recommendation, i) => (
              <li key={i}>
                <RecommendationCard
                  title={recommendation.title}
                  text={recommendation.description}
                />
              </li>
            ))}
          {/* {recommendations.slice(0, 4).map((recommendation, i) => (
            <li key={i}>
              <RecommendationCard
                title={recommendation.title}
                text={recommendation.description}
              />
            </li>
          ))} */}
        </div>
        <ChatWindow
          input={input}
          setInput={setInput}
        />
      </div>
    </>
  );
}

export default App;
