# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user     = User.where(email: "orangemoney52@gmail.com").first_or_create
practice = Practice.where({
             user: user, 
             name: 'Dummy Practice',
             db_username: 'root',
             db_password: '0kYYELlxbY',
             db_port: 3306,
             db_host: '45.55.171.27'
           }).first_or_create