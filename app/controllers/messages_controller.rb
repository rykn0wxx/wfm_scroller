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
    @msg = Message.new(msg_params)

    respond_to do |format|
      if @msg.save
        format.html { redirect_to messages_path, notice: 'Message was successfully created.' }
        format.json { render :show, status: :created, location: @msg }
      else
        format.html { render :new }
        format.json { render json: @msg.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @msg.update(msg_params)
        format.html { redirect_to messages_path, notice: 'Message was successfully updated.' }
        format.json { render :show, status: :ok, location: @msg }
      else
        format.html { render :edit }
        format.json { render json: @msg.errors, status: :unprocessable_entity }
      end
    end
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
      params.require(:message).permit(:name, :content, :valid_to, :published)
    end

end
