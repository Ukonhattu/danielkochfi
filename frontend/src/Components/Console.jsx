import { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import ScrollToBottom from 'react-scroll-to-bottom';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ConsoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 0;
  border-radius: 0.5rem;
  width: 800px;
  height: 400px;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow: hidden;
  position: relative;
  cursor: text;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  text-align: left;

  @media (max-width: 1000px) {
    width: 85vw;
    height: 85vh;
    border-radius: 0;
    border: none;
    font-size: 0.7rem;
  }
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  height: 2rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 0 0.5rem;
`;

const TitleBarButtons = styled.div`
  display: flex;
`;

const TitleBarButton = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const CloseButton = styled(TitleBarButton)`
  background-color: #ff5f56;
`;

const MinimizeButton = styled(TitleBarButton)`
  background-color: #ffbd2e;
`;

const ZoomButton = styled(TitleBarButton)`
  background-color: #27c93f;
`;

const TitleBarTitle = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: #d4d4d4;
`;

const ConsoleContent = styled(ScrollToBottom)`
  padding-left: 1rem;
  flex-grow: 1;
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
`;

const ConsoleInput = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 0 0.5rem;
  white-space: nowrap;
  position: relative;
`;

const ConsoleInputText = styled.input`
  background-color: transparent;
  border: none;
  color: #d4d4d4;
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1.5;
  flex-grow: 1;
  width: 100%;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const ConsoleCursor = styled.div`
  position: absolute;
  width: 0.2rem;
  height: 1.2rem;
  background-color: #d4d4d4;
  animation: ${blink} 1s linear infinite;
  right: 1rem;
`;

function Console(props) {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const inputRef = useRef();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
        const value = `guest@danielkochfi > ${inputValue}`;
        setHistory([...history, value]);
      setInputValue('');
    }
  };

  const handleConsoleClick = () => {
    inputRef.current.focus();
  }

  return (
    <ConsoleWrapper onClick={handleConsoleClick}>
      <TitleBar>
        <TitleBarButtons>
          <CloseButton />
          <MinimizeButton />
          <ZoomButton />
        </TitleBarButtons>
        <TitleBarTitle>Daniel Koch</TitleBarTitle>
      </TitleBar>
      <ConsoleContent>
        {props.children}
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </ConsoleContent>
      <ConsoleInput>

      <span>guest@danielkochfi &gt; </span>
        <ConsoleInputText
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          autoFocus
          />
        
      </ConsoleInput>
    </ConsoleWrapper>
  );
}

export default Console;

Console.propTypes = {
    children: PropTypes.node,
    };