import generateDocs from 'generate-docs'
import $ from 'shelljs'

const sections = ['annotators', 'filters', 'pipeline', 'sinks', 'util']

sections.forEach(section =>
  generateDocs({
    paths: $.ls(`src/${section}/*.js`),
    output: `docs/${section}.md`,
  }),
)
