$(function () {
  $('.item__top').matchHeight();



  const chooseProduct = () => {

    const setTextHover = (parent) => {
      parent.find('.item__top-text').css({ 'display': 'none' })
      parent.find('.text--hover').css({ 'display': 'block', 'color': '#D91667', })
    }

    const removeTextHover = (parent) => {
      parent.find('.item__top-text').css({ 'display': 'block' })
      parent.find('.text--hover').css({ 'display': 'none', })
    }

    const textHover = (parent) => {

      parent.on('mouseenter', function () {

        if ($(this).hasClass('selected')) {
          setTextHover($(this))
        }

      })

      parent.on('mouseleave', function () {

        if ($(this).hasClass('selected')) {
          removeTextHover($(this))
        }

      })

    }

    $('.item, .buy').on('click', function (e) {
      e.preventDefault()

      let parent = $(this).parents('.main__item')

      if (!parent.hasClass('selected') && !parent.hasClass('disabled')) {
        parent.addClass('selected')
        textHover(parent)
      } else {
        parent.removeClass('selected')
        removeTextHover(parent)
      }
    })


    textHover($('.selected'))

  }

  chooseProduct()


});
