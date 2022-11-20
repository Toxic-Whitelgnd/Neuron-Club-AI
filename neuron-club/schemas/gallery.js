export default {
    title: 'Gallery',
    name: 'gallery',
    type: 'document',
    
    fields:[
        {
            name:'gname',
            title:'Name',
            type:'string',
        },{
        name:'image',
        title:'Image',
        type:'image',
        Options:{
            hotspot: true
        },
    }]
  }