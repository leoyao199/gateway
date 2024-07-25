// src/Dropdown.tsx
import React, { useState } from 'react';
import LanguageIcon from "../../public/language.svg";
import Image from 'next/image';
import { color } from '@/app/theme';
const GWLanguageButton = (props: { onClick: (e: string) => void; currentLanguage: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const lngList = [['English', 'en'], ['中文繁體', 'zh'], ['中文简体', 'cn'], ['Tiếng Việt', 'vn']]

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownStyles: React.CSSProperties = {
    position:'relative'
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: "white",
    paddingRight: '10px',
    border: 'none',
    cursor: 'pointer',
    height:20
  };

  const menuStyles: React.CSSProperties = {
    display: 'block',
    position: 'absolute',
    backgroundColor: 'white',
    minWidth: '160px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    zIndex: 1,
    borderRadius: '5px',
    right:0
  };

  const linkStyles: React.CSSProperties = {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block'
  };

  const linkHoverStyles: React.CSSProperties = {
    backgroundColor: '#ddd'
  };

  return (
    <div style={dropdownStyles}>
      <button style={buttonStyles} onClick={toggleDropdown}>
        <Image
          priority
          src={LanguageIcon}
          alt="Language switcher"
          height={20}
          color={color.header}
        />
      </button>
      {isOpen && (
        <div style={menuStyles}>
          {lngList.map((language, index) => (
            <a
              key={index}
              href={''}
              onClick={(e) => {
                e.preventDefault()
                props.onClick(language[1])
                setIsOpen(false)
              }}
              style={linkStyles}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = `${linkHoverStyles.backgroundColor}`)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              {language[0]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default GWLanguageButton;
