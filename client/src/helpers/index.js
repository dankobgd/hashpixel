// handles sidenav menu click logic
export function moveToSection(obj, indx) {
  const { fpState, fpApi, footerUILogic: { setFooterHidden, setFooterVisible } } = obj;
  const index = indx + 1;
  const dest = { ...fpState.destination };
  const last = dest.isLast;
  const { isResponsive } = fpState;
  const footerElm = document.querySelector('footer');

  // for desktop screen size menu
  if (!isResponsive) {
    if (index === 6) {
      setFooterVisible();
    }

    if (last === true) {
      setFooterHidden();
    }

    fpApi.moveTo(index);
  }

  // for mobile screen size menu
  if (isResponsive) {
    if (index === 1) {
      fpApi.moveTo(index);
    } else if (index === 2) {
      fpApi.moveTo(index);
    } else if (index === 3) {
      fpApi.moveTo(index);
    } else if (index === 4) {
      fpApi.moveTo(index);
    } else if (index === 5) {
      fpApi.moveTo(index);
    } else if (index === 6) {
      setFooterVisible();
      footerElm.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }

    if (last === true) {
      setFooterHidden();
    }
  }
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
