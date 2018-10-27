// handles sidenav menu click logic
export function moveToSection(obj, indx) {
  const { fpState, fpApi, footerUILogic: { setFooterHidden, setFooterVisible } } = obj;
  const index = indx + 1;

  if (index === 6) {
    setFooterVisible();
  }

  const dest = { ...fpState.destination };
  const last = dest.isLast;

  if (last === true) {
    setFooterHidden();
  }

  fpApi.moveTo(index);
}


// toggle footer logic
export function toggleFooter(fpState, { setFooterVisible, setFooterHidden }) {
  if (fpState.callback === 'onLeave') {
    if (fpState.direction === 'down') {
      const emptySection = document.querySelector('#empty');
      if (emptySection.classList.contains('active')) {
        fpState.isFooterOpen = true;
        setFooterVisible();
      }
    } else if (fpState.direction === 'up' && fpState.origin.index === 5) {
      fpState.isFooterOpen = false;
      setFooterHidden();
    }
  }
}
