class GemController < ApplicationController

  require 'rubygems'
  require 'gems'

  def show
    @gem = Gems.search params[:name]
    if @gem
      @dependencies = Gems.dependencies params[:name]
      render 'ruby_gems/gem'
    else
      render json: ["Gem not found"], status: 422
    end
  end
end
