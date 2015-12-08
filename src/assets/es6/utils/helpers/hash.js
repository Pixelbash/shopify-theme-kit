export default class Hash {
  pub() {
    $(window).bind( 'load hashchange', (e) => {
      console.log('pub hash change');
      radio('window/hash/change').broadcast({
        e:e,
        hash:location.hash.slice(1)
      });
    }); 
  }
} 