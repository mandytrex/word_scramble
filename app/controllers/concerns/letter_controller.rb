class LetterController < ApplicationController

	def index
		@letters = Letter.all
		render json: @letters
	end

	private

	def letter_params
		params.require(:letter).permit(:letter, :points)
	end



end