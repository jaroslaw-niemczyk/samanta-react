import './Example.css';
import React from 'react';
import $ from 'jquery';
import { default as ExampleJQuery } from './../jQuery/Example';

class Example extends React.Component<{}, {}> {
  componentDidMount(): void {
    ExampleJQuery();

    $('button').on('click', () => {
      console.log('hello from jQuery - button click');
    });
  }

  render(): JSX.Element {
    return (
      <button
        type="button"
        className="btn btn-secondary"
        title=""
        data-container="body"
        data-toggle="popover"
        data-placement="top"
        data-content="Vivamussagittis lacus vel augue laoreet rutrum faucibus."
        data-original-title="Popover Title"
      >
        Bottom
      </button>
    );
  }
}

export default Example;
