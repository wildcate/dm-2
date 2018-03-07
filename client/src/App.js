import React, { Component } from 'react';
import RichTextEditor from './RichTextEditor';
import 'prosemirror-view/style/prosemirror.css';
import 'prosemirror-menu/style/menu.css';
import 'prosemirror-example-setup/style/style.css';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
        <div style={{ gridColumn: '1' }}>
          <h3>A Text Resource</h3>
          <RichTextEditor />
        </div>
        <div style={{ gridColumn: '2' }}>
          <h3>A Canvas Resource</h3>
        </div>
      </div>
    );
  }
}

export default App;