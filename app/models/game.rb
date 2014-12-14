class Game < ActiveRecord::Base
	validates :total_score, presence: true
end