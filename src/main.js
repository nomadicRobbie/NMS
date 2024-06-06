import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEdit, faPlus, faSave, faTrash, faBars, faSort, faMinusCircle, faPlusCircle, faEnvelope, faCaretDown, faShoppingCart, faShop, faShoppingBasket, faCircleArrowLeft, faCircleArrowRight, faTrashCan, faStar, faArrowRight, faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add( faFacebook, faInstagram, faPhone, faEdit, faPlus, faSave, faTrash, faBars, faSort, faMinusCircle, faPlusCircle, faEnvelope, faCaretDown, faShoppingCart, faShop, faShoppingBasket, faCircleArrowLeft, faCircleArrowRight, faTrashCan, faStar, faArrowRight, faArrowLeft, faXmark);


const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);


app.mount('#app')
