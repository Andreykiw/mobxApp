import {types} from 'mobx-state-tree';
import UsersStore from './users';
import BoardStore from './board';

const RootStore = types.model('RootStore', {
    users: UsersStore,
    boards: BoardStore,
});

export default RootStore;