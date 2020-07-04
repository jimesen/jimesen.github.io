const options = {
    lazyParentClass: '.lazy-load--item',
    lazyItemClass: 'img'
  }
  
  const lazyLoadParents = document.querySelectorAll(options.lazyParentClass)
  
  const lazyLoad = new IntersectionObserver(entries => {
    entries.map(entry => {
      if (!entry.isIntersecting) return false
      const img = entry.target.querySelector(options.lazyItemClass)
  
      if (img) {
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset
          img.removeAttribute('data-srcset')
        }
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
        }
        img.onload = () => img.classList.add('loaded')
      }
    })
  })
  
  lazyLoadParents.forEach(item => {
    lazyLoad.observe(item)
  })
  
  