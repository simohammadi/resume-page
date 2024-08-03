export interface ExperienceData {
  company: {
    name: string;
    projectName: string;
    domain: URL;
    logo: {
      src: string;
      dim: number;
      padding?: number;
    };
  };
  teamDescription: string;
  contributionDescription: string;
  badges: {
    frameworks: Array<string>;
    technologies: Array<string>;
  };
}

export const workExperience: Array<ExperienceData> = [
  {
    company: {
      name: 'Klarna',
      projectName: 'Login Platform',
      logo: { src: './images/icons/klarna-logo.png', dim: 60 },
      domain: new URL('https://klarna.se')
    },
    teamDescription: `The login platform team built the foundation for moving all customer facing authentication to one system. 
  Although the system was built by Sina and the team, the rollout work was still lagging behind. The login platform solution
  would replace the legacy systems used for login, hence ensuring that the migration of the solution went well was very important
  since sign in is a business critical service. Sina and the team managed to roll out the platform in all the major integration
  points. By doing this Sina and the team allowed for a higher conversion rate due to SSO, this led to an increase in login conversion.
  As part of the team, Sina has helped out with monitoring and debugging the solution and the integration points, along with
  developing new features to enable the rollout further.`,
    contributionDescription:
      'Sina and the team managed to roll out the platform in all the major integration points. By doing this Sina and the team allowed for a higher conversion rate due to SSO, this led to an increase in login conversion. As part of the team, Sina has helped out with monitoring and debugging the solution and the integration points, along with developing new features to enable the rollout further.',
    badges: {
      frameworks: ['node.js', 'express', 'react', 'OIDC', 'Oauth'],
      technologies: ['aws', 'cloudfront', 'postgress']
    }
  },
  {
    company: {
      name: 'Klarna',
      projectName: 'Sign in with Klarna',
      logo: { src: './images/icons/klarna-logo.png', dim: 60 },
      domain: new URL('https://klarna.se')
    },
    teamDescription: `The Sign in with Klarna team aimed to expose the login platforms OIDC service to merchants by offering easy ways of integrating. This enabled Klarna customers to smoothly onboard at merchants and allowed make purchases without unnecessary friction.`,
    contributionDescription:
      'As a lead engineer Sina was part of the initial task force made up of product manager designer and Sina. Once the system and product requirements were laid out, Sina was part of assembling the team that built the product. As the product was external facing, Sina participated in sales meetings and technical discussions with merchants. Assisting leadership to understand the intricacy of the product and helping the engineers integrating the Sign in with Klarna product.',
    badges: {
      frameworks: ['node.js', 'express', 'react', 'OIDC', 'Oauth'],
      technologies: ['aws', 'cloudfront', 'postgress']
    }
  },
  {
    company: {
      name: 'Novo nordisk',
      projectName: 'Research colaboration platform',
      logo: { src: './images/icons/novo-nordisk-logo.png', dim: 60, padding: 3 },
      domain: new URL('https://www.novonordisk.com')
    },
    teamDescription: `Sina was brought in as a consultant to the team due to his experience within the authentication space. The project aimed to build a platform where Novo Nordisk data could be exposed both to researchers at novo but also to external institutions and actors.`,
    contributionDescription:
      'Sina took part in the initial workshops were the aim was to map all of the product and system requirements, that would lay the foundation for the project. After all of the requirements had been gathered Sina mentored the two engineers that were implementing the system at Novo Nordisk. The POC was successful and launched with two different stakeholders allowing them to get data from Novo Nordisk assisting in their research.',
    badges: {
      frameworks: ['Oauth2', 'OIDC', 'Okta-identity', 'OIDC', 'Oauth'],
      technologies: ['On prem', 'Okta-identity', 'Shell']
    }
  },
  {
    company: {
      name: 'Klarna',
      projectName: 'Login platform',
      logo: { src: './images/icons/klarna-logo.png', dim: 60 },
      domain: new URL('https://klarna.se')
    },
    teamDescription:
      "Sina's journey at Klarna began as a lead developer with the main focus on DevOps. Since the Login platform team at Klarna was greenfield as Sina joined, he and his team had to build the platform and the tooling surrounding it from scratch.",
    contributionDescription:
      'In the Login platform team Sina was involved in architectural discussions, developing pipelines, deploying infrastructure and system design. A large emphasis was on monitoring, scalability and availability, since the system is business critical with the potential of reaching millions of users.',
    badges: {
      frameworks: ['oidc', 'oauth2', 'ts', 'js', 'golang', 'react', 'rds', 'redis'],
      technologies: ['jenkins', 'aws']
    }
  },
  {
    company: {
      name: 'Telia',
      projectName: 'Customer identity',
      logo: { src: './images/icons/telia-logo.png', dim: 30, padding: 5 },
      domain: new URL('https://telia.se')
    },
    teamDescription:
      'The team developed the identity and access management systems that have each product at Telia as a stakeholder. Reliability and scalability was essential for the project.',
    contributionDescription:
      'Sina joined Telia as a backend developer working with OIDC flows and data management. The team started moving from keeping data locked within one service to transition to micro services with well defined responsibilities as Sina joined. Being part of this change Sina developed microservices that store data, authenticate users and orchestrate user flows.',
    badges: {
      frameworks: ['oidc', 'oauth2', 'ts', 'js', 'golang', 'react', 'graphql', 'chai', 'react'],
      technologies: ['aws', 'lambda', 'dynamoDB', 'concourse', 'github actions', 'datadog']
    }
  },
  {
    company: {
      name: 'ABB',
      projectName: 'Transformer production',
      logo: { src: './images/icons/abb-logo.png', dim: 27, padding: 2 },
      domain: new URL('https://new.abb.com/se')
    },
    teamDescription:
      'To mitigate human errors during the manufacturing of transformers applied at power plants, the team started to work on a quality assurance system powered by machine learning and computer vision. Since the slightest mistake or deviation from design would affect the physical properties of the transformer and potentially render the component useless, any verification tool would reduce the losses of the department.',
    contributionDescription:
      'Within the team Sina took on the role as a machine learning engineer, the objective of the team was to develop a proof of concept. Sina developed two methods, one relying on neural networks for categorisation of images taken during manufacturing, and the other one relying on traditional image processing. Both methods worked and performed with high accuracy, this allowed the project to move to real life testing.',
    badges: {
      frameworks: ['python', 'numpy', 'keras', 'tensorflow', 'matlab'],
      technologies: ['computer vision', 'hough transform', 'transfer learning', 'neural networks']
    }
  }
];
