export interface ExperienceData {
  company: {
    name: string;
    projectName: string;
    logoSrc: string;
    domain: URL;
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
      logoSrc: '/images/icons/klarna-logo.png',
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
      logoSrc: '/images/icons/klarna-logo.png',
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
      logoSrc: '/images/icons/novo-nordisk-logo.png',
      domain: new URL('https://www.novonordisk.com')
    },
    teamDescription: `Sina was brought in as a consultant to the team due to his experience within the authentication space. The project aimed to build a platform where Novo Nordisk data could be exposed both to researchers at novo but also to external institutions and actors.`,
    contributionDescription:
      'Sina took part in the initial workshops were the aim was to map all of the product and system requirements, that would lay the foundation for the project. After all of the requirements had been gathered Sina mentored the two engineers that were implementing the system at Novo Nordisk. The POC was successful and launched with two different stakeholders allowing them to get data from Novo Nordisk assisting in their research.',
    badges: {
      frameworks: ['Oauth2', 'OIDC', 'Okta-identity', 'OIDC', 'Oauth'],
      technologies: ['On prem', 'Okta-identity', 'Shell']
    }
  }
];
