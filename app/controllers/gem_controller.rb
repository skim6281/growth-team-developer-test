class GemController < ApplicationController
  require 'rubygems'
  require 'gems'

  def show
    @gem = Gems.info params[:name]
    if @gem
      render 'ruby_gems/show'
    else
      render json: ["No gem found"]
    end
  end

  def dependencies
    @gems = Gems.dependencies params[:name]
    if @gems
      render 'ruby_gems/dependencies'
    else
      render json: ["No dependencies"]
    end
  end
end
