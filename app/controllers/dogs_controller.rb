class DogsController < ApplicationController
  before_action :set_dog, only: [:show, :edit, :update, :destroy]

  # GET /dogs
  # GET /dogs.json
  def index
    @dogs = Dog.all
    @dog = Dog.new
  end

  # GET /dogs/1
  # GET /dogs/1.json
  def show
  end

  # GET /dogs/new
  def new
    @dog = Dog.new
  end

  # GET /dogs/1/edit
  def edit
  end

  # POST /dogs
  # POST /dogs.json
  def create
    @dog = Dog.new(dog_params)

    respond_to do |format|
      if @dog.save
        format.html { redirect_to @dog}
        format.json { render :show, status: :created, location: @dog }
        format.js
      else
        flash.now[:alert] = "Error creating dog: #{@dog.errors.full_messages.join(', ')}"
        format.html { render :new }
        format.json { render json: @dog.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  # PATCH/PUT /dogs/1
  # PATCH/PUT /dogs/1.json
  def update
    respond_to do |format|
      if @dog.update(dog_params)
        format.html { redirect_to @dog, notice: 'Dog was successfully updated.' }
        format.json { render :show, status: :ok, location: @dog }
        format.js
      else
        flash.now[:alert] = "Error updating dog: #{@dog.errors.full_messages.join(', ')}"
        format.html { render :edit }
        format.json { render json: @dog.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  # DELETE /dogs/1
  # DELETE /dogs/1.json
  def destroy
    @dog.destroy
    respond_to do |format|
      flash.now[:notice] = "Dog successfully destroyed."
      format.html { redirect_to dogs_url}
      format.json { head :no_content }
      format.js
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dog_params
      params.require(:dog).permit(:name, :description)
    end
end
