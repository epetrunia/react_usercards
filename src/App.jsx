import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.scss';
import classNames from 'classnames';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = (e) => {
    if (isOpen && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  });

  const handleMenuBtn = (e) => {
    setIsOpen((prevValue) => !prevValue);
  };

  const menuStyle = classNames(styles.menu, { [styles.menuOpen]: isOpen });

  return (
    <>
      <header className={styles.header}>
        <Icon onClick={handleMenuBtn} path={mdiMenu} size={1} />
      </header>
      <article ref={menuRef} className={menuStyle}>
        <Icon onClick={handleMenuBtn} path={mdiMenu} size={1} />
      </article>
    </>
  );
};

export default App;
