export default {
    title: 'Gallery',
    name: 'gallery',
    type: 'document',

    
    
       
    
    fields:[
        {
            name: 'imagesGallery',
            title: 'Images gallery',
            type: 'array',
            of: [{ type: 'image' }],
              
        },
        {
            name:'gname',
            title:'Name',
            type:'string',
        }
    ]
  }