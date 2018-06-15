ready = ->
  $(document).on 'click', '.clickable', ->
    clickable = document.createElement('a')
    clickable.href = $(this).data('url')

    if location.hostname != clickable.hostname
      window.open $(this).data('url')
    else
      window.location.href = $(this).data('url')

    return false

$(document).on('ready', ready);
