class Letter < ActiveRecord::Base
	validates :letter, presence: true, uniqueness: true
	validates_presence_of :points
end