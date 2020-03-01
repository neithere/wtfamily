db.createUser({
  user: 'wtfamily',
  pwd: 'my-wtfamily-pwd',
  roles: [
    {
      role: 'readWrite',
      db: 'wtfamily'
    }
  ]
})
