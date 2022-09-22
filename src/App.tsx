import React from 'react';
import Text from './components/Text';
import InnerText from './components/InnerText';

function App() {
  return (
      <>
          <Text component={"h1"} style={{ color: 'red' }}>This is Heading 1 component.</Text>
          <Text component={'h2'} style={{ color: 'green' }}>This is Heading 2 component.</Text>
          <Text component={'h3'} style={{ color: 'blue' }}>This is Heading 3 component.</Text>
          <Text component={'h4'} style={{ color: 'yellow' }}>This is Heading 4 component.</Text>
          <Text component={'h5'} style={{ color: 'skyblue' }}>This is Heading 5 component.</Text>
          <Text component={'h6'} style={{ color: 'pink' }}>This is Heading 6 component.</Text>
          <Text component={"p"} style={{ color: 'black' }}><a href={"javascript:void(0)"} onClick={() => alert("Link Clicked....")}>This is Paragraph component with link.</a></Text>
          <Text><InnerText/></Text>
      </>
  );
}

export default App;
