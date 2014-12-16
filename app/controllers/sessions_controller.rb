class SessionsController < ApplicationController

	def new
		if session[:current_user_id]
			redirect_to root_path
		end
	end

	def create
		@user = User.find_by(username: params[:username]) || User.new
		if @user.authenticate(params[:password])
			session[:current_user_id] = @user.id
			redirect_to root_path
		else
			flash[:login_error] = "That username password combo does not match our records. Please try again, sign-up, or continue as guest."
			render :new
		end
	end

	def destroy
		session[:current_user_id] = nil
		flash[:logout] = "You have successfully logged out"
		redirect_to root_path
	end
end


