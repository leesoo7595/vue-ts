import Vue from 'vue';
import Vuex, {StoreOptions, ActionContext} from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

const store: StoreOptions<State> = {
  
};

export default new Vuex.Store(store);