import Vue from 'vue'
import Router from 'vue-router'
import PlayerView from '@/components/PlayerView'
import Photo from '@/components/Photo'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'player',
            component: PlayerView
        },
        {
            path: '/photo/:id',
            name: 'photo',
            component: Photo
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        }
    ]
})