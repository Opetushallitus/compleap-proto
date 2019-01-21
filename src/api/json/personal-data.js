const personalData = []

personalData[1001] = {
  'basicInfo': {
    'name': 'Maryam Margain',
    'age': '28',
    'city': 'Brussels',
    'id': '1001',
    'blurp': 'Customer service professional looking for new challenges'
  },
  'additionalInfo': [
    'Completed studies',
    'Worklife services',
    'Previous study applications'
  ],
  'degrees': [
    {
      'name': 'Master of Arts',
      'location': 'University of Brugge',
      'verified': true,
      'from': '2015/2',
      'to': '2018/8',
      'competences': [
        { 'gid': '2001', 'verified': true, 'competence': 'd1 Teaching verified' },
        { 'gid': '2001', 'verified': true, 'competence': 'd1 Customer service verified' },
        { 'gid': '2001', 'verified': true, 'competence': 'd1 Presentation techniques verified' },
        { 'gid': '2002', 'verified': true, 'competence': 'Critical thinking' },
        { 'gid': '2002', 'verified': true, 'competence': 'Scientific study methods' },
        { 'gid': '2003', 'verified': true, 'competence': 'Teaching' },
        { 'gid': '2003', 'verified': true, 'competence': 'Customer service' },
        { 'gid': '2003', 'verified': true, 'competence': 'Presentation techniques' },
        { 'gid': '2004', 'verified': true, 'competence': 'Critical thinking' },
        { 'gid': '2004', 'verified': true, 'competence': 'Scientific study methods' },
        { 'gid': '2005', 'verified': true, 'competence': 'Customer service' },
        { 'gid': '2005', 'verified': true, 'competence': 'Presentation techniques' },
        { 'gid': '2005', 'verified': true, 'competence': 'Customer empathy' },
        { 'gid': '2006', 'verified': true, 'competence': 'Scientific study methods' },
        { 'gid': '2006', 'verified': true, 'competence': 'Critical thinking' },
        { 'gid': '2007', 'verified': true, 'competence': 'Presentation techniques' },
        { 'gid': '2007', 'verified': true, 'competence': 'Teaching' },
        { 'gid': '2007', 'verified': true, 'competence': 'Customer empathy' },
        { 'gid': '2008', 'verified': true, 'competence': 'Teaching' },
        { 'gid': '2008', 'verified': true, 'competence': 'Scientific study methods' },

        { 'gid': '2001', 'verified': false, 'competence': 'd1 Teaching' },
        { 'gid': '2001', 'verified': false, 'competence': 'd1 Customer service' },
        { 'gid': '2001', 'verified': false, 'competence': 'd1 Customer empathy' },
        { 'gid': '2002', 'verified': false, 'competence': 'Critical thinking' },
        { 'gid': '2002', 'verified': false, 'competence': 'Scientific study methods' },
        { 'gid': '2003', 'verified': false, 'competence': 'Teaching' },
        { 'gid': '2003', 'verified': false, 'competence': 'Customer service' },
        { 'gid': '2003', 'verified': false, 'competence': 'Presentation techniques' },
        { 'gid': '2004', 'verified': false, 'competence': 'Critical thinking' },
        { 'gid': '2004', 'verified': false, 'competence': 'Scientific study methods' },
        { 'gid': '2005', 'verified': false, 'competence': 'Customer service' },
        { 'gid': '2005', 'verified': false, 'competence': 'Presentation techniques' },
        { 'gid': '2005', 'verified': false, 'competence': 'Customer empathy' },
        { 'gid': '2006', 'verified': false, 'competence': 'Scientific study methods' },
        { 'gid': '2006', 'verified': false, 'competence': 'Critical thinking' },
        { 'gid': '2007', 'verified': false, 'competence': 'Presentation techniques' },
        { 'gid': '2007', 'verified': false, 'competence': 'Teaching' },
        { 'gid': '2007', 'verified': false, 'competence': 'Customer empathy' },
        { 'gid': '2008', 'verified': false, 'competence': 'Teaching' },
        { 'gid': '2008', 'verified': false, 'competence': 'Scientific study methods' }
      ]
    },
    {
      'name': 'Master of Science',
      'location': 'University of Helsinki',
      'verified': true,
      'competences': [
        { 'gid': '2001', 'verified': true, 'competence': 'd2 Customer service verified' },
        { 'gid': '2001', 'verified': true, 'competence': 'd2 Customer empathy verified' },
        { 'gid': '2001', 'verified': true, 'competence': 'd2 Presentation techniques verified' },
        { 'gid': '2002', 'verified': true, 'competence': 'Critical thinking' },
        { 'gid': '2002', 'verified': true, 'competence': 'Scientific study methods' },
        { 'gid': '2003', 'verified': true, 'competence': 'Teaching' },
        { 'gid': '2003', 'verified': true, 'competence': 'Customer service' },
        { 'gid': '2003', 'verified': true, 'competence': 'Presentation techniques' },
        { 'gid': '2004', 'verified': true, 'competence': 'Critical thinking' },
        { 'gid': '2004', 'verified': true, 'competence': 'Scientific study methods' },
        { 'gid': '2005', 'verified': true, 'competence': 'Customer service' },
        { 'gid': '2005', 'verified': true, 'competence': 'Presentation techniques' },
        { 'gid': '2005', 'verified': true, 'competence': 'Customer empathy' },
        { 'gid': '2006', 'verified': true, 'competence': 'Scientific study methods' },
        { 'gid': '2006', 'verified': true, 'competence': 'Critical thinking' },
        { 'gid': '2007', 'verified': true, 'competence': 'Presentation techniques' },
        { 'gid': '2007', 'verified': true, 'competence': 'Teaching' },
        { 'gid': '2007', 'verified': true, 'competence': 'Customer empathy' },
        { 'gid': '2008', 'verified': true, 'competence': 'Teaching' },
        { 'gid': '2008', 'verified': true, 'competence': 'Scientific study methods' },

        { 'gid': '2001', 'verified': false, 'competence': 'd2 Teaching' },
        { 'gid': '2001', 'verified': false, 'competence': 'd2 Customer empathy' },
        { 'gid': '2001', 'verified': false, 'competence': 'd2 Presentation techniques' },
        { 'gid': '2002', 'verified': false, 'competence': 'Critical thinking' },
        { 'gid': '2002', 'verified': false, 'competence': 'Scientific study methods' },
        { 'gid': '2003', 'verified': false, 'competence': 'Teaching' },
        { 'gid': '2003', 'verified': false, 'competence': 'Customer service' },
        { 'gid': '2003', 'verified': false, 'competence': 'Presentation techniques' },
        { 'gid': '2004', 'verified': false, 'competence': 'Critical thinking' },
        { 'gid': '2004', 'verified': false, 'competence': 'Scientific study methods' },
        { 'gid': '2005', 'verified': false, 'competence': 'Customer service' },
        { 'gid': '2005', 'verified': false, 'competence': 'Presentation techniques' },
        { 'gid': '2005', 'verified': false, 'competence': 'Customer empathy' },
        { 'gid': '2006', 'verified': false, 'competence': 'Scientific study methods' },
        { 'gid': '2006', 'verified': false, 'competence': 'Critical thinking' },
        { 'gid': '2007', 'verified': false, 'competence': 'Presentation techniques' },
        { 'gid': '2007', 'verified': false, 'competence': 'Teaching' },
        { 'gid': '2007', 'verified': false, 'competence': 'Customer empathy' },
        { 'gid': '2008', 'verified': false, 'competence': 'Teaching' },
        { 'gid': '2008', 'verified': false, 'competence': 'Scientific study methods' }
      ]
    }
  ],
  'jobs': [
    {
      'name': 'Marketing Assistant',
      'location': 'Londerzeel Ice Cream Factory ltd.'
    },
    {
      'name': 'Sandwich Artist',
      'location': 'Subway Oy Ab'
    }
  ]
}

