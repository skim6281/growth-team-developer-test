class GemController < ApplicationController
  def show
    @gem = Gems.info params[:name].downcase
    if !@gem.nil?
      render 'ruby_gems/show'
    else
      render json: ["Oh no! Looks like that gem can't be found."], status: 422
    end
  end
end
