export enum ExternalRouteTarget {
  /**
   * Opens the linked document in the same frame as it was clicked (this is default)
   * */
  self = '_self',

  /**
   * Opens the linked document in a new window or tab
   * */
  blank = '_blank',

  /**
   * Opens the linked document in the parent frame
   */
  parent = '_parent',

  /**
   * Opens the linked document in the full body of the window
   */
  top = '_top'
}