personalData[1002] = {
  'basicInfo': {
    'name': 'Stanis Dunlap',
    'age': '38',
    'city': 'Helsinki',
    'id': '1002',
    'blurp': 'IT-Helpdesk guy sick of job'
  },
  'additionalInfo': [
    'Completed studies',
    'Worklife services',
    'Previous study applications'
  ],
  'degrees': [
    {
      'name': 'Master´o Farts',
      'location': 'University of Brugge'
    },
    {
      'name': 'Master of Science',
      'location': 'University of Helsinki'
    }
  ],
  'jobs': [
    {
      'name': 'Marketing Assistant',
      'location': 'Londerzeel Ice Cream Factory ltd.'
    },
    {
      'name': 'Sandwich Artist',
      'location': 'Subway Oy Ab'
    }
  ]
}

personalData[1003] = {
  'basicInfo': {
    'name': 'Lisa Cleveland',
    'age': '24',
    'city': 'Helsinki',
    'id': '1003',
    'blurp': 'IT-Helpdesk gal sick of job'
  },
  'additionalInfo': [
    'Completed studies',
    'Worklife services',
    'Previous study applications'
  ],
  'degrees': [
    {
      'name': 'Master´o Farts',
      'location': 'University of Brugge'
    },
    {
      'name': 'Master of Science',
      'location': 'University of Helsinki'
    }
  ],
  'jobs': [
    {
      'name': 'Marketing Assistant',
      'location': 'Londerzeel Ice Cream Factory ltd.'
    },
    {
      'name': 'Sandwich Artist',
      'location': 'Subway Oy Ab'
    }
  ]
}

personalData[1004] = {
  'basicInfo': {
    'name': 'Johan Mcculloch',
    'age': '31',
    'city': 'Turku',
    'id': '1004',
    'blurp': 'IT-Helpdesk guy sick of job'
  },
  'additionalInfo': [
    'Completed studies',
    'Worklife services',
    'Previous study applications'
  ],
  'degrees': [
    {
      'name': 'Master´o Farts',
      'location': 'University of Brugge'
    },
    {
      'name': 'Master of Science',
      'location': 'University of Helsinki'
    }
  ],
  'jobs': [
    {
      'name': 'Marketing Assistant',
      'location': 'Londerzeel Ice Cream Factory ltd.'
    },
    {
      'name': 'Sandwich Artist',
      'location': 'Subway Oy Ab'
    }
  ]
}

personalData[1005] = {
  'basicInfo': {
    'name': 'Eleonora Bell',
    'age': '22',
    'city': 'Helsinki',
    'id': '1005',
    'blurp': 'IT-Helpdesk gal sick of job'
  },
  'additionalInfo': [
    'Completed studies',
    'Worklife services',
    'Previous study applications'
  ],
  'degrees': [
    {
      'name': 'Master´o Farts',
      'location': 'University of Brugge'
    },
    {
      'name': 'Master of Science',
      'location': 'University of Helsinki'
    }
  ],
  'jobs': [
    {
      'name': 'Marketing Assistant',
      'location': 'Londerzeel Ice Cream Factory ltd.'
    },
    {
      'name': 'Sandwich Artist',
      'location': 'Subway Oy Ab'
    }
  ]
}

export default personalData
