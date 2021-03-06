 class UsersController < ApplicationController

	def show
		@user = User.find(params[:id])
		@current_user = current_user
		respond_to do |format|
			format.html { render :show }
			format.json { render json: @user }
		end
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			session[:current_user_id] = @user.id
			redirect_to root_path
		else
			render :new
		end
	end


	private 
	def user_params
		params.require(:user).permit(:username, :password, :password_confirmation)
	end

end