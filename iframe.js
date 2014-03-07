
/* see Issue "autoresize" http://drupal.org/node/360549 */
Drupal.behaviors.iframe_resize = function() {
  $('iframe.autoresize').each(function() {
    $(this)[0].contentWindow.onload = function() {
      $(this)[0].frameElement.style.height = ($(this)[0].document.body.scrollHeight) + 'px';
      $(this)[0].frameElement.scrolling = 'no';
    };
    $(this)[0].contentWindow.frameElement.style.height = ($(this)[0].contentWindow.document.body.scrollHeight) + 'px';
    $(this)[0].contentWindow.frameElement.scrolling = 'no';
  });
}

