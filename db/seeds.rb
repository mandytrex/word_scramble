# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Game.destroy_all

mandy = User.create({
	username: "mandytrex",
	password: "amanda",
	password_confirmation: "amanda"
	})

joe = User.create({
	username: "joenapo",
	password: "joe",
	password_confirmation: "joe"
	})


Game.create({
	total_score: 4,
	user_id: mandy.id
	})

Game.create({
	total_score: 100,
	user_id: mandy.id
	})

Game.create({
	total_score: 52,
	user_id: mandy.id
	})

Game.create({
	total_score: 35,
	user_id: joe.id
	})

Game.create({
	total_score: 2,
	user_id: joe.id
	})

Game.create({
	total_score: 88,
	user_id: joe.id
	})