<template>
    <div class="loading">
        <div class="loading-box">
            <i class="fa fa-spinner fa-pulse fa-3x"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        data() {
            return {
                popup: true
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3000;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .loading-box {
        background: none;
        color: #fff;
        position: absolute;
        top: 40%;
        right: 50%;
        margin-top: -18px;
        margin-right: -18px;

    }

    .loading img {
        margin: 5rem auto;
    }
</style>