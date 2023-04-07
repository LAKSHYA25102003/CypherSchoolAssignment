const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="relative"
      data-te-carousel-init
      data-te-carousel-slide>
      <div
        class="relative mr-2 mt-2 overflow-hidden after:clear-both after:block after:content-['']">
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            class="block w-full"
            alt="Wild Landscape" />
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            class="block w-full"
            alt="Camera" />
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            class="block w-full"
            alt="Exotic Fruits" />
        </div>
      </div>
    </div>
  )
}

export default Carousel