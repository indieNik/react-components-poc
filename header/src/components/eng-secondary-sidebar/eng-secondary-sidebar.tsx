import { Component } from '@stencil/core';

@Component({
  tag: 'eng-secondary-sidebar',
  styleUrl: 'eng-secondary-sidebar.scss',
  shadow: true
})
export class EngSecondarySidebar {

  render() {
    return [
      <div class="SecondarySidebar"></div>,
      <div class="SecondarySidebarButton">
          <svg width="30" height="30" viewBox="0 0 25 25" focusable="false" role="presentation">
              <path d="M6 12c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 12zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 16zm0-8c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 8z" fill="currentColor">
              </path>
          </svg>
      </div>
  ]
  }
}
