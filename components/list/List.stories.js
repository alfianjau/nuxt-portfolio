import { storiesOf } from '@storybook/vue'
import List from '@/components/list/List'
import store from '@/.storybook/store'
storiesOf('Lists', module)
  .add('Users', () => ({
    components: { List },
    store,
    template: '<List />'
  }))
  .add('Comments', () => ({
    components: { List },
    store,
    template: `<List :source="'comments'" />`
  }))
