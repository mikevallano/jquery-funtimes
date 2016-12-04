class CommentsController < ApplicationController
  before_action :set_comments
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET trinkets/1/comments
  def index
    @comments = @trinket.comments
  end

  # GET trinkets/1/comments/1
  def show
  end

  # GET trinkets/1/comments/new
  def new
    @comment = @trinket.comments.build
  end

  # GET trinkets/1/comments/1/edit
  def edit
  end

  # POST trinkets/1/comments
  def create
    @comment = @trinket.comments.build(comment_params)

    if @comment.save
      redirect_to([@comment.trinket, @comment], notice: 'Comment was successfully created.')
    else
      render action: 'new'
    end
  end

  # PUT trinkets/1/comments/1
  def update
    if @comment.update_attributes(comment_params)
      redirect_to([@comment.trinket, @comment], notice: 'Comment was successfully updated.')
    else
      render action: 'edit'
    end
  end

  # DELETE trinkets/1/comments/1
  def destroy
    @comment.destroy

    redirect_to trinket_comments_url(@trinket)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comments
      @trinket = Trinket.find(params[:trinket_id])
    end

    def set_comment
      @comment = @trinket.comments.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:name, :content)
    end
end
