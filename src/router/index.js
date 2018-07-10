import Vue from 'vue'
import Router from 'vue-router'
import PlayerView from '@/components/PlayerView'
import Photo from '@/components/Photo'
import Video from '@/components/Video'
import CameraView from '@/components/CameraView'


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
        },
        {
            path: '/camera',
            name: 'camera',
            component: CameraView
        }
    ]
})