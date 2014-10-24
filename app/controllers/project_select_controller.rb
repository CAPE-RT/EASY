class ProjectSelectController < ApplicationController
  before_filter :require_login

  def index
  end

  private

  def require_login
    unless current_user
      redirect_to root_url
    end
  end

end
