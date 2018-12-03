<template>
<div class="tester">
    <h1>Isotope</h1>

    <nav>
        <ul>
            <li><button @click="filter('isHair')">Hair</button></li>
            <li><button @click="filter('isMakeup')">Makeup</button></li>
            <li><button @click="filter('isBridal')">Bridal</button></li>
            <li><button @click="filter(null)">All</button></li>
        </ul>
    </nav>

    <isotope ref="isotope" :options="isoOptions" 
             :list="list" 
             itemSelector="grid-item" 
             @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]"
             >

        <div v-for="(element,index) in list" :key="index">
            <img :src="element.url" :alt="element.category" />
        </div>

    </isotope>

</div>
</template>

<script>
import isotope from 'vueisotope'


export default {
    name: 'Tester',
    components: {
        isotope,
    },
    data() {
        return {
            filterOption: null,
            list: [
                { url: 'https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'hair'},
                { url: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'makeup'},
                { url: 'https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'makeup'},
                { url: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'hair'},
                { url: 'https://images.pexels.com/photos/962347/pexels-photo-962347.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'bridal'},
                { url: 'https://images.pexels.com/photos/324655/pexels-photo-324655.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'makeup'},
                { url: 'https://images.pexels.com/photos/157967/portrait-woman-girl-blond-157967.jpeg?auto=compress&cs=tinysrgb&h=350', category: 'hair'},
            ],
            isoOptions: {
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: 10, 
                },
                 getFilterData: {
                    isHair(item) {
                        return item.category === 'hair'
                    },
                    isMakeup(item) {
                        return item.category === 'makeup'
                    },
                    isBridal(item) {
                        return item.category === 'bridal'
                    },
                },
            }
        }
    },
    methods: {
        filter(key) {
            if (this.filterOption == key)  
                key = null
            this.$refs.isotope.filter(key)
            this.filterOption = key
        }
    },
}
</script>

<style lang="scss">
.tester {

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    width: 80%;
    min-height: 80rem;
    margin: 2rem auto;
    text-align: center;

    & h1 {
        margin: 3rem;
    }

    & ul {
        list-style: none;

        & li {
            display: inline-block;
            margin: 2rem;
        }
    }

    & button {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 1.6rem;
        &:hover {
            color: magenta;
        }
    }


    & .grid-item {
        margin: 1rem;
        width: 300px;
        height: 300px;
    }
    & img {
        object-fit: cover;
        object-position: center center;
        height: 100%;
        width: 100%;
    }
}
</style>