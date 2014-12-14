# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Letter.destroy_all
User.destroy_all

Letter.create(letter: "A", points: 1)
Letter.create(letter: "B", points: 1)
Letter.create(letter: "C", points: 2)
Letter.create(letter: "D", points: 1)
Letter.create(letter: "E", points: 1)
Letter.create(letter: "G", points: 2)
Letter.create(letter: "H", points: 1)
Letter.create(letter: "I", points: 1)
Letter.create(letter: "J", points: 6)
Letter.create(letter: "K", points: 1)
Letter.create(letter: "L", points: 1)
Letter.create(letter: "M", points: 1)
Letter.create(letter: "N", points: 1)
Letter.create(letter: "O", points: 1)
Letter.create(letter: "P", points: 1)
Letter.create(letter: "Q", points: 5)
Letter.create(letter: "R", points: 1)
Letter.create(letter: "S", points: 1)
Letter.create(letter: "T", points: 1)
Letter.create(letter: "U", points: 2)
Letter.create(letter: "V", points: 1)
Letter.create(letter: "W", points: 3)
Letter.create(letter: "X", points: 10)
Letter.create(letter: "Y", points: 4)
Letter.create(letter: "Z", points: 8)


User.create({
	username: "mandytrex",
	password: "amanda",
	password_confirmation: "amanda"
	})