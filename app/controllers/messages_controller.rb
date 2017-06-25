class MessagesController < ApplicationController
  before_action :set_msg, only: [:show, :edit, :update, :destroy]

  def index
    @msgs = Message.all
  end

  def show
  end

  def new
    @msg = Message.new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_msg
      @msg = Message.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def msg_params
      params.require(:message).permit(:name, :content, :published, :published)
    end

end
