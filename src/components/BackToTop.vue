<template>
    <div class="back-to-top" :class="{ active: isActive } ">
        <button @click="scrollToTop"><i class="fas fa-angle-up"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BackToTop',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    },
    created() {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 200) {
            this.isActive = true
        } else {
            this.isActive = false
        }
      })
  }
}
</script>

<style lang="scss">
.back-to-top {
    position: fixed;
    bottom: -99px;
    right: 2rem;
    z-index: 1;
    animation: slideDown 0.6s ease-in-out;
}

.back-to-top.active {
    bottom: 2.5rem;
    animation: slideUp 0.6s ease-in-out;
}

.back-to-top button {
    border: none;
    background-color: rgba(var(--color-primary-darken-rgb), 0.9);
    padding: 0.9rem 1.2rem;

    & > i {
        font-size: 1.2rem;
        color: #ffffff;
    }
}

@keyframes slideUp {
    from {
        bottom: -99px;
    }
    to {
        bottom: 2.5rem;
    }
}
@keyframes slideDown {
    from {
        bottom: 2.5rem;
    }
    to {
        bottom: -99px;
    }
}
</style>