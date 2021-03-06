import getWindow from './isWindow'

export default function scrollTop(node, val){
  let win = getWindow(node);

  if ( val === undefined )
    return win
      ? ('pageXOffset' in win)
        ? win.pageXOffset
        : win.document.documentElement.scrollLeft
      : node.scrollLeft;

  if ( win )
    win.scrollTo(val, ('pageYOffset' in win)
      ? win.pageYOffset
      : win.document.documentElement.scrollTop)
  else
    node.scrollLeft = val
}
