class StaticPagesController < ApplicationController
  require 'rubygems'
  require 'gems'

  def root
    @gem = Gems.search params[:name]
    @dependencies = Gems.dependencies @gem if @gem
    render 'ruby_gems/show'
  end

  def favorites
  end

end
