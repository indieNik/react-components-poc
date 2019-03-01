import { Component } from '@stencil/core';

@Component({
  tag: 'eng-header',
  styleUrl: 'eng-header.scss',
  shadow: true
})
export class EngHeader {

  render() {
    return <div class="Header"></div>;
  }
}
