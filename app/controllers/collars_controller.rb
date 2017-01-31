class CollarsController < ApplicationController
  before_action :set_collar, only: [:show, :edit, :update, :destroy]

  # GET /collars
  # GET /collars.json
  def index
    @collars = Collar.all
  end

  # GET /collars/1
  # GET /collars/1.json
  def show
  end

  # GET /collars/new
  def new
    @collar = Collar.new
  end

  # GET /collars/1/edit
  def edit
  end

  # POST /collars
  # POST /collars.json
  def create
    @collar = Collar.new(collar_params)

    respond_to do |format|
      if @collar.save
        format.html { redirect_to @collar, notice: 'Collar was successfully created.' }
        format.json { render :show, status: :created, location: @collar }
      else
        format.html { render :new }
        format.json { render json: @collar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /collars/1
  # PATCH/PUT /collars/1.json
  def update
    respond_to do |format|
      if @collar.update(collar_params)
        format.html { redirect_to @collar, notice: 'Collar was successfully updated.' }
        format.json { render :show, status: :ok, location: @collar }
      else
        format.html { render :edit }
        format.json { render json: @collar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /collars/1
  # DELETE /collars/1.json
  def destroy
    @collar.destroy
    respond_to do |format|
      format.html { redirect_to collars_url, notice: 'Collar was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collar
      @collar = Collar.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def collar_params
      params.require(:collar).permit(:name, :collarable_id)
    end
end
