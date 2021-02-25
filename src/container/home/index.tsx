import React from 'react';
import style from './style.scss';

const HomePage: React.FC<_router> = (props: _router) => {
  const { history } = props;

  const navArr: Array<{ name: string; path?: string; url?: string }> = [
    {
      name: 'blog',
      path: '/blog',
      url: '',
    },
    {
      name: 'github',
      url: 'https://github.com/marioa5945',
    },
    {
      name: 'demos',
      path: '/demos',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/marioa49886908',
    },
    {
      name: 'resume',
      path: '/resume',
    },
  ];

  return (
    <div className={style.home}>
      <main>
        <h1>
          Mario <span>a</span>
        </h1>
        <p>is a programmer</p>
        <img src="/home/img/logo.png" />
        <nav>
          {navArr.map((n) =>
            n.url ? (
              <a key={n.name} href={n.url}>
                {n.name}
              </a>
            ) : (
              <a key={n.name} onClick={() => history.push(`/${n.name}`)}>
                {n.name}
              </a>
            )
          )}
        </nav>
      </main>
    </div>
  );
};

export default HomePage;