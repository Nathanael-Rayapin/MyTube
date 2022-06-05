export const SettingsLists: SettingsLists[] = [
    {
      title: 907,
      iconClass: 'bi bi-hand-thumbs-up'
    },
    {
      title: 0,
      iconClass: 'bi bi-hand-thumbs-down'
    },
    {
      title: 'share',
      iconClass: 'bi bi-share'
    },
    {
      title: 'download',
      iconClass: 'bi bi-download'
    },
    {
      title: 'sample',
      iconClass: 'bi bi-scissors'
    },
    {
      title: 'save',
      iconClass: 'bi bi-bookmark-plus'
    },
    {
      iconClass: 'bi bi-three-dots'
    }
  ]

  export interface SettingsLists {
    title?: string|number;
    iconClass?: string;
  }