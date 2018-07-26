let reactLoaded = false;

export default () => {
  return new Promise((resolve, reject) => {
    if (reactLoaded) {
      resolve();
    } else {
      let $script = document.createElement('script');
      $script.setAttribute('src', 'react.dist.js');
      $script.onload = () => {
        reactLoaded = true;
        resolve();
      };
      $script.onerror = () => {
        reject();
      };
      document.getElementsByTagName('head')[0].appendChild($script);
    }
  });
};
