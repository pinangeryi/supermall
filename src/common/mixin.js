import {debounce} from "./utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
    
    data() {
        return {
            itemImgListener:null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 200)
        this.itemImgListener = () => {
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
        // console.log('我是混入中的内容')
    }
}

export const backTopMinxin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
            isTabFixed: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        contentScroll(position) {
            // 1 判断BackTop是否显示
            this.isShowBackTop = (-position.y) > 1000
            // 2 决定tabControl是否吸顶（position: fixed）
            this.isTabFixed = (-position.y) > this.tabOffsetTop
        }
    }
}