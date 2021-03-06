import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import AboutUs from './components/AboutUs.vue';
import Albums from './components/Albums.vue';
import AddAlbum from './components/AddAlbum.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ThumbnailViewer from './components/ThumbnailViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import ListViewer from './components/ListViewer.vue';
import AddImage from './components/AddImage.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { 
      path: '/aboutus', component: AboutUs, 
    },
    { 
      path: '/albums', component: Albums, 
    },
    { path: '/albums/new', component: AddAlbum,
    },
    { path: '/albums/:id', component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: ThumbnailViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'list', component: ListViewer },
        { path: 'new', component: AddImage },
        { path: '', redirect: 'thumbnail' }
      ] 
    }
  ]
});