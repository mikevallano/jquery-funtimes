class TrinketsController < ApplicationController
  before_action :set_trinket, only: [:show, :edit, :update, :destroy]

  # GET /trinkets
  # GET /trinkets.json
  def index
    @trinkets = Trinket.all
  end

  # GET /trinkets/1
  # GET /trinkets/1.json
  def show
  end

  # GET /trinkets/new
  def new
    @trinket = Trinket.new
  end

  # GET /trinkets/1/edit
  def edit
  end

  # POST /trinkets
  # POST /trinkets.json
  def create
    @trinket = Trinket.new(trinket_params)

    respond_to do |format|
      if @trinket.save
        format.html { redirect_to @trinket, notice: 'Trinket was successfully created.' }
        format.json { render :show, status: :created, location: @trinket }
      else
        format.html { render :new }
        format.json { render json: @trinket.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trinkets/1
  # PATCH/PUT /trinkets/1.json
  def update
    respond_to do |format|
      if @trinket.update(trinket_params)
        format.html { redirect_to @trinket, notice: 'Trinket was successfully updated.' }
        format.json { render :show, status: :ok, location: @trinket }
      else
        format.html { render :edit }
        format.json { render json: @trinket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trinkets/1
  # DELETE /trinkets/1.json
  def destroy
    @trinket.destroy
    respond_to do |format|
      format.html { redirect_to trinkets_url, notice: 'Trinket was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trinket
      @trinket = Trinket.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trinket_params
      params.require(:trinket).permit(:name, :description)
    end
end
