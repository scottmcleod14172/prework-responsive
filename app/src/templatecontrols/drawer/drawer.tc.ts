import {register, ui} from 'platypus';

export default class DrawerTemplateControl extends ui.TemplateControl {
    templateString: string = require('./drawer.tc.html');
    hasOwnContext = true;

    context = {
        drawerVisible: false
    }
    constructor() {
        super();
        this.on('navigating', () => {
            this.context.drawerVisible = false;
        })
    }

}

register.control('drawer', DrawerTemplateControl);
