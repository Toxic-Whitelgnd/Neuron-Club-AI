// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import events from './events'
import gallery from './gallery'
import organizers from './organizers'
import course from './course'

import post from './Blog/post'
import category from './Blog/category'
import blockContent from './Blog/blockContent'
import author from './Blog/author'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    events,gallery,organizers,course,
    post,author,category,blockContent
  ]),
})
