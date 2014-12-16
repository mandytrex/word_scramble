class Game < ActiveRecord::Base
	validates :total_score, presence: true
	belongs_to :user
end