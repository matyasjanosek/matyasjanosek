import { ref } from 'vue'

const getPortfolio = () => {
    const portfolioItems = ref([
        {
          id: 1,
          image: '/public/images/image-2@2x.png',
          link: 'https://aiireland.ie/'
        },
        {
          id: 2,
          image: '/public/images/image-3@2x.png',
          link: 'https://matyasjanosek.github.io/trapholt/index.html'
        },
        {
          id: 3,
          image: '/public/images/image-4@2x.png',
          link: 'https://tehksgi.dk/'
        },
        {
          id: 4,
          image: '/public/images/image-5@2x.png',
          link: 'https://smicro.eu/'
        },
        {
          id: 5,
          image: '/public/images/image-6@2x.png',
          link: 'https://anafra.eu/'
        },
      ])

      return {portfolioItems}
}

export default getPortfolio

