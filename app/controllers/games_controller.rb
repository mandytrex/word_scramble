class GamesController < ApplicationController
  before_action :json_authenticate

  def index
  	render json: current_user.games.all;
  end

  def show
  	@game = Game.find(params[:id])
  	if current_user && current_user == @game.user
  		render json: @game
  	else
  		render json: { error: ["You are not authorized to view that game history"]}, status: 401
  	end
  end

  def create
  	game = Game.new(game_params)
  	game.user = current_user
  	if game.save
  		render json: game
  	else
  		render json: { errors: game.errors.full_messages }, status: 422
  	end
  end

  def update
  	game = Game.find(params[:id])
  	if game.update(game_params)
  		render json: game
  	else
  		render json: { errors: game.errors.full_messages }, status: 422
  	end
  end

  def destroy
  	game = Game.find(params[:id])
  	if game.destroy
  		render json: game
  	else
  		render json: { errors: game.errors.full_messages }, status: 422
  	end
  end

	private
	def game_params
		params.require(:game).permit(:total_score)
	end

	def json_authenticate
    # Render json containing errors, an array of strings
    # Render with an HTTP status of 401 (unauthorized)
    render json: { errors: ["You must be logged in"] }, status: 401 unless current_user
  end


end