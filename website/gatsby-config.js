// site metadata
const siteTitle = `Daler 🐙's`
const siteDescription = `Daler's personal website and blog made for sharing his ideas, projects, research, and thoughts.`
const siteUrl = 'https://www.dalerasrorov.com'
const siteKeywords = [
  'Daler',
  'Asrorov',
  'software engineer',
  'developer',
  'personal website',
  'blog',
  'projects',
  'tech',
]
const siteImage = `${siteUrl}/icons/icon_512x512.png`

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-highlight-code',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
  ],
}
