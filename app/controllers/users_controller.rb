class UsersController < ApplicationController

  def show
    @user = User.friendly.find(params[:id])
    if request.path != user_path(@user)
      return redirect_to user_path(@user), :status => :moved_permanently
    end
    unless current_user == @user
      redirect_to root_path, notice: "That's not your page"
    end
  end

end
