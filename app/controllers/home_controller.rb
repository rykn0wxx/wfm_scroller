class HomeController < ApplicationController
  def index
    @msgs = Message.all
  end
end
