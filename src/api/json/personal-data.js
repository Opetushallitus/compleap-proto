const personalData = []

personalData[1001] = {
  'basicInfo': {
    'name': 'Lisa Ellwood',
    'age': '16',
    'city': 'Kotka, Finland',
    'id': '1001',
    'blurp': 'Trying to find an inspiring new educational path'
  },
  'additionalInfo': [
    'Completed studies',
    'Previous study applications'
  ],
  'keyCompetences': [
    {
      'name': 'Chemistry',
      'level': '5'
    }
  ],
  'openBadges': [
    {
      'name': 'Pro active',
      'issuer': 'European youth exchanges',
      'badgeFile': 'open-badge-active.png'
    }
  ],
  'degrees': [
    {
      'name': 'Upper secondary school',
      'location': 'City of Kotka',
      'verified': true,
      'from': '2015/2',
      'to': '2018/8',
      'competences': [
        { 'gid': '2002', 'verified': true, 'competence': 'Chemistry' },
        { 'gid': '2003', 'verified': false, 'competence': 'Chemistry' },
        { 'gid': '2008', 'verified': false, 'competence': 'Travelling' }
      ]
    }
  ],
  'jobs': [
    {
      'name': 'Sandwich Artist',
      'location': 'Subway Oy Ab',
      'from': '2017/2',
      'to': '2018/1'
    }
  ]
}

personalData[1002] = {
  'basicInfo': {
    'name': 'Eleonora Jacobson',
    'age': '21',
    'city': 'Liminka, Finland',
    'id': '1002',
    'blurp': 'Trying to find an inspiring job'
  },
  'additionalInfo': [
    'Completed studies',
    'Worklife services',
    'Previous study applications'
  ],
  'keyCompetences': [
    {
      'name': 'Drawing',
      'level': '4'
    }
  ],
  'openBadges': [
    {
      'name': 'Pro active',
      'issuer': 'European youth exchanges',
      'badgeFile': 'open-badge-active.png'
    }
  ],
  'degrees': [
    {
      'name': 'Vocational Qualification in Arts and Design',
      'location': 'City of Liminka',
      'verified': true,
      'from': '2015/2',
      'to': '2018/8',
      'competences': [
        { 'gid': '2001', 'verified': true, 'competence': 'Product making' },
        { 'gid': '2001', 'verified': true, 'competence': 'Project work' },
        { 'gid': '2005', 'verified': true, 'competence': 'Customer service' },
        { 'gid': '2001', 'verified': true, 'competence': 'Marketing' },
        { 'gid': '2003', 'verified': true, 'competence': 'Coding' },
        { 'gid': '2008', 'verified': true, 'competence': 'Drawing' },
        { 'gid': '2002', 'verified': false, 'competence': 'Tinkering' },
        { 'gid': '2002', 'verified': false, 'competence': 'Hobby crafts' },
        { 'gid': '2008', 'verified': false, 'competence': 'Design' },
        { 'gid': '2008', 'verified': false, 'competence': 'Drawing' }
      ]
    }
  ],
  'jobs': [
    {
      'name': 'Supermarket cashier',
      'location': 'Citymarket Liminka',
      'from': '2017/2',
      'to': '2018/1'
    }
  ]
}

personalData[1003] = {
  'basicInfo': {
    'name': 'Mohammed Jamal',
    'age': '20',
    'city': 'Helsinki, Finland',
    'id': '1003',
    'blurp': 'Trying to find a permanent job at cleaning sector. Eager to learn more Finnish language'
  },
  'additionalInfo': [
    'Previous study applications'
  ],
  'keyCompetences': [
    {
      'name': 'Drawing',
      'level': '4'
    }
  ],
  'openBadges': [
    {
      'name': 'Pro active',
      'issuer': 'European youth exchanges',
      'badgeFile': 'open-badge-active.png'
    }
  ],
  'degrees': [
    {
      'name': 'Upper secondary education',
      'location': 'Irak',
      'verified': false,
      'from': '2015/2',
      'to': '2018/8',
      'competences': [
        { 'gid': '2008', 'verified': false, 'competence': 'Having fun with friends' },
        { 'gid': '2008', 'verified': false, 'competence': 'Social media' },
        { 'gid': '2008', 'verified': false, 'competence': 'Football' },
        { 'gid': '2001', 'verified': false, 'competence': 'Customer orientation' },
        { 'gid': '2001', 'verified': false, 'competence': 'Maintenance cleaning services' },
        { 'gid': '2005', 'verified': false, 'competence': 'Customer sites' },
        { 'gid': '2005', 'verified': false, 'competence': 'Customer service' },
        { 'gid': '2007', 'verified': true, 'competence': 'English language' }
      ]
    }
  ],
  'jobs': [
    {
      'name': 'Apprenticeship training',
      'location': 'Company Oy Ab Helsinki',
      'from': '2017/2',
      'to': '2018/1'
    },
    {
      'name': 'Warehouse worker',
      'location': 'Company Oy Ab Espoo',
      'from': '2018/1',
      'to': '2019/1'
    }
  ]
}

personalData[1004] = {
  'basicInfo': {
    'name': '(N/A)',
    'age': '(N/A)',
    'city': '(N/A)',
    'id': '1004',
    'blurp': '(N/A)'
  },
  'additionalInfo': [],
  'keyCompetences': [],
  'openBadges': [],
  'degrees': [{
    'name': '(N/A)',
    'location': '(N/A)',
    'verified': false,
    'from': '2015/2',
    'to': '2018/8',
    'competences': [
      { 'gid': '2001', 'verified': false, 'competence': '' }
    ]
  }],
  'jobs': [
    {
      'name': '(N/A)',
      'location': '',
      'from': '2017/2',
      'to': '2018/1'
    }
  ]
}

export default personalData
