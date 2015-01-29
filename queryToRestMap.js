module.exports = {
  'orgs': {
    queryStringBasic: 'SELECT org_name FROM metrics.org_users',
    queryParameters: {
      email: 'email_address = \'{email}\''
    }
  },
  'accounts': {
    queryStringBasic: 'SELECT account_name FROM reference.v_org_account',
    queryParameters: {
      org: 'org_name = \'{org}\''
    }
  }
}