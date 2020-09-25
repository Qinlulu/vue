// 导入自己需要的组件
import { Container, Header, Aside, Main, Menu, Select, Option, 
    Submenu, MenuItem ,Breadcrumb ,BreadcrumbItem,DatePicker
} from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Container)
        Vue.use(Header) 
        Vue.use(Aside)
        Vue.use(Main)
        Vue.use(Menu)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(DatePicker)
    }
}
export default element
