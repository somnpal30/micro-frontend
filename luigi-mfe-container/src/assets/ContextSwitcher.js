class ContextSwitcher {
   data;

  constructor() {
    this.data = {
      defaultLabel: 'language',
      parentNodePath: '/#',
      lazyloadOptions: false,
      options: [
        {
          label: 'English',
          pathValue: '/en'
        },
        {
          label: 'French',
          pathValue: 'FR'
        },
      ],
     /* actions : [
        {
          label : 'English',
          link : '/en' ,
          clickHandler : node=> {
            console.log(node);
          }
        }
      ]*/
    }
  }


}
