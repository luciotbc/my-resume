module.exports = {
  siteTitle: "Lucio Charallo Resume", // <title>
  manifestName: "Resume",
  manifestShortName: "Landing", // max 12 characters
  manifestStartUrl: "",
  manifestBackgroundColor: "#6f42c1",
  manifestThemeColor: "#6f42c1",
  manifestDisplay: "standalone",
  manifestIcon: "src/assets/images/favicon.png",
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: "Lucio",
  lastName: "Charallo",
  email: "hi@lucio.app",
  address: "Curitiba, Brazil",
  about:
    "In the past 10 years, I've been working on different projects delivering value through clean, tested and maintainable code.",
  socialLinks: [
    {
      icon: "fa-github",
      name: "Github",
      url: "https://github.com/luciotbc",
    },
    {
      icon: "fa-linkedin-in",
      name: "Linkedin",
      url: "https://www.linkedin.com/in/lucio-charallo",
    },
    {
      icon: "fa-twitter",
      name: "Twitter",
      url: "https://twitter.com/luciotbc",
    },
    {
      icon: "fa-facebook-f",
      name: "Facebook",
      url: "https://facebook.com/lucio.charallo",
    },
    {
      icon: "fa-instagram",
      name: "Instagram",
      url: "https://facebook.com/luciotbc",
    },
  ],
  experiences: [
    {
      company_url: "https://www.truelogicsoftware.com",
      company: "True Logic",
      descriptions: [
        "My main activities were to develop new features in the client-side application using Ruby on Rails and jQuery interspersed with bugfix of old features using unit tests to avoid new bugs. I'm worked with the gem active_admin improving the administration pages. I'm refactored a search feature to improve the performance and extend the search to more resources of using the gem pg_search.",
        "Other tasks that I was responsible was the upgrade Ruby version aside to dockerized the development environment. I had actively participated in a discussion about how to migrate the application form Heroku to AWS and wrote a shell script to migrate the databases from Heroku to RDS using CloudFormation to define the cloud infrastructure.",
      ],
      end_date: "Present",
      start_date: "October 2019",
      title: "Teach Leader",
    },
    {
      company_url: "https://www.pipefy.com",
      company: "Pipefy",
      descriptions: [
        "The Pipefy platform empowers managers to build and execute any type of workflow through a simple Kanban-style interface and without the need of IT, technical skills or professional services. We understand that every business is unique and it’s the uniqueness of your processes that drives competitive advantage. Our customizable platform gives you better visibility and control for flawless execution.",
        "As a full-stack developer there, my day-to-day work heavily relies on Ruby on Rails for the backend, GraphQL for the API, PostgreSQL for the database, React.js and Redux for the UI. I also do a lot of testing, specially with Rspec, Capybara, Cypress and Jest, and use Continuous Integration tools in our workflow.",
      ],
      end_date: "October 2019",
      start_date: "February 2017",
      title: "Full Stack Engineer",
    },
    {
      company_url: "https://appsindicato.org.br",
      company: "Full Stack Engineer",
      descriptions: [
        "A syndicate of Workers in Public Education of Paraná which represents more than 50,000 teachers promoting better quality education.",
        "My primary role was developing and maintain the company’s CRM and create integrations with legacy services. This CRM was created with Ruby on Rails and PostgreSQL.",
      ],
      end_date: "January 2017",
      start_date: "July 2016",
      title: "App Sindicato Dos Trabalhadores Em Educacao Publica Do Parana",
    },
    {
      company_url: "https://lactec.org.br",
      company: "LACTEC",
      descriptions: [
        "Institutos Lactec serves the market and society, offering innovative solutions using science and technology. The qualified multidisciplinary technical staff which works in its network of laboratories is the institution’s principal asset. From the researcher to the mechanic, from the technician to the doctor, all the professions are prepared to pursue results of excellence in research and development projects, technological services, consulting, and training for a wide range of segments.",
        "I worked there with Java EE, C#, ASP .NET, PostgreSQL, Oracle database, SQL Server to maintaining and developing applications of Research & development projects for Electric Power Utilities on the following areas: Smart Grid, Demand-Side Management, Distribution Automation, Energy Efficiency, Computational Intelligence applications.",
      ],
      end_date: "July 2016",
      start_date: "January 2012",
      title: "Researcher",
    },
  ],
  education: [
    {
      institute_url: "https://www.unicentro.br",
      institute: "Universidade Estadual do Centro-Oeste",
      descriptions: [],
      topics: [
        "2007 - Participação na UNATI - Universidade aberta da terceira Idade",
        "2008 - Monitor de Programação 2",
        "2009 - Participação no projeto de extensão - Agregação de Valor e Formação de Recursos Humanos na Produção de Pedras Ametistas da Região de Chopinzinho",
        "2011 - Participação no projeto Lixo Eletrônico Guarapuava",
      ],
      end_date: "December 2011",
      start_date: "January 2006",
      title: "Computer Science",
      type: "Computer Science",
    },
  ],
  skills_by_category: 
  [
    {
      title: "Front-end",
      skills: [
        "apollo_graphql",
        "bootstrap",
        "gatsby",
        "html5",
        "haml",
        "jest",
        "jqurey",
        "javascript",
        "npm",
        "react",
        "webpack",
        "yarn",
      ]
    },
    {
      title: "Back-end",
      skills: [
        "ruby",
        "ruby_on_rails",
        "capybara",
        "graphql",
        "elixir",
        "phoenix_framework"
      ]
    },
    {
      title: "DevOps",
      skills:
      [
        "docker",
        "heroku",
        "travis",
        "gitlab",
        "semaphore",
        "jenkins",
        "kubernetes",
        "new_relic",
        "datadog"
      ]
    },
    {
      title: "AWS",
      skills:
      [
        "aws_ec2",
        "aws_rds",
        "aws_s3",
        "aws_cloudfront",
        "aws_route53",
        "aws_ecs",
        "aws_vpc",
        "aws_cloudwatch",
        "aws_codedeploy"
      ]
    },
    {
      title: "Undefined",
      skills:
      [
        "bash",
        "linux",
        "raspberry_pi",
      ]
    },
  ],
}
