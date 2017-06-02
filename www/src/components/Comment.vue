<template>
    <div class="well well-sm">
        <div class="comment">
            {{commentData}}
        </div>
    </div>
</template>


<script>
    export default {
        name: 'comment',
        //props recieves data
        props: ['comment-data'],
        methods: {

        },
        mounted() {
        },

    }

</script>


<style scoped lang="sass">

</style>