<template>
<div class="portfolio">
    <TitleHeader title="Portfolio">
        Laboris aute tempor cupidatat qui velit dolor sint aliquip.Id ut pariatur non est ea nisi incididunt fugiat mollit aliqua in ullamco tempor.'
    </TitleHeader>

    <nav id="scrollHere" class="nav" ref="portfolioNav">
        <ul>
            <li v-for="(lnk,index) in navlinks" :key="index">
                <button @click.prevent="filter('is'+lnk); jumpToNav(); activate(index+1)"
                        :class="{ active: activeIndex === index+1 }"
                >
                    {{ lnk }}</button>
            </li>
        </ul>
    </nav>

    <isotope ref="isotope" 
                id="isotope"
                class="isotope" 
                :options='isotopeOptions' 
                :list="images"
                >
        <div v-for="(img,index) in images" :key="index" class="item" :data-src="img.url">
            <img :src="img.thumb" :alt="img.category" />
        </div>
    </isotope>

</div>
</template>

<script>
import 'lightgallery.js'
import 'lg-thumbnail.js'
import 'lg-fullscreen.js'
import 'lg-zoom.js'
import 'lightgallery.js/dist/css/lightgallery.css'
import isotope from 'vueisotope'

import TitleHeader from '@/components/TitleHeader'

export default {
    name: 'Portfolio',
    components: {
        isotope,
        TitleHeader
    },
    data() {
        return {
            activeIndex: 1,
            navlinks: ['MakeOver', 'Hair', 'Bridal', 'Fashion',],
            filterOption: null,
            isotopeOptions: {
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: 100,
                    isFitWidth: true,
                },
                 getFilterData: {
                    isHair(item) {
                        return item.category === 'hair'
                    },
                    isMakeOver(item) {
                        return item.category === 'makeover'
                    },
                    isBridal(item) {
                        return item.category === 'bridal'
                    },
                    isFashion(item) {
                        return item.category === 'fashion'
                    },
                },
            },
        }
    },
    methods: {
        activate(index) {
            this.activeIndex = index
        },
        filter(key) {
            if (this.filterOption == key)  
                key = null
            this.$refs.isotope.filter(key)
            this.filterOption = key
        },
        jumpToNav() {
            // this.$refs.portfolioNav.scrollIntoView(true)
            this.$router.push({
                name: 'portfolio',
                hash: '#scrollHere',
            })
        },
        importAll(r) {
            var imgs = {}
            r.keys().forEach(key => (imgs[key] = r(key)))
            return imgs
        }
    },
    computed: {
        images() {
            let images = []
            let allImages = this.importAll(require.context('../assets/portfolio/', true, /\.(png|jpe?g|svg)$/))
            let allThumbs = this.importAll(require.context('../assets/thumbnails/', true, /\.(png|jpe?g|svg)$/))
            for (var image in allImages) {
                var imageName = image.split('/').pop()
                var pieces = imageName.split('.')
                pieces.pop()
                var rest = pieces.join('.')
                var thumb = allThumbs['./' + rest + '.jpg']

                images.push({
                    // url: allImages[image],
                    url: allImages[image], 
                    thumb: thumb,
                    category: image.split('/').slice(-2)[0]
                })
            }
            return images
        }
    },
    beforeMount() {
    },
    mounted() {
        const el = document.querySelector('#isotope')
        window.lightGallery(el, {
            selector: '.item',
            closable: false,
            thumbnail: true,
            animateThumb: true,
            // thumbWidth: 120,
            download: false,
            preload: 2,
            hideBarsDelay: 3000,
            getCaptionFromTitleOrAlt: true,
            showThumbByDefault: false,
        })
    },
}
</script>

<style lang="scss">
.portfolio {
    display: flex;
    flex-direction: column;
    min-height: 80rem;
    align-items: center;
    
    img {
        cursor: pointer;
    }

    & .container {
        flex-direction: column;
    }
    
    & ul li {
        display: inline-block;
        margin: 0 1.5rem;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    & button{
        padding: 2rem 1rem;
        background: none;
        text-transform: uppercase;
        font-weight: 700;
        font-family: var(--font-family-alt);
        font-size: 0.9rem;
        color: var(--font-color);
        transition: 0.3s;

        &:hover {
            color: var(--color-primary);
        }
    }

    & .active {
        color: var(--color-primary);
    }

    & .isotope .item{
        width: 20rem;
        margin: 1rem;
        height: 15rem;
        overflow: hidden;
        background: var(--color-primary);
        // box-shadow: 0 0 50px var(--fontcolor-light);
    }

    & .isotope img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transition: all 0.5s;
        opacity: 1;

        &:hover {
            transform: scale(1.05);
            opacity: 0.8;
            
        }
    }

    
}

div.lg-thumb.group {
    margin-left: auto !important;
    margin-right: auto !important;
}
</style>