export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebec08a68f98601d301fa0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3khxupzo',
                  apiId: '43be1f6f-2e13-49ea-92ca-7955bbe5ed92'
                },
                {
                  buildHookId: '5ebec08ae740ce20891eca7f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cm21cpjw',
                  apiId: '0bfd9ec8-205a-4e66-b62b-8cefc0530593'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dhairyasharma504/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cm21cpjw.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
