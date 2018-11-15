<template>
<div class="nav-bar">
    <div class="container">
        <div class="nav-right">
            <ul>
                <li><a href="#" class="is-active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </div>
        <div class="brand">
            <h1>Dan Tam </h1>
        </div>
        <div class="nav-left">
            <ul>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>
.nav-bar {
    display: flex;
    flex-direction: space-between;
    padding: 0.5rem 0;
    font-size: 1rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
}

ul li {
   display: inline-block; 
   padding: 0 3rem;

   &:first-child {
       padding-left: 0;
   }
   &:last-child {
       padding-right: 0;
   }
}

.brand {
    margin: 0 auto;
    text-transform: uppercase;
}

a {
    padding-bottom: 0.2rem;
    border-bottom: 2px solid #fff;
    position: relative;

    &:hover:after {
        width: 100%;
    }
    
    &:after {
        position: absolute;
        content: '';
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-primary);
        transition: all 0.3s;
    }
}

.is-active {
    padding-bottom: 4px;
    border-bottom: 2px solid var(--color-primary);

    &:hover:after {
        content: none;
    }
}



//border-bottom: 2px solid var(--color-primary);
 
</style>